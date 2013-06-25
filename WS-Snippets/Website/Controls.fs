namespace Website

module Controls =
    open System.Collections.Generic
    open IntelliFactory.WebSharper
    open IntelliFactory.WebSharper.ExtJs
    open IntelliFactory.WebSharper.Html
    open IntelliFactory.WebSharper.Html5
    open IntelliFactory.WebSharper.JQuery
    open IntelliFactory.WebSharper.JQueryUI

    type Snippet =
        {
            Id          : int
            Title       : string
            MetaDesc    : string
            Description : string
            Tags        : string list
            Control     : Web.Control
        }

    type ExtSnippet =
        {
            Id      : int
            Control : Web.Control
        }

    let hashset   = HashSet<Snippet>()
    let hashset'  = HashSet<string>()
    let hashset'' = HashSet<ExtSnippet>()

    module Snippet1 =
//        [<JavaScript>]
//        let private main() =
//            Default.Button [Text "Press Me"; Attr.Class "btn btn-primary btn-large"]
//            |>! OnClick (fun _ _ -> JavaScript.Alert "Hello, world!")
//
//        type Control() =
//            inherit Web.Control()
//
//            [<JavaScript>]
//            override __.Body = main() :> _
//
//    module Snippet2 =
//        [<JavaScript>]
//        let private main() =
//            let elt = HTML5.Tags.Canvas [Text "Fallback content goes here."; Attr.Style "border: 1px solid"]
//            let canvas  = As<CanvasElement> elt.Dom
//            canvas.Height <- 100
//            canvas.Width  <- 400
//            let ctx = canvas.GetContext "2d"
//            ctx.Font <- "40px sans-serif"
//            ctx.FillText("Hello Canvas", 90., 50.)
//            elt
//        
//        type Control() =
//            inherit Web.Control()
//
//            [<JavaScript>]
//            override __.Body = main() :> _
//
//    module Snippet3 =
//        [<JavaScript>]
//        let private main() =
//            Div [Text "Hello"]
//            |>! OnAfterRender (fun elt -> JavaScript.Log elt.Text)
//
//        type Control() =
//            inherit Web.Control()
//
//            [<JavaScript>]
//            override __.Body = main() :> _
//
//    module Snippet4 =
//        [<JavaScript>]
//        let private main() = Button.New("Button")
//
//        type Control() =
//            inherit Web.Control()
// 
//            [<JavaScript>]
//            override __.Body = main() :> _
//
//    module Snippet5 = 
//        [<JavaScript>]
//        let private viewport() =
//            let config = Ext.panel.PanelConfiguration()
//            let config' = Ext.container.ViewportConfiguration()
//            config.Title <- "Ext JS Panel"
//            config.Html <- "Hello, world!"
//            config'.Layout <- "fit"
//            config'.Items <- [|config|]
//            Ext.container.Viewport config' |> ignore
//            
//        [<JavaScript>]
//        let private main() =
//            Div []
//            |>! OnAfterRender (fun _ -> Ext.OnReady(fun _ -> viewport()))
// 
//        type Control() =
//            inherit Web.Control()
//
//            [<JavaScript>]
//            override __.Body = Div [IFrame [Attr.Src "/extjs/1"; Attr.Style "margin: 0; padding: 0; border: none; width: 100%; height: 440px;"]] :> _
//
//        type ExtControl() =
//            inherit Web.Control()
//
//            [<JavaScript>]
//            override __.Body = main() :> _
//
//    module Snippet6 =
//        [<JavaScript>]
//        let drawLine (ctx : CanvasRenderingContext2D) x y = ctx.LineTo(x, y)
//    
//        [<JavaScript>]
//        let drawPaths ctx coords =
//            coords |> List.iter (fun (x, y) -> drawLine ctx x y)
//            ctx.ClosePath()
//            ctx.Fill()
//
//        [<JavaScript>]
//        let drawShape (ctx : CanvasRenderingContext2D) (style : string) moveTo coords =
//            ctx.FillStyle <- style
//            ctx.BeginPath()
//            ctx.MoveTo moveTo
//            drawPaths ctx coords
//
//        [<JavaScript>]
//        let canvas() =
//            let elt = HTML5.Tags.Canvas [Attr.Style "display: none;"]
//            let canvas  = As<CanvasElement> elt.Dom
//            canvas.Height <- 400
//            canvas.Width <- 600
//            let ctx = canvas.GetContext("2d")
//
//            // draw "HTML"
//            ctx.Font <- "60px 'Gill Sans Ultra Bold'"
//            ctx.FillText("HTML", 40., 60.)
//            // move down
//            ctx.Translate(0., 70.)
//            // draw the background
//            drawShape ctx "#E34C26" (44., 255.) [(22.0, 5.0); (267.0, 5.0); (244.0, 255.0); (144.0, 283.0)]
//            // draw the shield-shaped right part
//            drawShape ctx "#F06529" (144., 262.) [(225.0, 239.0); (244.0, 25.0); (144.0, 25.0)]
//            // draw the 5
//            drawShape ctx "#EBEBEB" (144., 118.) [(103.0, 118.0); (101.0, 87.0); (144.0, 87.0); (144.0, 56.0); (67.0, 56.0); (75.0, 149.0); (144.0, 149.0)]
//            drawShape ctx "#EBEBEB" (144., 198.) [(110.0, 189.0); (108.0, 164.0); (77.0, 164.0); (81.0, 212.0); (144.0, 230.0)]
//            drawShape ctx "#FFFFFF" (144., 118.) [(144.0, 149.0); (182.0, 149.0); (178.0, 189.0); (144.0, 198.0); (144.0, 230.0); (207.0, 212.0); (215.0, 118.0)]
//            drawShape ctx "#FFFFFF" (144., 56.)  [(144.0, 87.0); (218.0, 87.0); (221.0, 56.0)]
//
//            elt |>! OnAfterRender (fun x -> JQuery.Of(x.Dom).FadeIn(1000.).Ignore)
//                
//        type Control() =
//            inherit Web.Control()
//
//            [<JavaScript>]
//            override __.Body = canvas() :> _
//
//    module Snippet7 =     
//        [<JavaScript>]
//        let private main() =
//            let config = DialogConfiguration()
//            config.autoOpen <- false
//            config.modal <- true
//            config.title <- "Modal Dialog"
//            let dialog = Dialog.New(P [Text "This is a jQuery UI modal dialog."], config)
//            let btn = Button.New "Press Me"
//            dialog.OnClose(fun _ -> btn.Enable())
//            btn.OnClick (fun _ ->
//                btn.Disable()
//                dialog.Open())
//            Div [btn :> IPagelet; dialog :> IPagelet]
//
//        type Control() =
//            inherit Web.Control()
// 
//            [<JavaScript>]
//            override __.Body = main() :> _
//
//    module Snippet8 =
//        [<JavaScript>]
//        let private window() =
//            let config = Ext.window.WindowConfiguration()
//            config.Title <- "Ext JS Window"
//            config.Width <- 400.
//            config.Height <- 300.
//            config.Maximizable <- true
//            Ext.window.Window config |> fun x -> x.Show()
//
//        [<JavaScript>]
//        let private main() =
//            Div [
//                Default.Button [Text "Open Ext JS Window"; Attr.Class "btn btn-primary"]
//                |>! OnClick (fun elt _ -> Ext.OnReady(fun () -> window()))
//            ]
//
//        type Control() =
//            inherit Web.Control()
//
//            [<JavaScript>]
//            override __.Body = Div [IFrame [Attr.Src "/extjs/2"; Attr.Style "margin: 0; padding: 0; border: none; width: 100%; height: 440px;"]] :> _
//
//        type ExtControl() =
//            inherit Web.Control()
//
//            [<JavaScript>]
//            override __.Body = main() :> _
//
//    module Snippet9 =
//        [<JavaScript>]
//        let states =
//            [|"Alabama"; "Alaska"; "American Samoa"; "Arizona"; "Arkansas"; "California"; "Colorado"
//              "Connecticut"; "Delaware"; "District of Columbia"; "Florida"; "Georgia"; "Guam"; "Hawaii"
//              "Idaho"; "Illinois"; "Indiana"; "Iowa"; "Kansas"; "Kentucky"; "Louisiana"; "Maine"
//              "Maryland"; "Massachusetts"; "Michigan"; "Minnesota"; "Mississippi"; "Missouri"; "Montana"
//              "Nebraska"; "Nevada"; "New Hampshire"; "New Jersey"; "New Mexico"; "New York"; "North Carolina"
//              "North Dakota"; "Northern Marianas Islands"; "Ohio"; "Oklahoma"; "Oregon"; "Pennsylvania"
//              "Puerto Rico"; "Rhode Island"; "South Carolina"; "South Dakota"; "Tennessee"; "Texas"; "Utah"
//              "Vermont"; "Virginia"; "Virgin Islands"; "Washington"; "West Virginia"; "Wisconsin"; "Wyoming"|]
//
//        [<JavaScript>]
//        let private main() =
//            let config = AutocompleteConfiguration(source = states)
//            let input = Input [Attr.Id "state-input"; HTML5.Attr.AutoFocus "true"]
//            Autocomplete.New(input, config) |> ignore
//            Div [Attr.Class "ui-widget"] -< [
//                Label [Attr.For "state-input"] -- Text "State: "
//                input
//            ]
//        
//        type Control() =
//            inherit Web.Control()
// 
//            [<JavaScript>]
//            override __.Body = main() :> _
//
//    module Snippet10 =
//        [<JavaScript>]
//        let private main() =
//            let elt = HTML5.Tags.Canvas [Text "Fallback content goes here."; Attr.Style "border: 1px solid;"]
//            let canvas  = As<CanvasElement> elt.Dom
//            canvas.Height <- 200
//            canvas.Width  <- 400
//            let ctx = canvas.GetContext "2d"
//            ctx.FillStyle <- "blue"
//            ctx.FillRect(50., 50., 300., 100.)
//            elt
//                    
//        type Control() =
//            inherit Web.Control()
// 
//            [<JavaScript>]
//            override __.Body = main() :> _

    module Snippets =
        let private snippet id title metaDesc desc tags control = {Id = id; Title = title; MetaDesc = metaDesc; Description = desc; Tags = tags; Control = control }
        
        let snippet1 =
            snippet
                1
                "Hello World"
                "WebSharper hello world example."
                "<div>This example inserts a button in the DOM that displays an alert saying \"Hello, world!\" when clicked. <strong>WebSharper</strong>'s HTML combinators are used to generate the markup.</div>"
                ["WEBSHARPER"; "HTML"]
                <| new Snippet1.Control()

