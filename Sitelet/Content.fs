namespace Website

module Content =
    open System.IO
    open System.Web
    open IntelliFactory.Html
    open IntelliFactory.WebSharper
    open IntelliFactory.WebSharper.Sitelets
    open IntelliFactory.WebSharper.Sitelets.Content
    open Utils
    open Mongo
    open Tags
    open Model

    let snippetColumn snippet =    
        Div [Class "col-md-6 snippet"] -< [
            H3 [
                A [HRef <| "/snippet/" + string snippet.SnipId + "/" + snippet.Url] -< [
                    Text snippet.Title
                ]
            ]
            P [Text snippet.Desc]
        ]

    module Footer =

        let elt : HtmlElement =
            HTML5.Footer [Id "footer"] -< [
                    P [Class "text-center"] -< [
                        Text "Built with "
                        A [HRef "http://www.websharper.com/"; Target "_blank"] -< [
                            Text "WebSharper"
                        ]
                    ]
                    P [Class "text-center"] -< [
                        Text "Snippets in database: 30"
                    ]

            ]

    module Home =

        let snippetsRow snippet snippet' =
            Div [Class "row"] -< [
                snippetColumn snippet
                snippetColumn snippet'
            ]  

        let searchSection =
            HTML5.Section [Class "row"] -< [
                new Search.Control()
            ]
                                
        let snippetsSection =
            let snippets = //[Div []]
                Snippets.latest10()
                |> Seq.toList
                |> split 2
                |> List.map (fun lst -> snippetsRow lst.[0] lst.[1])
            HTML5.Section [Class "featured container"] -< [
                yield H2 [
                    Text "Latest snippets "
                    A [HRef "/rss"] -< [
                        Img [
                            Src "/Images/feed-icon.png"
                            Alt "RSS Feed"
                            Id "feed-icon"
                        ]                    
                    ]
                ]
                yield! snippets
            ]

        let tagsBtns =
            tags
            |> List.map (fun tag ->
                A [HRef <| "/tagged/" + tag; Class "tag-link"] -< [
                    Button [Class "btn btn-info btn-tag"] -< [
                        Text <| tag.ToUpper()
                    ]
                ])

        let tagsSection =
            Div [Class "featured container"; Id "tags"] -< [
                yield H2 [Text "Tags"]
                yield! tagsBtns
            ] 
        
        let body =
            Div [
                searchSection
                HR []
                snippetsSection
                HR []
                tagsSection
                Div [Id "push"]
            ]

    module Login =

        let link action (ctx:Context<_>) =
            match action with
            | Some action -> action
            | None -> Action.Admin
            |> ctx.Link
       
        let body action ctx =
            let link = link action ctx
            Div [Class "container"] -< [
                new Login.Control(link)
            ]

    module Admin =

