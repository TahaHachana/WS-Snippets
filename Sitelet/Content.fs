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

    let snippetColumn classes snippet =    
        Div [Class classes] -< [
            H3 [
                A [HRef <| "/snippet/" + string snippet.SnipId] -< [
                    Text snippet.Title
                ]
            ]
            P [Text snippet.Desc]
        ]

    module Footer =
        let col1 =
            Div [Class "col-lg-4"] -< [
                P [Class "text-center credit"] -< [
                    Text "Built with "
                    A [HRef "http://www.websharper.com/"; Target "_blank"] -< [
                        Text "WebSharper"
                    ]
                ]
            ]

        let col2 =
            Div [Class "col-lg-4"] -< [
                P [Class "text-center credit"] -< [
                    Text "Snippets in database: 32"
                ]
            ]

        let col3 =
            Div [Class "col-lg-4"] -< [
                P [Class "text-center credit"] -< [
                    Text "Developed by "
                    A [HRef "http://taha-hachana.apphb.com/"; Target "_blank"] -< [
                        Text "Taha Hachana"
                    ]
                ]
            ]

        let elt : HtmlElement =
            HTML5.Footer [Id "footer"] -< [
                Div [Class "container"] -< [
                    col1
                    col2
                    col3
                ]
            ]

    module Home =

        let snippetsRow snippet snippet' =
            Div [Class "row"] -< [
                snippetColumn "col-lg-5 snippet" snippet
                snippetColumn "col-lg-offset-1 col-lg-5 snippet" snippet'
            ]  

        let searchDiv =
            Div [Class "row"; Id "search-control"] -< [
                new Search.Control()
            ]

        let addthisDiv =
            Div [Class "row"; Id "addthis-control"] -< [
                Div [Class "col-lg-offset-3"] -< [
                    new AddThis.Control()
                ]
            ]

        let headerDiv =
            Div [Class "row col-lg-offset-1"] -< [
                H2 [Attributes.Style "float: left;"] -< [
                    Text "Latest snippets"
                ]
                A [HRef "/rss"] -< [
                    Img [
                        Src "/Images/feed-icon.png"
                        Alt "RSS Feed"
                        Attributes.Style "padding: 15px;"]
                ]
            ]
                                
        let snippetsDiv =
            let snippets =
                Snippets.latest10()
                |> Seq.toList
                |> split 2
                |> List.map (fun lst -> snippetsRow lst.[0] lst.[1])
            Div [Class "row col-lg-offset-1"] -< snippets

        let tagsBtns =
            tags
            |> List.map (fun tag ->
                A [HRef <| "/tagged/" + tag] -< [
                    Button [Class "btn btn-info btn-tag"] -< [
                        Text <| tag.ToUpper()
                    ]
                ])

        let tagsDiv =
            Div [Class "row"; Id "tags"] -< [
                yield H2 [Text "Tags"]
                yield! tagsBtns
            ] 
        
        let body =
            Div [Class "container"] -< [
                searchDiv
                addthisDiv
                HR []
                headerDiv
                snippetsDiv
                HR []
                tagsDiv
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
            Div [Class "container"; Id "main"] -< [
                new Login.Control(link) :> INode<_>
                Div [Id "push"] :> _
            ]

    module Admin =

        let formsDiv =
            Div [Class "row"] -< [
                Div [Class "col-lg-6"] -< [
                    H3 [Text "Insert a new snippet"]
                    Div [new InsertSnippet.Control()]
                ]
                Div [Class "col-lg-6"] -< [
                    H3 [Text "Index a new snippet"]
                    Div [new Index.Control()]
                ]
            ]

        let body ctx =
            Div [Id "main"; Class "container"] -< [
                LoginInfo.elt ctx
                formsDiv
                Div [Id "push"]
            ]

    module Snippet =

        let title (snippet:Snippet) = snippet.Title + " · WebSharper Snippets"
        
        let desc snippet = Element.VerbatimContent snippet.DescHtml
        
        let code id =
            let path = HttpContext.Current.Server.MapPath <| "~/Source/" + string id + ".txt"
            let source = File.ReadAllText path
            Element.VerbatimContent source
        
        let tags snippet =
            snippet.Tags
            |> Array.map (fun tag ->
                let href = "/tagged/" + tag.ToLower()
                A [HRef href] -< [
                    Button [Class "btn btn-success btn-tag"] -< [
                        Text tag
                    ]
                ])

        let detailsDiv (snippet:Snippet) =
            Div [Class "row"; Id "snippet-details"] -< [
                H1 [Text snippet.Title]
                Div [Class "row col-lg-8"] -< [desc snippet]
            ]

        let addthisDiv =
            Div [Class "row"; Attributes.Style "height: 30px;"] -< [
                new AddThis.Control()
            ]

        let tabsDiv id =
            Div [Class "row"; Id "demo-tabs"] -< [
                UL [Class "nav nav-tabs nav-justified"] -< [
                    LI [Class "active"] -< [
                        A [HRef "#demo"; HTML5.Data "toggle" "tab"] -< [
                            Text "Demo"
                        ]
                    ]
                    LI [
                        A [HRef "#source"; HTML5.Data "toggle" "tab"] -< [
                            Text "Source"
                        ]
                    ]
                ]
                Div [Class "tab-content"; Attributes.Style "height: 450px;"] -< [
                    Div [Class "tab-pane active"; Id "demo"] -< [
                        IFrame [
                            Src <| "/newpage/" + string id
                            NewAttribute "seamless" "seamless"
                            Attributes.Style "width: 100%; height: 440px; border: none;"
                        ]
                    ]
                    Div [Class "tab-pane"; Id "source"] -< [code id]
                ]
            ]

        let tagsDiv snippet =
            Div [Class "row"; Id "tags-div"] -< [
                H2 [Text "Tags"]
                Div [yield! tags snippet]
            ]        

        let body snippet id =
            Div [Class "container"; Id "main"] -< [
                detailsDiv snippet
                addthisDiv
                tabsDiv id
                tagsDiv snippet
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
                    snippetColumn "col-lg-5 snippet" snippet
                ]
            | _ ->
                Div [Class "row"] -< [
                    snippetColumn "col-lg-5 snippet" lst.[0]
                    snippetColumn "col-lg-offset-1 col-lg-5 snippet" lst.[1]
                ]

        let snippetsDiv tag =
            let rows =
                Snippets.hasTag tag
                |> Seq.toList
                |> split 2
                |> List.map snippetsRow
            Div [Class "row"] -< rows

        let body tagUpper tag =
            Div [Class "container"; Id "main"] -< [
                Div [Class "row page-header"] -< [
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

        let resultLi (id, title, description) =
            let description' = subStr description
            LI [Class "list-group-item"] -< [
                A [HRef <| "/snippet/" + id; Class "search-result-link"] -< [
                    Element.VerbatimContent title
                ]
                Div [Text description']
            ]

        let resultsDiv results =
            results
            |> Array.map resultLi
            |> fun lis ->
                Div [Class "row"] -< [
                    UL [Class "list-group col-lg-8"] -< lis
                ]

        let prevLi pageId queryStr =
            match pageId with
            | 1 -> LI [Class "disabled"] -< [Utils.link "#" "«"]
            | _ ->
                LI [
                    Utils.link
                        ("/search/" + queryStr + "/" + string (pageId - 1))
                        "«"
                ]

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
                matches / 5. |> ceil
                |> int |> fun x -> [|1 .. x|]
            let length = pages.Length
            let pages' =
                match length with
                | l when l < 11 -> pages
                | _ ->
                    pages.[(pageId - 5) .. ]
                    |> Seq.truncate 10
                    |> Seq.toArray
            match length with
                | 1 -> Div []
                | _ ->
                    Div [Class "row"] -< [
                        pagesUl pageId queryStr pages' length
                    ]

        let body (results:(string * string * string) []) pageId matches queryStr =
            match results.Length with
                | 0 ->
                    Div [Class "container"; Id "main"] -< [
                        Div [Class "row page-header"] -< [
                            H1 [Text "Results"]
                            P [Text "The query did not match any documents."]
                            Div [Id "push"]
                        ]
                    
                    ]
                | _ ->
                    Div [Class "container"; Id "main"] -< [
                        Div [Class "row page-header"] -< [
                            H1 [Text "Results"]
                        ]
                        resultsDiv results
                        paginationDiv matches pageId queryStr
                        Div [Id "push"]
                    ]