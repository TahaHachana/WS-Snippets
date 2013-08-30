namespace Website

module Views =
    open System.IO
    open System.Web
    open IntelliFactory.Html
    open IntelliFactory.WebSharper
    open IntelliFactory.WebSharper.Sitelets
    open ExtSharper
    open Content
    open Model
    open Utils.Server
    open Mongo

    let private homeTemplate = Skin.MakeDefaultTemplate "~/Home.html" Skin.LoadFrequency.Once
    let private mainTemplate = Skin.MakeDefaultTemplate "~/Main.html" Skin.LoadFrequency.Once
    let private miniTemplate = Skin.MakeDefaultTemplate "~/Mini.html" Skin.LoadFrequency.Once
    let private withHomeTemplate = Skin.WithTemplate<Action> homeTemplate
    let withMainTemplate = Skin.WithTemplate<Action> mainTemplate
    let withMiniTemplate = Skin.WithTemplate<Action> miniTemplate
    let private loginInfo' = loginInfo Logout Login

    let private split count list =        
        let rec loop list =
            [
                yield Seq.truncate count list |> Seq.toList
                match List.length list <= count with
                    | false ->
                        let list' = Seq.skip count list |> Seq.toList
                        yield! loop list'
                    | true -> ()
            ]
        loop list

    let private tags = Controls.hashset' |> Seq.toList |> List.sort |> List.map (fun x ->
        let href = "/tagged/" + x.ToLower() //HttpUtility.UrlEncode(x.ToLower())
        A [HRef href] -< [Button [Class "btn btn-info"; Style "margin: 5px;"] -< [Text x]])

    let home =
        let snippets =
            Snippets.latest10()
            |> Seq.toList
            |> split 2

