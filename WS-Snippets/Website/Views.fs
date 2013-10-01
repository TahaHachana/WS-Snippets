namespace Website

module Views =
    open System.IO
    open System.Web
    open IntelliFactory.Html
    open IntelliFactory.WebSharper
    open IntelliFactory.WebSharper.Sitelets
    open Model
    open Utils.Server
    open Mongo
    open Skin

    let private split count list =        
        let rec loop list =
            [
                yield Seq.truncate count list |> Seq.toList
                match List.length list <= count with
                | false -> yield! loop (Seq.skip count list |> Seq.toList)
                | true -> ()
            ]
        loop list

    module private HomeUtils =

        let snippetColumn classes snippet =    
            Div [Class classes] -< [
                H4 [
                    A [HRef <| "/snippet/" + string snippet.SnipId] -< [
                        Text snippet.Title
                    ]
                ]
                P [Text snippet.Desc]
            ]

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
                H3 [Style "float: left;"] -< [
                    Text "Latest snippets"
                ]
                A [HRef "/rss"] -< [
                    Img [
                        Src "/Images/feed-icon.png"
                        Alt "RSS Feed"
                        Style "padding: 15px;"]
                ]
            ]
                                
        let snippetsDiv =
            let snippets =
                Snippets.latest10()
                |> Seq.toList
                |> split 2
                |> List.map (fun lst -> snippetsRow lst.[0] lst.[1])
            Div [Class "row col-lg-offset-1"] -< snippets

        let tags =
            Controls.hashset'
            |> Seq.toList
            |> List.sort 
            |> List.map (fun tag ->
                let href = "/tagged/" + tag.ToLower()
                A [HRef href] -< [
                    Button [Class "btn btn-info"; Style "margin: 5px;"] -< [
                        Text tag
                    ]
                ])

        let tagsDiv =
            Div [Class "row"; Id "tags"] -< [
                yield H3 [Text "Tags"]
                yield! tags
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
            ]

    module private LoginUtils =
        let redirectLink actionOption ctx =
            match actionOption with
            | Some action -> action
            | None -> Action.Admin
            |> ctx.Link
       
        let body actionOption ctx =
            let link = redirectLink actionOption ctx
            Div [Class "container"; Id "main"] -< [
                new Login.Control(link)
            ]

    module private AdminUtils =
        let loginInfo' ctx = loginInfo Logout Login ctx

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
                loginInfo' ctx
                formsDiv
            ]

    module private SnippetUtils =

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
                    Button [Class "btn btn-success"; Style "margin: 5px;"] -< [
                        Text tag
                    ]
                ])

        let detailsDiv (snippet:Snippet) =
            Div [Class "row"; Id "snippet-details"] -< [
                H1 [Text snippet.Title]
                Div [Class "row col-lg-8"] -< [desc snippet]
            ]

        let addthisDiv =
            Div [Class "row"; Style "height: 30px;"] -< [
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
                Div [Class "tab-content"; Style "height: 450px;"] -< [
                    Div [Class "tab-pane active"; Id "demo"] -< [
                        IFrame [
                            Src <| "/newpage/" + string id
                            NewAttribute "seamless" "seamless"
                            Style "width: 100%; height: 440px; border: none;"
                        ]
                    ]
                    Div [Class "tab-pane"; Id "source"] -< [code id]
                ]
            ]

        let tagsDiv snippet =
            Div [Class "row"; Id "tags-div"] -< [
                H3 [Text "Tags"]
                Div [yield! tags snippet]
            ]        

        let body snippet id =
            Div [Class "container"; Id "main"] -< [
                detailsDiv snippet
                addthisDiv
                tabsDiv id
                tagsDiv snippet
            ]

    module private HighlightUtils =
        let codeDiv =
            Div [Class "row"] -< [
                TextArea [
                    Class "col-lg-10"
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
                            Class "col-lg-10"
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
            ]

    module private TaggedUtils =
        let snippetDiv classes snippet =
            Div [Class classes] -< [
                H4 [
                    A [HRef <| "/snippet/" + snippet.SnipId.ToString()] -< [
                        Text snippet.Title
                    ]
                ]
                P [Text snippet.Desc]
            ]

        let snippetsRow lst =
            match lst with
            | [snippet] ->
                Div [Class "row"] -< [
                    snippetDiv "col-lg-4 snippet" snippet
                ]
            | _ ->
                Div [Class "row"] -< [
                    snippetDiv "col-lg-4 snippet" lst.[0]
                    snippetDiv "col-lg-offset-1 col-lg-4 snippet" lst.[1]
                ]

        let snippetsDiv tag =
            let rows =
                Snippets.hasTag tag
                |> Seq.toList
                |> split 2
                |> List.map snippetsRow
            Div [Class "row"] -< rows

        let body tag =
            Div [Class "container"; Id "main"] -< [
                Div [Class "row page-header"] -< [
                        H1 [Text <| "Snippets tagged \"" + tag + "\""]
                ]
                snippetsDiv tag
            ]

    module private SearchUtils =
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
            | 1 -> LI [Class "disabled"] -< [A [HRef "#"] -< [Text "«"]]
            | _ -> LI [A [HRef <| "/search/" + queryStr + "/" + string (pageId - 1)] -< [Text "«"]]

        let nextLi pageId pagesLength queryStr =
            match pageId with
            | _ when pageId = pagesLength -> LI [Class "disabled"] -< [A [HRef "#"] -< [Text "»"]]
            | _ -> LI [A [HRef <| "/search/" + queryStr + "/" + string (pageId + 1)] -< [Text "»"]]

        let pageLi x pageId queryStr =
            match x with
            | _ when x = pageId -> LI [Class "active"] -< [A [HRef <| "/search/" + queryStr + "/" + string x] -< [Text <| string x]]
            | _ -> LI [A [HRef <| "/search/" + queryStr + "/" + string x] -< [Text <| string x]]

        let pagesUl pageId queryStr pages length =
            UL [Class "pagination"] -< [
                yield prevLi pageId queryStr
                yield! Array.map (fun x -> pageLi x pageId queryStr) pages
                yield nextLi pageId length queryStr
            ]

        let paginationDiv matches pageId queryStr =
            let pages = matches / 5. |> ceil |> int |> fun x -> [|1 .. x|]
            let length = pages.Length
            let pages' =
                match length with
                | l when l < 11 -> pages
                | _ -> pages.[(pageId - 5) .. ] |> Seq.truncate 10 |> Seq.toArray
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
                        ]
                    
                    ]
                | _ ->
                    Div [Class "container"; Id "main"] -< [
                        Div [Class "row page-header"] -< [
                            H1 [Text "Results"]
                        ]
                        resultsDiv results
                        paginationDiv matches pageId queryStr
                    ]

    let home =
        withTemplate<Action>
            Templates.home
            "WebSharper Snippets"
            "WebSharper code examples featuring live demos."
            (fun ctx -> HomeUtils.body)
            Content.footer

    let about =
        withTemplate<Action>
            Templates.about
            "About WebSharper Snippets"
            "WebSharper demos application built and maintained by Taha Hachana." 
            (fun ctx -> Div [])
            Content.footer

    let login actionOption =
        withTemplate
            Templates.login
            "Login"
            ""
            (fun ctx -> LoginUtils.body actionOption ctx)
            Content.footer

    let admin =
        withTemplate
            Templates.admin
            "Admin"
            ""
            (fun ctx -> AdminUtils.body ctx)
            Content.footer

    let error =
        withTemplate<Action>
            Templates.error
            "Error · Page Not Found"
            ""
            (fun ctx -> Div [])
            Content.footer

    let snippet id =
        let snippet = Mongo.Snippets.byId id
        withTemplate
            Templates.snippet
            (SnippetUtils.title snippet)
            snippet.MetaDesc
            (fun ctx -> SnippetUtils.body snippet id)
            Content.footer
                                       
    let highlight =
        withTemplate<Action>
            Templates.highlight
            ""
            ""
            (fun ctx -> HighlightUtils.body)
            Content.footer

    let tagged tag =
        let tag' = HttpUtility.UrlDecode tag |> fun x -> x.ToUpper()
        withTemplate
            Templates.tagged
            ("Snippets Tagged " + tag')
            ("WebSharper code snippets and examples tagged " + tag' + ".")
            (fun ctx -> TaggedUtils.body tag')
            Content.footer

    let search queryStr pageId =
        let queryStr' = HttpUtility.UrlDecode queryStr
        let matches, results = Search.Server.results queryStr' ((pageId - 1) * 5)
        withTemplate
            Templates.search
            ""
            ""
            (fun ctx -> SearchUtils.body results pageId matches queryStr)
            Content.footer

    let rss : Content<Action> =
        let feed = Rss.rssFeed()
        CustomContent <| fun context ->
            {
                Status = Http.Status.Ok
                Headers = [Http.Header.Custom "Content-Type" "application/rss+xml"]
                WriteBody = fun stream ->
                    use tw = new System.IO.StreamWriter(stream)
                    tw.WriteLine feed
            }

//    let extjs id =
//        let control = Controls.hashset'' |> Seq.find (fun x -> x.Id = id) |> fun x -> x.Control
//        ExtjsSkin.withTemplate
//            [
//                Div [control]
//            ]
//