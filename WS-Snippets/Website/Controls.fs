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

    type ExtSnippet =
        {
            Id : int
            Control : Web.Control
        }

    let hashset = HashSet<Snippet>()
    let hashset' = HashSet<string>()
    let hashset'' = HashSet<ExtSnippet>()

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

    module Snippet3 =
        [<JavaScript>]
        let private main() =
            Div [Text "Hello"]
            |>! OnAfterRender (fun elt -> JavaScript.Log elt.Text)

        type Control() =
            inherit Web.Control()

            [<JavaScript>]
            override __.Body = main() :> _

    module Snippet4 =
        [<JavaScript>]
        let private main() = Button.New("Button")

        type Control() =
            inherit Web.Control()
 
            [<JavaScript>]
            override __.Body = main() :> _

    module Snippet5 =
        open IntelliFactory.WebSharper
        open IntelliFactory.WebSharper.ExtJs
        open IntelliFactory.WebSharper.Html
 
        [<JavaScript>]
        let private viewport() =
            let config = Ext.panel.PanelConfiguration()
            let config' = Ext.container.ViewportConfiguration()
            config.Title <- "Ext JS Panel"
            config.Html <- "Hello, world!"
            config'.Layout <- "fit"
            config'.Items <- [|config|]
            Ext.container.Viewport config' |> ignore
            
        [<JavaScript>]
        let private main() =
            Div []
            |>! OnAfterRender (fun _ -> Ext.OnReady(fun _ -> viewport()))
 
        type Control() =
            inherit Web.Control()

            [<JavaScript>]
            override __.Body = Div [IFrame [Attr.Src "/extjs/1"; Attr.Style "margin: 0; padding: 0; border: none; width: 100%"]] :> _

        type ExtControl() =
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
                ["HTML5"; "CANVAS"; "JAVASCRIPT"]
                <| new Snippet2.Control()

        let snippet3 =
            snippet
                3
                "Debugging with the Console"
                "Debugging code with the browser's JavaScript console."
                "Modern browsers feature a JavaScript console that you can use to log almost anything which is very useful for debugging purposes. Open your browser's console to see how this sample logged the text \"Hello\"."
                ["JAVASCRIPT"]
                <| new Snippet3.Control()

        let snippet4 =
            snippet
                4
                "jQuery UI Button Widget"
                "Simple jQuery UI button widget created with WebSharper."
                "This snippet uses the WebSharper jQuery UI extension to create a simple button widget."
                ["JQUERY"; "JQUERY UI"]
                <| new Snippet4.Control()

        let snippet5 =
            snippet
                5
                "Hello Ext JS"
                "Ext JS hello world example."
                "This snippet is a small hello world build with Ext JS. The UI is composed of a panel within a viewport."
                ["EXT JS"]
                <| new Snippet5.Control()
        
        [|
            snippet1
            snippet2
            snippet3
            snippet4
            snippet5
        |]
        |> Array.iter (fun x ->
            hashset.Add x |> ignore
            x.Tags |> List.iter (fun y -> hashset'.Add y |> ignore))

    module ExtSnippets =
        let private snippet id control = {Id = id; Control = control }
        
        let snippet1 = snippet 1 (new Snippet5.ExtControl())
        
        [|
            snippet1
        |]
        |> Array.iter (fun x -> hashset''.Add x |> ignore)