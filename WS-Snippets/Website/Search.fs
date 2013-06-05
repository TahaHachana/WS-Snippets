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

        let main() =
            let inp =
                Input [Attr.Id "query"; Attr.Type "text"]
                |>! OnKeyDown (fun elt key ->
                    match key.KeyCode with
                        | 13 -> 
                            let q = elt.Value |> encode
                            Window.Self.Location.Href <- "/search/" + q + "/1"
                        | _  -> ())            
            Div [
                inp
                Button [Text "Search"]
                |>! OnClick (fun _ _ ->
                    let q = inp.Value |> encode
                    Window.Self.Location.Href <- "/search/" + q + "/1")
            ]

    type Control() =
        inherit Web.Control()

        [<JavaScript>]
        override __.Body = Client.main() :> _