module Sitelet.Skin

open System.Web
open IntelliFactory.WebSharper.Sitelets
open IntelliFactory.WebSharper.Sitelets.Content

type DefaultPage =
    {
        Title : string
        MetaDescription : string
        Body : HtmlElement
        Footer : HtmlElement
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
    |> fun template ->
        template.With("title", fun page -> page.Title)
            .With("meta-description", fun page -> page.MetaDescription)
            .With("body", fun page -> page.Body)
            .With("footer", fun page -> page.Footer)

let withTemplate<'T> template title metaDescription makeBody footer : Content<'T> =
    WithTemplate template
    <| fun context ->
        {
            Title = title
            MetaDescription = metaDescription
            Body = makeBody context
            Footer = footer
        }

//module ExtJsSkin =
//
//    type Page = { Body : Content.HtmlElement }
//
//    let template =
//        let path = HttpContext.Current.Server.MapPath("~/HTML/ExtJS.html")
//        Content.Template<Page>(path).With("body", fun page -> page.Body)
//
//    let withTemplate body : Content<'T> =
//        Content.WithTemplate template <| fun context -> { Body = body }