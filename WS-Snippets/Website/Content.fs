namespace Website

module Content =
    open IntelliFactory.Html
    open IntelliFactory.WebSharper
    open IntelliFactory.WebSharper.Sitelets.Content
    open Utils

    let footer : HtmlElement =
        HTML5.Footer [Id "footer"] -< [
            Div [Class "container"] -< [
                Div [Class "col-lg-4"] -< [
                    P [Class "text-center credit"] -< [
                        Text "Built with "
                        A [HRef "http://www.websharper.com/"; Target "_blank"] -< [Text "WebSharper"]
                    ]
                ]
                Div [Class "col-lg-4"] -< [
                    P [Class "text-center credit"] -< [
                        Text "Snippets in database: 28"
                    ]
                ]
                Div [Class "col-lg-4"] -< [
                    P [Class "text-center credit"] -< [
                        Text "Developed by "
                        A [HRef "http://taha-hachana.apphb.com/"; Target "_blank"] -< [Text "Taha Hachana"]
                    ]
                ]
            ]            
        ]