namespace Website

open IntelliFactory.Html
open IntelliFactory.WebSharper.Sitelets
open Model
open Controller

module Site =
    let router : Router<Action> =
        Router.Table
            [
                About      , "/about"
                Admin      , "/admin"
                Error      , "/error"
                Home       , "/"
                Login None , "/login"
                Highlight  , "/highlight"
                Rss        , "/rss"
            ]
        <|> Router.Infer()

    let main =
        {
            Controller = controller
            Router     = router
        }

type Website() =
    interface IWebsite<Action> with
        member this.Sitelet = Sitelet.Sum [NewPage.main; Site.main]
        member this.Actions = []

[<assembly: WebsiteAttribute(typeof<Website>)>]
do ()