namespace Website

open System.Web
open IntelliFactory.WebSharper.Sitelets
open IntelliFactory.WebSharper.Sitelets.Content

module Skin =

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

    let loadFrequency =
        #if DEBUG
            Content.Template.PerRequest
        #else
            Content.Template.Once
        #endif

    let makeTemplate<'T> path =
        let path' = HttpContext.Current.Server.MapPath path
        Template<'T>(path', loadFrequency)
    
    let makeDefaultTemplate path =
        makeTemplate<DefaultPage> path
        |> fun x ->
            x.With("title"          , fun x -> x.Title)
             .With("meta-description", fun x -> x.MetaDescription)
             .With("body"           , fun x -> x.Body)
             .With("footer"         , fun x -> x.Footer)

    let withTemplate<'T> template title metaDescription makeBody footer : Content<'T> =
        WithTemplate template
        <| fun context ->
            DefaultPage.Make title metaDescription makeBody context footer

module ExtJsSkin =

    type Page = { Body : Content.HtmlElement }

    let template =
        let path = HttpContext.Current.Server.MapPath("~/HTML/ExtJS.html")
        Content.Template<Page>(path).With("body", fun x -> x.Body)

    let withTemplate body : Content<'T> =
        Content.WithTemplate template <| fun context -> { Body = body }