//        let formsDiv =
//            Div [Class "row"] -< [
//                Div [Class "col-lg-6"] -< [
//                    H3 [Text "Insert a new snippet"]
//                    Div [new InsertSnippet.Control()]
//                ]
//                Div [Class "col-lg-6"] -< [
//                    H3 [Text "Index a new snippet"]
//                    Div [new Index.Control()]
//                ]
//            ]

        let body ctx =
            Div [Class "container"] -< [
                LoginInfo.elt ctx :> INode<_>
                new NewSnippet.Control() :> _
//                formsDiv
                Div [Id "push"] :> _
            ]

    module Snippet =

        let title (snippet:Snippet) = snippet.Title + " · WebSharper Snippets"
                
        let code id =
            let path = HttpContext.Current.Server.MapPath <| "~/Source/" + string id + ".txt"
            let source = File.ReadAllText path
            let html = Highlight.Server.highlight source
            Element.VerbatimContent html
        
        let tags snippet =
            snippet.Tags
            |> Array.map (fun tag ->
                let href = "/tagged/" + tag.ToLower()
                A [HRef href; Class "tag-link"] -< [
                    Button [Class "btn btn-info btn-tag"] -< [
                        Text tag
                    ]
                ])

        let detailsDiv (snippet:Snippet) =
            Div [Id "snippet-description"] -< [
                H1 [Text snippet.Title]
                Element.VerbatimContent snippet.DescHtml
            ]

        let body snippet =
            Div [Class "container"] -< [
                detailsDiv snippet
                Div [Class "page-header"] -< [
                    H2 [Text "Demo"]
                ]
                IFrame [
                    Src <| "/newpage/" + string snippet.SnipId
                    Scrolling "no"
                    Attributes.Style "width: 100%; border: none;"
                ]
                A [HRef <| "/newpage/" + string id; Class "tag-link"; Target "_blank"] -< [
                    Button [Class "btn btn-primary btn-tag"] -< [
                        Text "Open in new page"
                    ]                        
                ]
                Div [Class "page-header"] -< [
                    H2 [Text "Code"]
                ]
                code snippet.SnipId
                Div [Class "page-header"] -< [
                    H2 [Text "Tags"]
                ]
                Div [yield! tags snippet]
                Div [Id "push"]
            ]

    module Highlight =
        let codeDiv =
            Div [Class "row"] -< [
                TextArea [
                    Class "col-lg-12"
                    HTML5.SpellCheck "false"
                    HTML5.AutoFocus "autofocus"
                    Id "code-textarea"
                ]
            ]

        let btnsDiv =
            Div [Class "row"] -< [
                Div [new Highlight.Control()]
                Div [
                    Img [
                        Id "loader"
                        Src "Images/Loader.gif"
                    ]
                ]
            ]
        
        let tabsDiv =
            Div [Id "highlight-tabs"; Class "row"] -< [
                UL [Class "nav nav-tabs nav-justified"] -< [
                    LI [Class "active"] -< [
                        A [HRef "#html"; HTML5.Data "toggle" "tab"] -< [
                            Text "HTML"
                        ]
                    ]
                    LI [
                        A [HRef "#html-preview"; HTML5.Data "toggle" "tab"] -< [
                            Text "HTML Preview"
                        ]
                    ]
                ]
                Div [Class "tab-content"] -< [
                    Div [Class "tab-pane active"; Id "html"] -< [
                        TextArea [
                            Id "html-textarea"
                            Class "col-lg-12"
                            HTML5.SpellCheck "false"
                        ]
                    ]
                    Div [Class "tab-pane"; Id "html-preview"]
                ]
            ]
        
        let body =
            Div [Class "container"; Id "main"] -< [
                Div [Class "row"] -< [H3 [Text "F# Code"]]
                codeDiv
                btnsDiv
                tabsDiv
                Div [Id "push"]
            ]

    module Tagged =

        let snippetsRow lst =
            match lst with
            | [snippet] ->
                Div [Class "row"] -< [
                    snippetColumn snippet
                ]
            | _ ->
                Div [Class "row"] -< [
                    snippetColumn lst.[0]
                    snippetColumn lst.[1]
                ]

        let snippetsDiv tag =
            let rows =
                Snippets.hasTag tag
                |> Seq.toList
                |> split 2
                |> List.map snippetsRow
            Div [Id "tagged-snippets"] -< rows

        let body tagUpper tag =
            Div [Class "container"; Id "main"] -< [
                Div [Class "page-header"] -< [
                        H1 [Text <| "Snippets tagged \"" + tagUpper + "\""]
                ]
                snippetsDiv tag
                Div [Id "push"]
            ]

    module SearchUtils =

        let subStr (str:string) =
            match str.Length with
            | length when length < 150 -> str
            | _ -> str.[..147] + "..."

        let resultDiv (id, title, description) =
            let description' = subStr description
            Div [
                H3 [
                    A [HRef <| "/snippet/" + id] -< [
                        Element.VerbatimContent title
                    ]
                ]
                Div [Text description']
            ]

        let resultsDiv results =
            results
            |> Array.map resultDiv
            |> fun divs -> Div [Id "search-results"] -< divs

        let prevLi pageId queryStr =
            match pageId with
            | 1 -> LI [Class "disabled"] -< [Utils.link "#" "«"]
            | _ -> LI [Utils.link ("/search/" + queryStr + "/" + string (pageId - 1)) "«"]

        let nextLi pageId pagesLength queryStr =
            match pageId with
            | _ when pageId = pagesLength ->
                LI [Class "disabled"] -< [Utils.link "#" "»"]
            | _ ->
                LI [
                    Utils.link
                        ("/search/" + queryStr + "/" + string (pageId + 1))
                        "»"
                ]

        let pageLi x pageId queryStr =
            let xStr = string x
            match x with
            | _ when x = pageId ->
                LI [Class "active"] -< [
                    Utils.link
                        ("/search/" + queryStr + "/" + xStr)
                        xStr
                ]
            | _ ->
                LI [
                    Utils.link
                        ("/search/" + queryStr + "/" + string x)
                        xStr
                ]

        let pagesUl pageId queryStr pages length =
            UL [Class "pagination"] -< [
                yield prevLi pageId queryStr
                yield! Array.map (fun x -> pageLi x pageId queryStr) pages
                yield nextLi pageId length queryStr
            ]

        let paginationDiv matches pageId queryStr =
            let pages =
                matches / 10.
                |> ceil |> int |> fun x -> [|1 .. x|]
            let length = pages.Length
            let pages' =
                match pageId with
                | _ when pageId < 7 -> pages |> Seq.truncate 10 |> Seq.toArray
                | _ ->
                    let tail =
                        pages.[pageId ..]
                        |> Seq.truncate 4
                        |> Seq.toArray
                    pages.[.. pageId - 1]
                    |> Array.rev
                    |> Seq.truncate (10 - tail.Length)
                    |> Seq.toArray
                    |> Array.rev
                    |> fun x -> Array.append x tail
            match length with
                | 1 -> Div []
                | _ ->
                    Div [
                        pagesUl pageId queryStr pages' length
                    ]

//            let pages =
//                matches / 5. |> ceil
//                |> int |> fun x -> [|1 .. x|]
//            let length = pages.Length
//            let pages' =
//                match length with
//                | l when l < 11 -> pages
//                | _ ->
//                    pages.[(pageId - 5) .. ]
//                    |> Seq.truncate 10
//                    |> Seq.toArray
//            match length with
//                | 1 -> Div []
//                | _ ->
//                    Div [Class "row"] -< [
//                        pagesUl pageId queryStr pages' length
//                    ]
//
        let body (results:(string * string * string) []) pageId matches queryStr =
            match results.Length with
                | 0 ->
                    Div [Class "container"] -< [
                        Div [Class "page-header"] -< [
                            H1 [Text "Results"]
                        ]
                        P [Text "The query did not match any documents."]
                        Div [Id "push"]
                    ]
                | _ ->
                    Div [Class "container"] -< [
                        Div [Class "page-header"] -< [
                            H1 [Text "Results"]
                        ]
                        resultsDiv results
                        paginationDiv matches pageId queryStr
                        Div [Id "push"]
                    ]