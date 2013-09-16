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
                | None          -> LI [A [HRef href; Style "padding: 15px"] -< [Text txt]]
                | Some activeLi ->
                    if txt = activeLi then
                        LI [Class "active"] -< [A [HRef href; Style "padding: 15px"] -< [Text txt]]
                    else
                        LI [A [HRef href; Style "padding: 15px"] -< [Text txt]]

        let nav activeLiOption =
            let li' = li activeLiOption
            //<nav class="navbar navbar-default navbar-fixed-top" role="navigation">
            HTML5.Nav [Class "navbar navbar-default navbar-fixed-top"; Html.NewAttribute "role" "navigation"] -< [
                Div [Class "navbar-header"] -< [
                    Button [Type "button"; Class "navbar-toggle"; HTML5.Data "toggle" "collapse"; HTML5.Data "target" ".navbar-ex1-collapse"] -< [
                        Span [Class "sr-only"] -< [Text "Toggle navigation"]
                        Span [Class "icon-bar"]
                        Span [Class "icon-bar"]
                        Span [Class "icon-bar"]
                    ]
                    A [Class "navbar-brand"; HRef "#"] -< [Text "W# Snippets"]
                ]       
//<div class="collapse navbar-collapse navbar-ex1-collapse">
//    <ul class="nav navbar-nav">
//      <li class="active"><a href="#">Link</a></li>
//      <li><a href="#">Link</a></li>
                Div [Class "collapse navbar-collapse navbar-ex1-collapse"] -< [
                    UL [Class "nav navbar-nav"] -< [
                        LI [Class "active"] -< [A [HRef "#"] -< [Text "Home"]]
                        LI [A [HRef "#"] -< [Text "About"]]
                    ]

                ]                               
//                Div [Class "navbar-inner"] -< [
//                    Div [Class "container"; Style "width: 1000px;"] -< [
//                        A [Class "brand"; HRef "/"; Style "padding: 15px;"] -< [Text "W# Snippets"]
//                        UL [Class "nav"] -< [
//                            li' "/"      "Home"
//                            li' "/about" "About"
//                        ]
//                    ]
//                ]
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

        let (=>) anchor href = A [HRef href; Target "_blank"] -< [Text anchor]
    
        let randomizeUrl url = url + "?d=" + System.Uri.EscapeUriString (System.DateTime.Now.ToString())

        let loginInfo logoutAction loginAction (ctx: Context<_>) =
            let userOption = UserSession.GetLoggedInUser ()
            let link =
                match userOption with
                    | Some user -> A [HRef (randomizeUrl <| ctx.Link logoutAction); Class "pull-right"] -< [Text <| "Log Out (" + user + ")"]
                    | None      -> A [HRef (ctx.Link <| loginAction None); Class "pull-right"] -< [Text "Login"]
            Div [Class "row"] -< [link]