namespace Website

module Views =
    open System.IO
    open System.Web
    open IntelliFactory.Html
    open IntelliFactory.WebSharper
    open ExtSharper
    open Content
    open Model
    open Utils.Server
    open Mongo

    let mainTemplate = Skin.MakeDefaultTemplate "~/Main.html" Skin.LoadFrequency.PerRequest
    let withMainTemplate = Skin.WithTemplate<Action> mainTemplate
    let loginInfo' = loginInfo Logout Login

    module List =
        /// Splits a list into lists of the specified length.
        let split count list =        
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

    let home =
//        let snippets =
//            Snippets.latest10()
//            |> Seq.toList
//            |> List.split 2
//            |> List.map (fun lst ->
//                let snip = lst.[0]
//                let snip' = lst.[1]
//                Div [Class "row"] -< [
//                    Div [Class "span5"] -< [
//                        H3 [A [HRef <| "/snippet/" + snip.SnipId.ToString()] -< [Text snip.Title]]
//                        P [Text snip.Desc]
//                    ]
//                    Div [Class "offset1 span5"] -< [
//                        H3 [A [HRef <| "/snippet/" + snip'.SnipId.ToString()] -< [Text snip'.Title]]
//                        P [Text snip'.Desc]
//                    ]
//                ])    
        let tags = Controls.hashset' |> Seq.toList |> List.sort |> List.map (fun x ->
            let href = "/tagged/" + HttpUtility.UrlEncode(x.ToLower())
            A [HRef href] -< [Button [Class "btn btn-info"; Style "margin: 5px;"] -< [Text x]])
        withMainTemplate Home.title Home.metaDescription <| fun ctx ->
            [
                Div [Class "wrap"] -< [
                    Home.navigation
                    Div [new Forkme.Control()]
                    Div [Class "container"] -< [
                        loginInfo' ctx
                        Div [Class "pull-down"] -< [
                            Home.header
                            HTML5.Section [
                                yield H2 [Text "Latest snippets"]
                                //yield! snippets
                            ]
                            HTML5.Section [Style "min-height: 300px;"] -< [
                                yield H2 [Text "Tags"]
                                yield! tags
                            ] 
                        ]
                    ]
                ]
                Shared.footer
            ]

    let about =
        withMainTemplate About.title About.metaDescription <| fun ctx ->
            [
                Div [Class "wrap"] -< [
                    About.navigation
                    Div [new Forkme.Control()]
                    Div [Class "container"] -< [
                        loginInfo' ctx
                        Div [Class "pull-down"] -< [
                            About.header
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
                Div [Class "wrap"] -< [
                    Div [Class "container"] -< [
                        Shared.navigation
                        Div [Class "pull-down"] -< [
                            Div [new Login.Control(redirectLink)]
                        ]
                    ]
                ]
                Shared.footer
            ]

    let admin =
        withMainTemplate "Admin" "" <| fun ctx ->
            [
                Div [Class "wrap"] -< [
                    Shared.navigation
                    Div [Class "container"] -< [
                        loginInfo' ctx
                        Div [Class "pull-down"] -< [
                            Div [Class "row"] -< [
                                H3 [Text "Insert a new snippet"]
                                Div [new InsertSnippet.Control()]
                            ]
                        ]
                    ]
                ]
                Shared.footer
            ]

    let error =
        withMainTemplate "Error - Page Not Found" "" <| fun ctx ->
            [
                Div [Class "wrap"] -< [
                    Shared.navigation
                    Div [Class "container"] -< [
                        Div [Class "pull-down"] -< [
                            H2 [Text "Page Not Found"]
                            P [Text "The requested URL doesn't exist."]
                        ]
                    ]
                ]
                Shared.footer
            ]

    let snippet id =
        let title, metaDesc, desc, tags, control = Controls.hashset |> Seq.find (fun x -> x.Id = id) |> fun x -> x.Title, x.MetaDesc, x.Description, x.Tags, x.Control
        let title' = title + " | WebSharper Snippets"
        let path = HttpContext.Current.Server.MapPath <| "~/Source/" + string id + ".txt"
        let source = File.ReadAllText path
        let elt = Element.VerbatimContent source
        let btns = tags |> List.map (fun x ->
            let href = "/tagged/" + HttpUtility.UrlEncode(x.ToLower())
            A [HRef href] -< [Button [Class "btn btn-info"; Style "margin: 5px;"] -< [Text x]])
        withMainTemplate title' metaDesc <| fun ctx ->
            [
                Div [Class "wrap"] -< [
                    Shared.navigation
                    Div [Class "container"] -< [
                        Div [Class "pull-down"] -< [
                            H2 [Text title]
                            P [Text desc]
                        ]
                        Div [Style "height: 400px;"] -< [
                            Div [Class "tabbable"] -< [
                                UL [Class "nav nav-tabs"] -< [
                                    LI [Class "active"] -< [A [HRef "#demo"; HTML5.Data "toggle" "tab"] -< [Text "Demo"]]
                                    LI [A [HRef "#source"; HTML5.Data "toggle" "tab"] -< [Text "Source"]]
                                ]
                                Div [Class "tab-content"; Style "height: 300px;"] -< [
                                    Div [Class "tab-pane active"; Id "demo"] -< [control]
                                    Div [Class "tab-pane"; Id "source"] -< [elt]
                                ]
                            ]
                        ]
                        HTML5.Section [Style "min-height: 300px;"] -< [
                            H3 [Text "Tags"]
                            Div [yield! btns]
                        ]
                    ]
                ]
                Shared.footer
                Script [Src "http://twitter.github.com/bootstrap/assets/js/bootstrap-tab.js"]
            ]


    let highlight =
        withMainTemplate "" "" <| fun ctx ->
            [
                Div [Class "wrap"] -< [
                    Shared.navigation
                    Div [Class "container pull-down"] -< [
                        H3 [Text "F# Code"]
                        TextArea [Id "code-textarea"; Style "overflow: scroll; word-wrap: normal; height: 300px;"; Class "span12"; HTML5.SpellCheck "false"]
                        Div [Style "padding: 10px 0px 10px 0px; padding-left: 0px"] -< [
                            Div [new Highlight.Control()]
                            Div [Img [Style "padding-top: 10px; visibility: hidden;"; Src "Images/Loader.gif"; Id "loader"]]
                        ]
                        Div [Style "height: 500px;"] -< [
                            Div [Class "tabbable"] -< [
                                UL [Class "nav nav-tabs"] -< [
                                    LI [Class "active"] -< [A [HRef "#html"; HTML5.Data "toggle" "tab"] -< [Text "HTML"]]
                                    LI [A [HRef "#html-preview"; HTML5.Data "toggle" "tab"] -< [Text "HTML Preview"]]
                                ]
                                Div [Class "tab-content"] -< [
                                    Div [Class "tab-pane active"; Id "html"] -< [TextArea [Id "html-textarea"; Style "overflow: scroll; word-wrap: normal; height: 300px;"; Class "span12"; HTML5.SpellCheck "false"]]
                                    Div [Class "tab-pane"; Id "html-preview"; Style "height: 300px;"]
                                ]
                            ]
                        ]
                    ]
                ]
                Shared.footer
                Script [Src "http://twitter.github.com/bootstrap/assets/js/bootstrap-tab.js"]
            ]

    let tagged tag =
        let tag' = HttpUtility.UrlDecode tag |> fun x -> x.ToUpper()
        let divs =
            Snippets.hasTag tag'
            |> Seq.toList
            |> List.split 2
            |> List.map (fun lst ->
                match lst with
                    | [snip] ->
                        Div [Class "row"] -< [
                            Div [Class "span5"] -< [
                                H3 [A [HRef <| "/snippet/" + snip.SnipId.ToString()] -< [Text snip.Title]]
                                P [Text snip.Desc]
                            ]
                        ]
                    | _ ->
                        let snip = lst.[0]
                        let snip' = lst.[1]
                        Div [Class "row"] -< [
                            Div [Class "span5"] -< [
                                H3 [A [HRef <| "/snippet/" + snip.SnipId.ToString()] -< [Text snip.Title]]
                                P [Text snip.Desc]
                            ]
                            Div [Class "offset1 span5"] -< [
                                H3 [A [HRef <| "/snippet/" + snip'.SnipId.ToString()] -< [Text snip'.Title]]
                                P [Text snip'.Desc]
                            ]
                        ])
        withMainTemplate About.title About.metaDescription <| fun ctx ->
            [
                Div [Class "wrap"] -< [
                    About.navigation
                    Div [new Forkme.Control()]
                    Div [Class "container"] -< [
                        loginInfo' ctx
                        Div [Class "pull-down"] -< [
                            HTML5.Header [
                                H1 [Text <| "Snippets tagged \"" + tag' + "\""]
                            ]
                        ]
                        UL [yield! divs]
                    ]
                ]
                Shared.footer
            ]
