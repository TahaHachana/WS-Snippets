module Sitelet.Controller

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
        | Snippet (id, path) -> Views.snippet id path
        | Tagged tag     -> Views.tagged tag
//            | Extjs pageId   -> Views.extjs pageId
        | Search (q, id) -> Views.search q id
        | Rss            -> Views.rss
        | _              -> Content.ServerError
    { Handle = handle }