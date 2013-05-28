namespace Website

module Controls =
    open System.Collections.Generic
    open IntelliFactory.WebSharper
    open IntelliFactory.WebSharper.Html
    open IntelliFactory.WebSharper.Html5
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
        let private main() =
            let elt = HTML5.Tags.Canvas [Text "Fallback content goes here."; Attr.Style "border: 1px solid"]
            let canvas  = As<CanvasElement> elt.Dom
            canvas.Height <- 100
            canvas.Width  <- 400
            let ctx = canvas.GetContext "2d"
            ctx.Font <- "40px sans-serif"
            ctx.FillText("Hello Canvas", 90., 50.)
            elt
        
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
                "This example inserts a button in the DOM that displays an alert saying \"Hello, world!\" when clicked. WebSharper's HTML combinators are used to generate the markup."
                ["WEBSHARPER"; "HTML"]
                <| new Snippet1.Control()

        let snippet2 =
            snippet
                2
                "Drawing Text on an HTML5 Canvas"
                "Drawing text on the HTML5 canvas with WebSharper."
                "The HTML5 canvas supports drawing text on the fly via JavaScript. This snippets uses the \"FillText\" method to draw \"Hello Canvas\" filled with the default black color after setting the font-size to 40px. The \"StrokeText\" method would draw an outline with no fill."
                ["HTML5"; "Canvas"; "JavaScript"]
                <| new Snippet2.Control()
        
        [|
            snippet1
            snippet2
        |]
        |> Array.iter (fun x ->
            hashset.Add x |> ignore
            x.Tags |> List.iter (fun y -> hashset'.Add y |> ignore))