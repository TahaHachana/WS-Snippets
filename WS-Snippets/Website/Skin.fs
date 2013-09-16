namespace Website

module Skin =
    open System.Web
    open IntelliFactory.WebSharper.Sitelets
    open IntelliFactory.WebSharper.Sitelets.Content

    type DefaultPage =
        {
            Title           : string
            MetaDescription : string
            Body            : HtmlElement
            Footer          : HtmlElement
        }

        static member Make title metaDescription makeBody context footer =
            {
                Title           = title
                MetaDescription = metaDescription
                Body            = makeBody context
                Footer          = footer
            }

    let makeTemplate<'T> path (loadFrequency : Template.LoadFrequency) =
        let path' = HttpContext.Current.Server.MapPath path
        Template<'T>(path', loadFrequency)
    
    let makeDefaultTemplate path loadFrequency =
        makeTemplate<DefaultPage> path loadFrequency
        |> fun x ->
            x.With("title"          , fun x -> x.Title)
             .With("meta-description", fun x -> x.MetaDescription)
             .With("body"           , fun x -> x.Body)
             .With("footer"         , fun x -> x.Footer)

    let withTemplate<'T> template title metaDescription makeBody footer : Content<'T> =
        WithTemplate template
        <| fun context ->
            DefaultPage.Make title metaDescription makeBody context footer


