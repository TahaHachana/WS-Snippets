module Sitelet.ExtjsSkin

do ()
//    open System.Web
//    open WebSharper.Sitelets
//    open WebSharper.Sitelets
//
//    type private Page = { Body : Content.HtmlElement }
//
//    let private template =
//        let path = HttpContext.Current.Server.MapPath("~/Extjs.html")
//        Content.Template<Page>(path).With("body", fun x -> x.Body)
//
//    let withTemplate body : Content<'T> =
//        Content.WithTemplate template <| fun context -> { Body = body }