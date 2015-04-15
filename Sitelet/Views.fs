module Sitelet.Views

open System.IO
open System.Web
open WebSharper.Html.Server
open WebSharper.Sitelets
open Model
open Mongo
open Skin

let home =
    withTemplate<Action>
        Templates.home
        "WebSharper Snippets"
        "WebSharper code snippets with live demos."
        (fun ctx -> Content.Home.body)
        Content.Footer.elt

let about =
    withTemplate<Action>
        Templates.about
        "About WebSharper Snippets"
        "WebSharper demos application built and maintained by Taha Hachana." 
        (fun ctx -> Div [Id "push"])
        Content.Footer.elt

let login actionOption =
    withTemplate
        Templates.login
        "Login"
        ""
        (fun ctx -> Content.Login.body actionOption ctx)
        Content.Footer.elt

let admin =
    withTemplate
        Templates.admin
        "Admin"
        ""
        (fun ctx -> Content.Admin.body ctx)
        Content.Footer.elt

let error =
    withTemplate<Action>
        Templates.error
        "Error · Page Not Found"
        ""
        (fun ctx -> Div [Id "push"])
        Content.Footer.elt

let snippet id path =
    let snippet = Mongo.Snippets.byId id
    withTemplate
        Templates.snippet
        (Content.Snippet.title snippet)
        snippet.MetaDesc
        (fun ctx -> Content.Snippet.body snippet)
        Content.Footer.elt
                                       
let tagged (tag:string) =
    let tagUpper = tag.ToUpper()
    let tag' =
        tag.Split '-'
        |> String.concat " "
        |> fun x -> x.ToUpper()
    withTemplate
        Templates.tagged
        ("Snippets Tagged " + tagUpper)
        ("WebSharper code snippets and examples tagged " + tag' + ".")
        (fun ctx -> Content.Tagged.body tagUpper tag')
        Content.Footer.elt

let search queryStr pageId =
    let queryStr' = HttpUtility.UrlDecode queryStr
    let matches, results = Search.Server.results queryStr' ((pageId - 1) * 10)
    withTemplate
        Templates.search
        (queryStr' + "- Search Results")
        ""
        (fun ctx -> Content.Search.body results pageId matches queryStr)
        Content.Footer.elt

let rss : Content<Action> =
    let feed = Rss.rssFeed()
    CustomContent <| fun context ->
        {
            Status = Http.Status.Ok
            Headers = [Http.Header.Custom "Content-Type" "application/rss+xml"]
            WriteBody = fun stream ->
                use tw = new System.IO.StreamWriter(stream)
                tw.WriteLine feed
        }