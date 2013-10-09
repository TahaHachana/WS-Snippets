module Website.LoginInfo

open System
open IntelliFactory.Html
open IntelliFactory.WebSharper.Sitelets
open Model
    
let random url =
    let dateStr = Uri.EscapeUriString <| DateTime.Now.ToString()
    url + "?d=" + Uri.EscapeUriString dateStr

let link href text =
    A [HRef href; Class "pull-right"] -< [
        Text text
    ]

let elt (ctx: Context<_>) =
    let user = UserSession.GetLoggedInUser()
    let link =
        match user with
        | Some userStr ->
            link
                (random <| ctx.Link Action.Logout)
                <| "Log Out (" + userStr + ")"
        | None      -> link "/login" "Login"
    Div [Class "row"] -< [link]