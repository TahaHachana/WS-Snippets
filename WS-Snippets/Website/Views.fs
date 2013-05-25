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

    let mainTemplate = Skin.MakeDefaultTemplate "~/Main.html" Skin.LoadFrequency.PerRequest
    let withMainTemplate = Skin.WithTemplate<Action> mainTemplate
    let loginInfo' = loginInfo Logout Login

    let home =
        withMainTemplate Home.title Home.metaDescription <| fun ctx ->
            [
                Div [Class "wrap"] -< [
                    Home.navigation
                    Div [new Forkme.Control()]
                    Div [Class "container"] -< [
                        loginInfo' ctx
                        Div [Class "pull-down"] -< [
                            Home.header
                            UL [Class "unstyled"] -< [
                                LI ["Sub 1" => (ctx.Link <| Sub 1)]
                                LI ["Sub 2" => (ctx.Link <| Sub 2)]
                                LI ["Sub 3" => (ctx.Link <| Sub 3)]
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

    let sub pageId =
        let pageId' = string pageId
        let title = "Sub Title " + pageId'
        let metaDescription = "Sub meta description " + pageId' + "."
        withMainTemplate title metaDescription <| fun ctx ->
            [
                Div [Class "wrap"] -< [
                    Shared.navigation
                    Div [new Forkme.Control()]
                    Div [Class "container"] -< [
                        loginInfo' ctx
                        Div [Class "pull-down"] -< [
                            Div [Text <| "Sub page " + pageId']
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
                            H1 [Text "Admin page"]
                        ]
                    ]
                ]
                Shared.footer
            ]

    let custom404 =
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
        let title, metaDesc, tags, control = Controls.hashset |> Seq.find (fun x -> x.Id = id) |> fun x -> x.Title, x.MetaDesc, x.Tags, x.Control
        let path = HttpContext.Current.Server.MapPath <| "~/Source/" + string id + ".txt"
        let source = File.ReadAllText path
        let elt = Element.VerbatimContent source
        let btns = tags |> List.map (fun x -> Button [Class "btn btn-info"; Style "margin: 5px;"] -< [Text x])
        withMainTemplate title metaDesc <| fun ctx ->
            [
                Div [Class "wrap"] -< [
                    Shared.navigation
                    Div [Class "container"] -< [
                        Div [Class "pull-down"] -< [
                            H2 [Text "Snippet Title"]
                            P [Text "Snippet Description"]
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
                        Div [Style "min-height: 200px;"] -< [
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