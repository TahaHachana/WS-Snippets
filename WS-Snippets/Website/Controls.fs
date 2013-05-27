namespace Website

module Controls =
    open System.Collections.Generic
    open IntelliFactory.WebSharper
    open IntelliFactory.WebSharper.Html
    open IntelliFactory.WebSharper.JQueryUI

    type Snippet =
        {
            Id       : int
            Title    : string
            MetaDesc : string
            Description : string
            Tags     : string list
            Control  : Web.Control
        }

    let hashset = HashSet<Snippet>()
    let hashset' = HashSet<string>()

    module Snippet1 =
        [<JavaScript>]
        let private main() =
            Default.Button [Text "Press Me"; Attr.Class "btn btn-primary btn-large"]
            |>! OnClick (fun _ _ -> JavaScript.Alert "Hello, world!")

        type Control() =
            inherit Web.Control()

            [<JavaScript>]
            override __.Body = main() :> _

    module Snippet2 =
        [<JavaScript>]
        let main() =
            let style = 
                "width: 150px; font-size: large; text-align: center; border: 1px solid; margin: 5px;"
            let elt = 
                Div [Div [Attr.Style style] -- Text "Sortable item 1"
                     Div [Attr.Style style] -- Text "Sortable item 2"
                     Div [Attr.Style style] -- Text "Sortable item 3"]
            Sortable.New(elt)
    
        type Control() = 
            inherit Web.Control()
            [<JavaScript>]
            override __.Body = main() :> _        

    module Snippets =
        let private snippet id title metaDesc desc tags control = {Id = id; Title = title; MetaDesc = metaDesc; Description = desc; Tags = tags; Control = control }
        
        let snippet1 =
            snippet
                1
                "Hello World"
                "WebSharper hello world example."
                "This example inserts a button into the DOM that displays an alert saying \"Hello, world!\" when clicked. WebSharper's HTML combinators are used to generate the markup."
                ["WEBSHARPER"; "HTML"]
                <| new Snippet1.Control()
        
        [|
            snippet1
        |]
        |> Array.iter (fun x ->
            hashset.Add x |> ignore
            x.Tags |> List.iter (fun y -> hashset'.Add y |> ignore))