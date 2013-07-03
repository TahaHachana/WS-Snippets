namespace Website

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
            q.Fetch <- ["title"; "description"]
            q.Snippet <- ["title"; "description"]
            q
//        let search = client.Search("WSSnippets", query)

        
        let results q =
            let q' = query q
            client.Search("WSSnippets", q').Results
            |> Seq.toArray
            |> Array.map (fun x ->
                let title = x.Snippets.["title"] |> function "" -> x.Fields.["title"] | t -> t
//                let description = x.Snippets.["description"] |> function "" -> x.Fields.["description"] | d -> d
//                x.DocId, title, x.Snippets.["description"], x.Snippets.["code"])
                x.DocId, title, x.Fields.["description"])

        open IntelliFactory.WebSharper.Sitelets

    [<Inline "encodeURIComponent($uri)">]
    let inline encode (uri : string) = X<string>
            
    [<JavaScript>]
    module private Client =
        open IntelliFactory.WebSharper.Html
        open IntelliFactory.WebSharper.Html5
        open IntelliFactory.WebSharper.JQuery

//        type Result =
//            {
//                query : string
//                suggestions : string []
//            }
//
//        let suggest query (elt : Element) =
//            JQuery.GetJSON(("http://vuzupy.api.indexden.com/v1/indexes/WSSnippets/autocomplete?field=description&query=" + query + "&callback=?"), (fun (data, _) ->
//                let data = As<Result> data
//                elt.Html <- ""
//                data.suggestions
//                |> Array.iter (fun suggestion ->
//                    JQuery.Of("<option/>").Text(suggestion).AppendTo(elt.Dom).Ignore)))
//            |> ignore

        let main() =
//            let datalist = HTML5.Tags.DataList [Attr.Id "suggestions"]
            let inp =
                Input [Attr.Id "query"; Attr.Type "text"; Attr.Class "input-xxlarge search-query"; HTML5.Attr.AutoFocus "autofocus"; Attr.Style "font-size: 30px; height: 40px"]
                |>! OnKeyUp (fun elt key ->
//                    let v = elt.Value
//                    match v with
//                        | "" -> ()
//                        | _ -> suggest elt.Value datalis
                    match key.KeyCode with
                        | 13 -> 
                            let query = elt.Value |> encode
                            Window.Self.Location.Href <- "/search/" + query + "/1"
                        | _  -> ()) //suggest elt.Value datalist)            
            Div [Attr.Class "form-search"] -< [
                Div [Attr.Class "input-append"] -< [
                    inp
                    Button [Text "Search"; Attr.Type "button"; Attr.Class "btn btn-success"; Attr.Style "height: 50px; font-size: 20px;"]
                    |>! OnClick (fun _ _ ->
                        let q = inp.Value.Trim() |> encode
                        Window.Self.Location.Href <- "/search/" + q + "/1")
                ]
                Script [Attr.Src "Scripts/AutoComplete.js"]
//                datalist
            ]

    type Control() =
        inherit Web.Control()

        [<JavaScript>]
        override __.Body = Client.main() :> _