//        let snippet2 =
//            snippet
//                2
//                "Drawing Text on an HTML5 Canvas"
//                "Drawing text on the HTML5 canvas with WebSharper."
//                "The HTML5 canvas supports drawing text on the fly via JavaScript. This snippets uses the \"FillText\" method to draw \"Hello Canvas\" filled with the default black color after setting the font-size to 40px. The \"StrokeText\" method would draw an outline with no fill."
//                ["HTML5"; "CANVAS"; "JAVASCRIPT"]
//                <| new Snippet2.Control()
//
//        let snippet3 =
//            snippet
//                3
//                "Debugging with the Console"
//                "Debugging code with the browser's JavaScript console."
//                "Modern browsers feature a JavaScript console that you can use to log almost anything which is very useful for debugging purposes. Open your browser's console to see how this sample logged the text \"Hello\"."
//                ["JAVASCRIPT"]
//                <| new Snippet3.Control()
//
//        let snippet4 =
//            snippet
//                4
//                "jQuery UI Button Widget"
//                "Simple jQuery UI button widget created with WebSharper."
//                "This snippet uses the WebSharper jQuery UI extension to create a simple button widget."
//                ["JQUERY"; "JQUERY UI"]
//                <| new Snippet4.Control()
//
//        let snippet5 =
//            snippet
//                5
//                "Hello Ext JS"
//                "Ext JS hello world example."
//                "This snippet is a small hello world build with Ext JS. The UI is composed of a panel within a viewport."
//                ["EXT JS"]
//                <| new Snippet5.Control()
//
//        let snippet6 =
//            snippet
//                6
//                "Drawing the HTML5 Logo in Canvas"
//                "HTML5 canvas example showing how to draw the HTML5 logo."
//                "This snippet uses the WebSharper bindings to the canvas element to draw the HTML5 logo."
//                ["HTML5"; "CANVAS"]
//                <| new Snippet6.Control()
//
//        let snippet7 =
//            snippet
//                7
//                "jQuery UI Modal Dialog"
//                "jQuery UI snippet showing how to display a simple modal dialog."
//                "The jQuery UI dialog widget displays HTML content in an interactive overlay. Setting the modal property to true results in a modal dialog that needs to be closed in order to resume regular interaction with the page."
//                ["JQUERY UI"; "JQUERY"]
//                <| new Snippet7.Control()
//
//        let snippet8 =
//            snippet
//                8
//                "Ext JS Window"
//                "Ext JS window container demo."
//                "This snippet creates a button that opens an Ext JS floating window when clicked. You can resize, drag and maximize the created window."
//                ["EXT JS"]
//                <| new Snippet8.Control()
//
//        let snippet9 =
//            snippet
//                9
//                "jQuery UI Autocomplete Widget"
//                "WebSharper snippet featuring a jQuery UI autocomplete widget."
//                "The jQuery UI autocomplete widget gives suggestions selected from a predefined list to the user as he types."
//                ["JQUERY"; "JQUERY UI"]
//                <| new Snippet9.Control()
//
//        let snippet10 =
//            snippet
//                10
//                "Drawing Filled Rectangles on HTML5 Canvas"
//                "HTML5 demo showing how to draw rectangles on the canvas."
//                "The HTML5 canvas element supports drawing filled rectangular shapes through the FillRect method. This WebSharper code sample draws a blue-filled rectangle."
//                ["HTML5"; "CANVAS"]
//                <| new Snippet10.Control()
//        
        [|
            snippet1
//            snippet2
//            snippet3
//            snippet4
//            snippet5
//            snippet6
//            snippet7
//            snippet8
//            snippet9
//            snippet10
        |]
        |> Array.iter (fun x ->
            hashset.Add x |> ignore
            x.Tags |> List.iter (fun y -> hashset'.Add y |> ignore))

//    module ExtSnippets =
//        let private extSnippet id control = { Id = id; Control = control }
//        
//        let extSnip1 = extSnippet 1 (new Snippet5.ExtControl())
//        let extSnip2 = extSnippet 2 (new Snippet8.ExtControl())
//        [|
//            extSnip1
//            extSnip2
//        |]
//        |> Array.iter (fun x -> hashset''.Add x |> ignore)