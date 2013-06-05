namespace Website

module Content =
    open IntelliFactory.Html
    open IntelliFactory.WebSharper
    open IntelliFactory.WebSharper.Sitelets.Content
    open Utils.Server

    module Shared =
        let navigation : HtmlElement = nav None
        let footer : HtmlElement =
            HTML5.Footer [Id "footer"] -< [
                Div [Class "container"; Style "padding-top: 20px;"] -< [
                    P [Text "Powered by "] -< [
                        A ["WebSharper" => "http://www.websharper.com/"]
                    ]
                ]            
            ]

    module Home =
        let title = "WebSharper Snippets"
        let metaDescription = "WebSharper code snippets and examples featuring live demos and complete source code."
        let navigation : HtmlElement = nav <| Some "Home"

    module About =
        let title = "About WebSharper Snippets"
        let metaDescription = ""
        let navigation : HtmlElement = nav <| Some "About"

        let header : HtmlElement =
            header
                "About page header"
                "Short about page description"