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
                Div [Class "container"; Style "width: 1000px; padding: 30px;"] -< [
                    P [Style "float: left;"] -< [Text "Built with "] -< [
                        A ["WebSharper" => "http://www.websharper.com/"]
                    ]
                    P [Class "pull-right"] -< [Text "Developed by "] -< [
                        A ["Taha Hachana" => "http://taha-hachana.apphb.com/"]
                    ]
                    P [Class "text-center"] -< [Text "Snippets in database: 23"]
                ]            
            ]

    module Home =
        let title = "WebSharper Snippets"
        let metaDescription = "WebSharper code examples featuring live demos."
        let navigation : HtmlElement = nav <| Some "Home"

    module About =
        let title = "About W# Snippets"
        let metaDescription = "Application built with WebSharper and maintained by Taha Hachana."
        let navigation : HtmlElement = nav <| Some "About"