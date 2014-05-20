module Sitelet.LoginInfo

open System
open IntelliFactory.Html
open IntelliFactory.WebSharper.Sitelets
open Model
    
let random url =
    let dateStr = Uri.EscapeUriString <| DateTime.Now.ToString()
    url + "?d=" + dateStr

let link href text =
    A [
        HRef href
        Class "pull-right"
    ] -< [Text text]

let elt (ctx: Context<_>) =
    let user = UserSession.GetLoggedInUser()
    let link =
        match user with
        | Some userStr ->
            link
                (random <| ctx.Link Action.Logout)
                <| "Log Out (" + userStr + ")"
        | None -> link "/login" "Login"
    Div [link]