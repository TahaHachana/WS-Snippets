module Sitelet.Site

open Controller
open WebSharper.Sitelets
open Model
open System.Text.RegularExpressions

let RedirectRouter =
    let route (req:Http.Request) =
        let regMatch = Regex("/snippet/(\d+)(/.+)?").Match req.Uri.LocalPath
        match regMatch.Success with
        | false -> None
        | true ->
            let snippetId = regMatch.Groups.[1].Value |> int
            match snippetId with
            | 27 | 30 | 9 -> Some Error
            | i ->
                match regMatch.Groups.[2].Value with
                | "" ->
                    let snippet = Mongo.Snippets.byId i
                    Some <| Redirect (i, snippet.Url)
                | x -> Some <| Snippet (snippetId, x)
    Router.New route <| fun _ -> None

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
    <|> RedirectRouter
    <|> Router.Infer()

let main =
    {
        Controller = controller
        Router     = router
    }

type Website() =
    interface IWebsite<Action> with
        member __.Sitelet = Sitelet.Sum [NewPage.main; main]
        member __.Actions = []

[<assembly: WebsiteAttribute(typeof<Website>)>]
do ()