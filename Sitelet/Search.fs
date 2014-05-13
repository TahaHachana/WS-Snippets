namespace Website

module Search =
    open IntelliFactory.WebSharper

    module Server =
        open System
        open TankTop
        open TankTop.Dto

        let client = TankTopClient AppSettings.indexdenUrl

        let query text start =
            let q = Query text
            q.MatchAnyField <- Nullable(true)
            q.Fetch <- ["title"; "description"]
            q.Snippet <- ["title"; "description"]
            q.Start <- Nullable start
            q.Len <- Nullable 5
            q
//        let search = client.Search("WSSnippets", query)

        
        let results q start =
            let q' = query q start
            let searchResults = client.Search("WSSnippets", q')
            let results =
                client.Search("WSSnippets", q').Results
                |> Seq.toArray
                |> Array.map (fun x ->
                    let title = x.Snippets.["title"] |> function "" -> x.Fields.["title"] | t -> t
    //                let description = x.Snippets.["description"] |> function "" -> x.Fields.["description"] | d -> d
    //                x.DocId, title, x.Snippets.["description"], x.Snippets.["code"])
                    x.DocId, title, x.Fields.["description"])
            float searchResults.Matches, results

    [<Inline "encodeURIComponent($uri)">]
    let inline encode (uri : string) = X<string>
            
    [<JavaScript>]
    module private Client =
        open IntelliFactory.WebSharper.Html
        open IntelliFactory.WebSharper.Html5
        open IntelliFactory.WebSharper.JQuery

        let main() =
            let inp =
                Input [Attr.Id "query"; Attr.Type "text"; Attr.Class "form-control input-lg"; HTML5.Attr.AutoFocus "autofocus"] //; Attr.Style "font-size: 30px; height: 40px"]
                |>! OnKeyUp (fun elt key ->
                    match key.KeyCode with
                        | 13 -> 
                            let query = elt.Value |> encode
                            Window.Self.Location.Href <- "/search/" + query + "/1"
                        | _  -> ()) //suggest elt.Value datalist)            
            Div [Attr.Class "row"] -< [
                Div [Attr.Class "col-lg-6 col-lg-offset-3"] -< [
                    Div [Attr.Class "input-group"] -< [
                        inp
                        Span [Attr.Class "input-group-btn"] -< [
                            Button [Text "Search"; Attr.Type "button"; Attr.Class "btn btn-success btn-lg"] //; Attr.Style "height: 50px; font-size: 20px;"]
                            |>! OnClick (fun _ _ ->
                                let q = inp.Value.Trim() |> encode
                                Window.Self.Location.Href <- "/search/" + q + "/1")
                        ]
                    ]
                    Script [Attr.Src "Scripts/AutoComplete.js"]
    //                datalist
                ]
            ]
    type Control() =
        inherit Web.Control()

        [<JavaScript>]
        override __.Body = Client.main() :> _