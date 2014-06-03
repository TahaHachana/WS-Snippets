module Sitelet.Site

open IntelliFactory.Html
open IntelliFactory.WebSharper.Sitelets
open Model
open Controller

open System.Text.RegularExpressions

let MyRouter : Router<Action> =
    let route (req: Http.Request) =
        let regMatch = Regex("/snippet/(\d+)").Match req.Uri.LocalPath
        match regMatch.Success with
        | false -> None
        | true ->
            let snippetId = regMatch.Groups.[1].Value |> int
            match snippetId with
            | 27 | 30 -> Some Home
            | _ -> Some <| Snippet (snippetId, "")
    let link _ = None
//        match action with
//        | Action.About -> 
//            System.Uri("/page2", System.UriKind.Relative)
//            |> Some 
//        | _ -> 
//            System.Uri("/page1", System.UriKind.Relative)
//            |> Some
    Router.New route link

let router : Router<Action> =
    Router.Table
        [
            About      , "/about"
            Admin      , "/admin"
            Error      , "/error"
            Home       , "/"
            Login None , "/login"
            Rss        , "/rss"
        ]
    <|> Router.Infer()
    <|> MyRouter

let main =
    {
        Controller = controller
        Router     = router
    }

type Website() =
    interface IWebsite<Action> with
        member this.Sitelet = Sitelet.Sum [NewPage.main; main]
        member this.Actions = []

[<assembly: WebsiteAttribute(typeof<Website>)>]
do ()