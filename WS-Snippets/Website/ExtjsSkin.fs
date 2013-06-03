namespace Website

module ExtjsSkin =
    open System.Web
    open IntelliFactory.WebSharper.Sitelets
    open IntelliFactory.WebSharper.Sitelets

    type private Page = { Body : Content.HtmlElement list }

    let private template =
        let path = HttpContext.Current.Server.MapPath("~/Extjs.html")
        Content.Template<Page>(path).With("body", fun x -> x.Body)

    let withTemplate body : Content<'T> =
        Content.WithTemplate template <| fun context -> { Body = body }