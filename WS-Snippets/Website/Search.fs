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


    [<JavaScript>]
    module private Client =
        open IntelliFactory.WebSharper.Html
        open IntelliFactory.WebSharper.Html5

//        let private input = Input [Attr.Type "text"]
        let main() =
            let inp = Input [Attr.Id "query"; Attr.Type "text"; Attr.Value "test"]
            Div [
                inp
                Button [Text "Search"]
                |>! OnClick (fun _ _ ->
                    let q = inp.Value
//                    JavaScript.Log q)
                    Window.Self.Location.Href <- "/search/" + q)
            ]

    type Control() =
        inherit Web.Control()

        [<JavaScript>]
        override __.Body = Client.main() :> _