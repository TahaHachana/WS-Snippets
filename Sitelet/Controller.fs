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
//            match path with
//            | "" ->
//                let snippet = Mongo.Snippets.byId id
//                Content.Redirect <| Snippet (id, snippet.Url)
//            | _ -> Views.snippet id path
        | Tagged tag     -> Views.tagged tag
//            | Extjs pageId   -> Views.extjs pageId
        | Search (q, id) -> Views.search q id
        | Rss            -> Views.rss
        | Redirect (snippetId, url) -> Content.Redirect <| Snippet (snippetId, url) //Content.RedirectToUrl path
        | _              -> Content.ServerError
    { Handle = handle }