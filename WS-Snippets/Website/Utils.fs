namespace Website

module Utils =

    module Server =

        open IntelliFactory.Html
        open IntelliFactory.WebSharper.Sitelets

        let header h1 p =
            HTML5.Header [
                H1 [Text h1]
                P [Text p]
            ]

        let li activeLiOption href txt =
            match activeLiOption with
                | None          -> LI [A [HRef href] -< [Text txt]]
                | Some activeLi ->
                    if txt = activeLi then
                        LI [Class "active"] -< [A [HRef href] -< [Text txt]]
                    else
                        LI [A [HRef href] -< [Text txt]]

        let nav activeLiOption =
            let li' = li activeLiOption
            Div [Class "navbar navbar-fixed-top navbar-inverse"] -< [
                Div [Class "navbar-inner"] -< [
                    Div [Class "container"] -< [
                        UL [Class "nav"] -< [
                            li' "/"      "Home"
                            li' "/about" "About"
                        ]
                    ]
                ]
            ]

        let (=>) anchor href = A [HRef href] -< [Text anchor]
    
        let randomizeUrl url = url + "?d=" + System.Uri.EscapeUriString (System.DateTime.Now.ToString())

        let loginInfo logoutAction loginAction (ctx: Context<_>) =
            let userOption = UserSession.GetLoggedInUser ()
            let link =
                match userOption with
                    | Some user -> "Log Out (" + user + ")" => (randomizeUrl <| ctx.Link logoutAction)
                    | None      -> "Login"                  => (ctx.Link <| loginAction None)
            Div [Class "pull-right"; Style "margin-top: 50px;"] -< [link]