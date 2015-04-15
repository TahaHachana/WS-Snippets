module Sitelet.Search

open WebSharper

module Server =
    open System
    open TankTop
    open TankTop.Dto

    let client = TankTopClient AppSettings.indexdenUrl

    let makeQuery text start =
        let indexQuery = Query text
        indexQuery.MatchAnyField <- Nullable(true)
        indexQuery.Fetch <- ["title"; "description"]
        indexQuery.Snippet <- ["title"; "description"]
        indexQuery.Start <- Nullable start
        indexQuery.Len <- Nullable 10
        indexQuery
        
    let results queryText start =
        let indexQuery = makeQuery queryText start
        let searchResults = client.Search("Snippets", indexQuery)
        let results =
            searchResults.Results
            |> Seq.toArray
            |> Array.map (fun x ->
                let title =
                    x.Snippets.["title"]
                    |> function 
                    | "" -> x.Fields.["title"]
                    | titleSnippet -> titleSnippet
                x.DocId, title, x.Fields.["description"])
        float searchResults.Matches, results

[<JavaScript>]
module private Client =
    open WebSharper.JavaScript
    open WebSharper.Html.Client
    open WebSharper.JQuery
    open WebSharper.Piglets

    type Query = string

    let view queryString submit =
        Div [
            Attr.Class "input-group input-group-lg col-md-6 col-md-offset-3"
        ] -< [
            Controls.Input queryString -<[
                Attr.Class "form-control"
                Attr.Id "query"
                Attr.Type "text"
                AutoFocus "autofocus"
            ]
            |>! OnKeyUp (fun _ key ->
                match key.KeyCode with
                | 13 ->
                    JQuery.Of("#query").Blur().Ignore
                    JQuery.Of("#search-btn").Click().Ignore
                | _  -> ())
            Span [Attr.Class "input-group-btn"] -< [
                Controls.SubmitValidate submit -< [
                    Attr.Class "btn btn-primary"
                    Attr.Id "search-btn"
                    Attr.Value "Search"
                    Attr.Data "loading-text" "Please wait..."
                ]
            ]
        ]

    let queryPiglet (init: Query) =
        Piglet.Return id
        <*> Piglet.Yield init
            |> Piglet.Validation.Is
                Piglet.Validation.NotEmpty
                "Please enter a search query."
        |> Piglet.WithSubmit

    let main() =
        queryPiglet ""
        |> Piglet.Run (fun queryString ->
            let queryString' = JS.EncodeURIComponent queryString
            JS.Window.Location.Assign <| "/search/" + queryString' + "/1"
        )
        |> Piglet.Render view

type Control() =
    inherit Web.Control()

    [<JavaScript>]
    override __.Body = Client.main() :> _