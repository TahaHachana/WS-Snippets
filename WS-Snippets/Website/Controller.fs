namespace Website

module Controller =
    open IntelliFactory.WebSharper.Sitelets
    open Model

    let private protect view =
        match UserSession.GetLoggedInUser() with
            | None -> Content.Redirect <| Login None
            | _    -> view

    let private logout() =
        UserSession.Logout ()
        Content.Redirect Home
    
    let controller =
        let handle = function
            | About          -> Views.about
            | Admin          -> protect Views.admin
            | Error          -> Views.error
            | Home           -> Views.home
            | Login action   -> Views.login action
            | Logout         -> logout()
            | Snippet pageId -> Views.snippet pageId
            | Highlight      -> Views.highlight
            | Tagged tag     -> Views.tagged tag
            | Extjs pageId   -> Views.extjs pageId
            | Search q -> Views.search q
        { Handle = handle }