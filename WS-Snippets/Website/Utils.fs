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
            Div [Class "navbar navbar-fixed-top"] -< [
                Div [Class "navbar-inner"] -< [
                    Div [Class "container"; Style "width: 1000px;"] -< [
                        UL [Class "nav"] -< [
                            li' "/"      "Home"
                            li' "/about" "About"
                        ]
                    ]
                ]
            ]
//<div class="masthead">
//        <ul class="nav nav-pills pull-right">
//          <li class="active"><a href="#">Home</a></li>
//          <li><a href="#">About</a></li>
//          <li><a href="#">Contact</a></li>
//        </ul>
//        <h3 class="muted">Project name</h3>
//      </div>
//        let nav activeLiOption =
//            let li' = li activeLiOption
//            Div [Style "margin-top: 20px; margin-bottom: 50px;"] -< [// "background-color: rgb(21, 51, 68); padding: 10px; border-radius: 10px;"] -< [
//                UL [Class "nav nav-pills pull-right"; Style "padding: 20px;"] -< [
//                    li' "/"      "Home"
//                    li' "/about" "About"
//                ]
//                H3 [Class "muted"] -< [Text "WebSharper Snippets"]
//            ]

        let (=>) anchor href = A [HRef href] -< [Text anchor]
    
        let randomizeUrl url = url + "?d=" + System.Uri.EscapeUriString (System.DateTime.Now.ToString())

        let loginInfo logoutAction loginAction (ctx: Context<_>) =
            let userOption = UserSession.GetLoggedInUser ()
            let link =
                match userOption with
                    | Some user -> "Log Out (" + user + ")" => (randomizeUrl <| ctx.Link logoutAction)
                    | None      -> "Login"                  => (ctx.Link <| loginAction None)
            Div [Class "pull-right"; Style "margin-top: 50px;"] -< [link]