//            |> List.map (fun lst ->
//                match lst with
//                    | [snip] ->
//                        Div [Class "row"; Style "margin-bottom: 20px;"] -< [
//                            Div [Class "span4"] -< [
//                                H4 [A [HRef <| "/snippet/" + snip.SnipId.ToString()] -< [Text snip.Title]]
//                                P [Text snip.Desc]
//                            ]
//                        ]
//                    | _ ->
//                        let snip = lst.[0]
//                        let snip' = lst.[1]
//                        Div [Class "row"; Style "margin-bottom: 20px;"] -< [
//                            Div [Class "span4"] -< [
//                                H4 [A [HRef <| "/snippet/" + snip.SnipId.ToString()] -< [Text snip.Title]]
//                                P [Text snip.Desc]
//                            ]
//                            Div [Class "offset1 span4"] -< [
//                                H4 [A [HRef <| "/snippet/" + snip'.SnipId.ToString()] -< [Text snip'.Title]]
//                                P [Text snip'.Desc]
//                            ]
//                        ])

            |> List.map (fun lst ->
                let snip = lst.[0]
                let snip' = lst.[1]
                Div [Class "row"; Style "margin-bottom: 20px;"] -< [
                    Div [Class "span4"] -< [
                        H4 [A [HRef <| "/snippet/" + snip.SnipId.ToString()] -< [Text snip.Title]]
                        P [Text snip.Desc]
                    ]
                    Div [Class "offset1 span4"] -< [
                        H4 [A [HRef <| "/snippet/" + snip'.SnipId.ToString()] -< [Text snip'.Title]]
                        P [Text snip'.Desc]
                    ]
                ])    
        withHomeTemplate Home.title Home.metaDescription <| fun ctx ->
            [
                Home.navigation
                Div [new Forkme.Control()]
                Div [Id "wrap"] -< [
                    Div [Class "container"; Style "width: 1000px; padding-top: 60px;"] -< [
                        HTML5.Header [Class "hero-unit"; Style "background-color: white; height: 80px;"] -< [
                            Div [Class "text-center"] -< [
                                H1 [Text "WebSharper Snippets"]
                                P [Class "lead"; Style "padding-top: 10px;"] -< [Text "Snippets and examples of WebSharper code with live demos."]
                                HR []
                            ]
                        ]
                        Div [
                            Div [
                                HTML5.Section [Style "margin-bottom: 30px; width: 647px; margin-right: auto; margin-left: auto;"] -< [
                                    new Search.Control()]
//                                    Div [Class "form-search"] -< [
//                                        Div [Class "input-append"] -< [
//                                            Input [Id "query"]
////                                            Button [Text "Search"; Attr.Type "button"; Attr.Class "btn btn-success"; Attr.Style "height: 50px; font-size: 20px;"]
////                                            |>! OnClick (fun _ _ ->
////                                                let q = inp.Value.Trim() |> encode
////                                                Window.Self.Location.Href <- "/search/" + q + "/1")
//                                        ]
//                                    ]
//                                ]
                                Div [Style "height: 20px; width: 400px;"; Class "pull-right"] -< [new AddThis.Control()]
                                HTML5.Section [Style "clear: both;"] -< [
                                    yield Div [
                                        H3 [Style "float: left;"] -< [Text "Latest snippets"]
                                        A [HRef "/rss"] -< [Img [Src "/Images/feed-icon.png"; Alt "RSS Feed"; Style "padding: 15px;"]]
                                    ]
                                    yield Div [Style "clear: both;" ] -< [yield! snippets]
                                    yield HR []
                                ]
                                HTML5.Section [Style "margin-bottom: 200px;"] -< [
                                    yield H3 [Text "Tags"]
                                    yield! tags
                                ] 
                            ]
                        ]
                    ]
                ]
                Shared.footer
            ]

    let about =
        withMainTemplate About.title About.metaDescription <| fun ctx ->
            [
                About.navigation
                Div [new Forkme.Control()]
                Div [Id "wrap"] -< [
                    Div [Class "container"; Style "width: 1000px; padding-top: 100px;"] -< [
                        HTML5.Header [H1 [Text "About"]]
                        P [
                            Text "This application is built with "
                            A [HRef "http://www.websharper.com/"; Target "_blank"] -< [Text "WebSharper"]
                            Text " by "
                            A [HRef "http://taha-hachana.apphb.com/"; Target "_blank"] -< [Text "Taha Hachana"]
                            Text " in the hope that it would be useful for WebSharper developers both beginners and experienced ones. The code shared on this website is written in a fashion that lets you easily use it in your applications."
                        ]
                        P [
                            Text "The majority of the snippets should also render smoothly inside "
                            A [HRef "#"; Target "_blank"] -< [Text "CloudSharper"]
                            Text "'s FSI with little or no modification."
                        ]
                    ]
                ]
                Shared.footer
            ]

    let login (redirectAction: Action option) =
        withMainTemplate "Login" "" <| fun ctx ->
            let redirectLink =
                match redirectAction with
                | Some action -> action
                | None        -> Action.Admin
                |> ctx.Link
            [
                Shared.navigation
                Div [Id "wrap"] -< [
                    Div [Class "container"; Style "width: 1000px; padding-top: 100px;"] -< [
                        Div [new Login.Control(redirectLink)]
                    ]
                ]
                Shared.footer
            ]

    let admin =
        withMainTemplate "Admin" "" <| fun ctx ->
            [
                Shared.navigation
                Div [Id "main"] -< [
                    Div [Class "container"; Style "width: 1200px; padding-top: 10px;"] -< [
                        loginInfo' ctx
                        Div [Style "margin-top: 80px;"] -< [
                            Div [Class "row"] -< [
                                Div [Class "span6"] -< [
                                    H3 [Text "Insert a new snippet"]
                                    Div [new InsertSnippet.Control()]
                                ]
                                Div [Class "span6"] -< [
                                    H3 [Text "Index a new snippet"]
                                    Div [new Index.Control()]
                                ]
                            ]
                        ]
                    ]
                ]
            ]

    let error =
        withMainTemplate "Error · Page Not Found" "" <| fun ctx ->
            [
                Shared.navigation
                Div [Id "wrap"] -< [
                    Div [Class "container"; Style "width: 1000px; padding-top: 100px;"] -< [
                        Div [Style "margin-top: 80px;"] -< [
                            H3 [Text "Page Not Found"]
                            P [Text "The requested URL doesn't exist."]
                        ]
                    ]
                ]
                Shared.footer
            ]

    let snippet id =
        let snip = Mongo.Snippets.byId id
        let title, metaDesc, desc, tags = snip.Title, snip.MetaDesc, snip.DescHtml, snip.Tags
//        let title, metaDesc, desc, tags, control = Controls.hashset |> Seq.find (fun x -> x.Id = id) |> fun x -> x.Title, x.MetaDesc, x.Description, x.Tags, x.Control
        let title' = title + " · WebSharper Snippets"
        let desc' = Element.VerbatimContent desc
        let path = HttpContext.Current.Server.MapPath <| "~/Source/" + string id + ".txt"
        let source = File.ReadAllText path
        let elt = Element.VerbatimContent source
        let btns = tags |> Array.map (fun x ->
            let href = "/tagged/" + x.ToLower() //HttpUtility.UrlEncode(x.ToLower())
            A [HRef href] -< [Button [Class "btn btn-success"; Style "margin: 5px;"] -< [Text x]])
        withMainTemplate title' metaDesc <| fun ctx ->
            [
                Shared.navigation
                Div [new Forkme.Control()]                
                Div [Id "wrap"] -< [
                    Div [Class "container"; Style "width: 1000px; padding-top: 100px;"] -< [
                        Div [Id "snippet-details"] -< [
                            H1 [Text title]
                            desc'
                        ]
                        Div [Class "pull-right"; Style "height: 30px; width: 400px;"] -< [new AddThis.Control()]

                        Div [Style "height: 500px;"] -< [
                            Div [Class "tabbable"] -< [
                                UL [Class "nav nav-tabs"] -< [
                                    LI [Class "active"] -< [A [HRef "#demo"; HTML5.Data "toggle" "tab"] -< [Text "Demo"]]
                                    LI [A [HRef "#source"; HTML5.Data "toggle" "tab"] -< [Text "Source"]]
                                ]
                                Div [Class "tab-content"; Style "height: 450px;"] -< [
                                    Div [Class "tab-pane active"; Id "demo"] -< [IFrame [Src <| "/newpage/" + string id; NewAttribute "seamless" "seamless"; Style "width: 100%; height: 440px; border: none;"]]
                                    Div [Class "tab-pane"; Id "source"] -< [elt]
                                ]
                            ]
                        ]
                        HTML5.Section [Style "min-height: 300px;"] -< [
                            H3 [Text "Tags"]
                            Div [yield! btns]
                        ]        
                    ]
                    Script [Src "/Scripts/BootstrapTabs.min.js"]
                ]
                Shared.footer
            ]

    let highlight =
        withMainTemplate "" "" <| fun ctx ->
            [
                Shared.navigation
                Div [Id "wrap"] -< [
                    Div [Class "container"; Style "width: 1000px; padding-top: 100px;"] -< [
                        H3 [Text "F# Code"]
                        TextArea [Id "code-textarea"; Style "overflow: scroll; word-wrap: normal; height: 300px;"; Class "span10"; HTML5.SpellCheck "false"]
                        Div [Style "padding: 10px 0px 10px 0px; padding-left: 0px"] -< [
                            Div [new Highlight.Control()]
                            Div [Img [Style "padding-top: 10px; visibility: hidden;"; Src "Images/Loader.gif"; Id "loader"]]
                        ]
                        Div [Style "height: 500px; margin-bottom: 50px;"] -< [
                            Div [Class "tabbable"] -< [
                                UL [Class "nav nav-tabs"] -< [
                                    LI [Class "active"] -< [A [HRef "#html"; HTML5.Data "toggle" "tab"] -< [Text "HTML"]]
                                    LI [A [HRef "#html-preview"; HTML5.Data "toggle" "tab"] -< [Text "HTML Preview"]]
                                ]
                                Div [Class "tab-content"] -< [
                                    Div [Class "tab-pane active"; Id "html"] -< [TextArea [Id "html-textarea"; Style "overflow: scroll; word-wrap: normal; height: 300px;"; Class "span10"; HTML5.SpellCheck "false"]]
                                    Div [Class "tab-pane"; Id "html-preview"; Style "height: 300px;"]
                                ]
                            ]
                        ]
                    ]
                    Script [Src "/Scripts/BootstrapTabs.min.js"]
                ]
                Shared.footer
            ]

    let tagged tag =
        let tag' = HttpUtility.UrlDecode tag |> fun x -> x.ToUpper()
        let title = "Snippets Tagged " + tag'
        let metaDesc = "WebSharper code snippets and examples tagged " + tag' + "."
        let divs =
            Snippets.hasTag tag'
            |> Seq.toList
            |> split 2
            |> List.map (fun lst ->
                match lst with
                    | [snip] ->
                        Div [Class "row"; Style "margin-bottom: 20px;"] -< [
                            Div [Class "span4"] -< [
                                H4 [A [HRef <| "/snippet/" + snip.SnipId.ToString()] -< [Text snip.Title]]
                                P [Text snip.Desc]
                            ]
                        ]
                    | _ ->
                        let snip = lst.[0]
                        let snip' = lst.[1]
                        Div [Class "row"; Style "margin-bottom: 20px;"] -< [
                            Div [Class "span4"] -< [
                                H4 [A [HRef <| "/snippet/" + snip.SnipId.ToString()] -< [Text snip.Title]]
                                P [Text snip.Desc]
                            ]
                            Div [Class "offset1 span4"] -< [
                                H4 [A [HRef <| "/snippet/" + snip'.SnipId.ToString()] -< [Text snip'.Title]]
                                P [Text snip'.Desc]
                            ]
                        ])
        withMainTemplate title metaDesc <| fun ctx ->
            [
                Shared.navigation
                Div [new Forkme.Control()]
                Div [Id "wrap"] -< [
                    Div [Class "container"; Style "width: 1000px; padding-top: 100px;"] -< [
                        Div [
                            HTML5.Header [
                                H1 [Text <| "Snippets tagged \"" + tag' + "\""]
                            ]
                        ]
                        UL [Style "margin-bottom: 200px;"] -< [yield! divs]
                    ]
                ]
                Shared.footer
            ]

    let extjs id =
        let control = Controls.hashset'' |> Seq.find (fun x -> x.Id = id) |> fun x -> x.Control
        ExtjsSkin.withTemplate
            [
                Div [control]
            ]
    
    let search q pageId =
        let q' = HttpUtility.UrlDecode q
        let matches, results = Search.Server.results q' ((pageId - 1) * 5)
        let div =
            match results.Length with
                | 0 -> Div [Text "The query did not match any documents."]
                | _ ->
                let results' =
                    match results.Length with
                        | l when l < 6 -> results
                        | _ -> results.[(pageId - 1) ..] |> Seq.truncate 5 |> Seq.toArray
                let pages = matches / 5. |> ceil |> int |> fun x -> [|1 .. x|] 
                let pages' =
                    match pages.Length with
                    | l when l < 11 -> pages
                    | _ -> pages.[(pageId - 5) .. ] |> Seq.truncate 5 |> Seq.toArray
                let lis =
                    results' //.[(pageId - 1) .. (pageId + 3)]
                    |> Array.map (fun (id, title, desc) ->
                        let desc' =
                            match desc.Length with
                                | length when length < 150 -> desc
                                | _ -> desc.[..147] + "..."
                        LI [Style "margin-bottom: 25px;"] -< [
                            A [HRef <| "/snippet/" + id; Style "font-size: large;"] -< [Element.VerbatimContent title]
                            Div [Text desc']
                        ])
                let ul = UL [Class "unstyled span8"; Style "min-height: 450px;"] -< [yield! lis]
                let pagination =
                    match pages.Length with
                        | 1 -> Div []
                        | _ ->
                            let prev =
                                match pageId with
                                    | 1 -> LI [Class "disabled"] -< [A [HRef "#"] -< [Text "«"]]
                                    | _ -> LI [A [HRef <| "/search/" + q + "/" + string (pageId - 1)] -< [Text "«"]]
                            let next =
                                match pageId with
                                    | _ when pageId = pages.Length -> LI [Class "disabled"] -< [A [HRef "#"] -< [Text "»"]]
                                    | _ -> LI [A [HRef <| "/search/" + q + "/" + string (pageId + 1)] -< [Text "»"]]
                            Div [Class "pagination pagination-centered"; Style "clear: left;"] -< [
                                UL [
                                    yield prev
                                    let lis = pages' |> Array.map (fun x ->
                                        match x with
                                            | _ when x = pageId -> LI [Class "active"] -< [A [HRef <| "/search/" + q + "/" + string x] -< [Text <| string x]]
                                            | _ -> LI [A [HRef <| "/search/" + q + "/" + string x] -< [Text <| string x]])
                                    yield! lis
                                    yield next
                                ]
                            ]
                Div [ul; pagination]
        withMainTemplate "" "" <| fun ctx ->
            [
                Shared.navigation
                Div [new Forkme.Control()]
                Div [Id "wrap"] -< [
                    Div [Class "container"; Style "width: 1000px; padding-top: 100px; padding-bottom: 200px;"] -< [
                        Div [Class "pull-down"] -< [
                            HTML5.Header [
                                H1 [Text "Search Results"]
                            ]
                        ]
                        div
                    ]
                ]
                Shared.footer
            ]

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



