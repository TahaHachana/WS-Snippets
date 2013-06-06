﻿namespace Website

module Search =
    open IntelliFactory.WebSharper

    module Server =
        open System
        open TankTop
        open TankTop.Dto

        let client = TankTopClient Secret.indexdenUrl

        let query text =
            let q = Query text
            q.MatchAnyField <- Nullable(true)
            q.Fetch <- ["title"]
            q.Snippet <- ["title"; "description"; "code"]
            q
//        let search = client.Search("WSSnippets", query)

        let results q =
            let q' = query q
            client.Search("WSSnippets", q').Results
            |> Seq.toArray
            |> Array.map (fun x ->
                let title = x.Snippets.["title"] |> function "" -> x.Fields.["title"] | t -> t
                x.DocId, title, x.Snippets.["description"], x.Snippets.["code"])

        open IntelliFactory.WebSharper.Sitelets

    [<Inline "encodeURIComponent($uri)">]
    let inline encode (uri : string) = X<string>
            
    [<JavaScript>]
    module private Client =
        open IntelliFactory.WebSharper.Html
        open IntelliFactory.WebSharper.Html5
        open IntelliFactory.WebSharper.JQuery

        type Result =
            {
                query : string
                suggestions : string []
            }

        let suggest query (elt : Element) =
            elt.Html <- ""
            JQuery.GetJSON(("http://vuzupy.api.indexden.com/v1/indexes/WSSnippets/autocomplete?field=title&query=" + query + "&callback=?"), (fun (data, _) ->
                let data = As<Result> data
                data.suggestions
                |> Array.iter (fun suggestion ->
                    JQuery.Of("<option/>").Text(suggestion).AppendTo(elt.Dom).Ignore)))
            |> ignore

        let main() =
            let datalist = HTML5.Tags.DataList [Attr.Id "suggestions"]
            let inp =
                Input [HTML5.Attr.List "suggestions"; Attr.Id "query"; Attr.Type "text"; Attr.Class "input-xxlarge search-query"; HTML5.Attr.AutoFocus "autofocus"; Attr.Style "font-size: 30px; height: 40px"]
                |>! OnKeyUp (fun elt key ->
                    let v = elt.Value
                    match v with
                        | "" -> ()
                        | _ -> suggest elt.Value datalist)
//                    match key.KeyCode with
//                        | 13 -> 
//                            let query = elt.Value |> encode
//                            Window.Self.Location.Href <- "/search/" + query + "/1"
//                        | _  -> suggest elt.Value datalist)            
            Div [Attr.Class "form-search"] -< [
                Div [Attr.Class "input-append"] -< [
                    inp
                    Button [Text "Search"; Attr.Type "button"; Attr.Class "btn btn-success"; Attr.Style "height: 50px; font-size: 20px;"]
                    |>! OnClick (fun _ _ ->
                        let q = inp.Value.Trim() |> encode
                        Window.Self.Location.Href <- "/search/" + q + "/1")
                ]
                datalist
            ]

    type Control() =
        inherit Web.Control()

        [<JavaScript>]
        override __.Body = Client.main() :> _