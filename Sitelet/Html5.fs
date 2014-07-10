module Sitelet.Html5

open IntelliFactory.WebSharper
open IntelliFactory.WebSharper.EcmaScript
open IntelliFactory.WebSharper.Html
open IntelliFactory.WebSharper.Html5

// HTML5 logo on canvas.
module Snippet1 =
    
    /// Client-side code.    
    [<JavaScript>]
    module private Client =

        /// Draws a shape formed by sub-paths that join a list of coordinates.
        let drawShape (ctx : CanvasRenderingContext2D) style moveTo coords =
            ctx.FillStyle <- style
            ctx.BeginPath()
            ctx.MoveTo moveTo
            List.iter (fun (x, y) -> ctx.LineTo(x, y)) coords
            ctx.ClosePath()
            ctx.Fill()

        /// Draws the shapes that form the HTML5 logo.
        let drawLogo (ctx : CanvasRenderingContext2D) =
            // HTML
            ctx.Font <- "60px 'Gill Sans Ultra Bold'"
            ctx.FillText("HTML", 40., 60.)
            // move down
            ctx.Translate(0., 70.)
            // background
            drawShape ctx "#E34C26" (44., 255.) [(22.0, 5.0); (267.0, 5.0); (244.0, 255.0); (144.0, 283.0)]
            // shield-shaped right part
            drawShape ctx "#F06529" (144., 262.) [(225.0, 239.0); (244.0, 25.0); (144.0, 25.0)]
            // 5
            drawShape ctx "#EBEBEB" (144., 118.) [(103.0, 118.0); (101.0, 87.0); (144.0, 87.0); (144.0, 56.0); (67.0, 56.0); (75.0, 149.0); (144.0, 149.0)]
            drawShape ctx "#EBEBEB" (144., 198.) [(110.0, 189.0); (108.0, 164.0); (77.0, 164.0); (81.0, 212.0); (144.0, 230.0)]
            drawShape ctx "#FFFFFF" (144., 118.) [(144.0, 149.0); (182.0, 149.0); (178.0, 189.0); (144.0, 198.0); (144.0, 230.0); (207.0, 212.0); (215.0, 118.0)]
            drawShape ctx "#FFFFFF" (144., 56.) [(144.0, 87.0); (218.0, 87.0); (221.0, 56.0)]

        /// Draws the HTML5 logo on canvas.
        let main() =
            let elt = HTML5.Tags.Canvas []
            let canvas  = As<CanvasElement> elt.Dom
            canvas.Height <- 400
            canvas.Width <- 600
            let ctx = canvas.GetContext "2d"
            drawLogo ctx
            elt

    /// A control for serving the main pagelet.
    type Control() =
        inherit Web.Control()

        [<JavaScript>]
        override __.Body = Client.main() :> _

module Snippet2 =

    /// Client-side code.
    [<JavaScript>]
    module Client =

        /// Creates a <tr> element containing two <td> tags.
        let tr td td' =
            TR [
                TD [Text td]
                TD [Text td']
            ]

        /// Displays the properties of the location object in a table.
        let main() =
            let location = Window.Self.Location
            Div [Attr.Class "table-responsive"] -< [
                Default.Table [Attr.Class "table table-striped"; Attr.Id "location-table"] -< [
                    // table headers
                    TR [TH [Text "Property"] ; TH [Text "Value"]]
                    // table row for each property
                    tr "Hash"     location.Hash
                    tr "Host"     location.Host
                    tr "Hostname" location.Hostname
                    tr "Href"     location.Href
                    tr "Pathname" location.Pathname
                    tr "Port"     location.Port
                    tr "Protocol" location.Protocol
                    tr "Search"   location.Search
                ]
            ]

    /// A control for serving the main pagelet.
    type Control() =
        inherit Web.Control()

        [<JavaScript>]
        override __.Body = Client.main() :> _

module Snippet3 =

    // Client-side code.
    [<JavaScript>]
    module Client =
        
        // Appends a video element to the DOM.
        let main() =
            let elt =
                HTML5.Tags.Video [
                    Attr.Height "360px"
                    Attr.Width "640px"
                ] -< [
                    HTML5.Tags.Source [
                        Attr.Src "/Videos/madagascar.mp4"
                        Attr.Type "video/mp4"
                    ]                    
                ]
            let video = As<HTMLVideoElement> elt.Dom
            video.Autoplay <- false
            video.Controls <- true
            video.Preload <- "metadata"
            video.Poster <- "/Images/madagascar.jpg"
            elt

    // A control for serving the main pagelet.
    type Control() =
        inherit Web.Control()

        [<JavaScript>]
        override __.Body = Client.main() :> _

module Snippet4 =

    /// Client-side code.
    [<JavaScript>]
    module Client =

        /// Appends a <p> element containing the specified text to the DOM.
        let log text color =
            P [Text text; Attr.Style <| "color: " + color]
            |> (fun p -> ById("ws-log").AppendChild p.Dom)
            |> ignore

        /// Appends a button to the element with the specified id.
        let append id (btn : Element) =
            ById(id).AppendChild(btn.Dom)
            |> ignore

        /// Handles WebSocket events.
        let handleEvents (ws : WebSocket) disconnectBtn sendBtn =
            ws.Onerror <- (fun () -> log "Error" "red")
            ws.Onmessage <- (fun msg -> log ("Received: " + msg.Data.ToString()) "blue")
            ws.Onopen <- (fun () ->
                append "send-btn" sendBtn
                append "btns" disconnectBtn
                log "Connected" "green")
            ws.Onclose <- (fun () ->
                ById("connect-btn").RemoveAttribute "disabled"
                sendBtn.Remove()
                disconnectBtn.Remove()
                log "Disconnected" "rgb(250, 167, 50)")

        /// Creates a WebSocket connection and triggers its event handling.
        let connect (msgText : Element) =
            ById("connect-btn").SetAttribute("disabled", "disabled")
            let ws = WebSocket "ws://echo.websocket.org"
            let sendBtn =
                Button [Text "Send"; Attr.Class "btn btn-primary"]
                |>! OnClick (fun _ _ ->
                    let txt = msgText.Value
                    ws.Send txt
                    log ("Sent: " + txt) "black")
            let disconnectBtn =
                Button [Text "Disconnect"; Attr.Class "btn btn-warning"]
                |>! OnClick (fun _ _ -> ws.Close())
            handleEvents ws disconnectBtn sendBtn

        let main() =
            let msgText = TextArea [Text "Hello WebSocket"; Attr.Id "msg"; Attr.Class "form-control"]
            let logDiv = Div [Attr.Id "ws-log"]
            Div [Attr.Class "row"] -< [
                Div [Attr.Class "col-lg-4"; Attr.Id "ws-col-1"] -< [
                    Div [Attr.Style "margin-bottom: 10px;"; Attr.Id "btns"] -< [
                        Button [Text "Connect"; Attr.Id "connect-btn"; Attr.Class "btn btn-success"; Attr.Style "margin-right: 10px;"]
                        |>! OnClick (fun _ _ -> connect msgText)
                    ]
                    Div [Attr.Class "form-group"] -< [
                        Label [Text "Message:"; Attr.Style "font-weight: bold;"]
                        msgText
                    ]
                    Div [Attr.Id "send-btn"]
                ]
                Div [Attr.Class "col-lg-5"; Attr.Style "border-left: 1px solid lightgray;"; Attr.Id "ws-col-1"] -< [
                    Div [Attr.Style "margin-left: 20px;"] -< [
                        Label [Text "Log:"; Attr.Style "font-weight: bold;"]
                        logDiv
                        Button [Text "Clear"; Attr.Style "margin-top: 10px;"; Attr.Class "btn btn-default"]
                        |>! OnClick (fun _ _ -> logDiv.Html <- "")
                    ]
                ]
            ]

    /// A control for serving the main pagelet.
    type Control() =
        inherit Web.Control()

        [<JavaScript>]
        override __.Body = Client.main() :> _

module Snippet5 =
    
    /// Client-side code.
    [<JavaScript>]
    module private Client =
        open IntelliFactory.WebSharper.Html
        open IntelliFactory.WebSharper.Html5

        /// A button that displays a modal dialog when clicked.
        let main() =
            Button [Text "Show Modal Dialog"; Attr.Class "btn btn-primary"]
            |>! OnClick (fun _ _ ->
                Window.Self.ShowModalDialog "/modal.html"
                |> ignore)

    /// A control for serving the main pagelet.
    type Control() =
        inherit Web.Control()

        [<JavaScript>]
        override __.Body = Client.main() :> _

module Snippet6 =

    /// Client-side code.
    [<JavaScript>]
    module private Client =

        /// Creates a canvas and draws the text "Hello Canvas" on it.
        let main() =
            let elt = HTML5.Tags.Canvas [Text "The canvas element isn't supported by your browser."]
            elt.SetStyle "border: 1px solid;"
            let canvas  = As<CanvasElement> elt.Dom
            canvas.Height <- 400
            canvas.Width <- 600
            let ctx = canvas.GetContext "2d"
            ctx.Font <- "50px Arial"
            ctx.FillText("Hello Canvas", 20., 50.)
            elt

    /// A control for serving the main pagelet.
    type Control() =
        inherit Web.Control()

        [<JavaScript>]
        override this.Body = Client.main() :> _

module Snippet7 =

    /// Client-side code.
    [<JavaScript>]
    module Client =

        /// Draws the clock's shapes.
        let draw (ctx: CanvasRenderingContext2D) =
            let now = new EcmaScript.Date()
            ctx.Save()
            ctx.ClearRect(0., 0., 150., 150.)
            ctx.Translate(75., 75.)
            ctx.Scale(0.4, 0.4)
            ctx.Rotate(- Math.PI / 2.)
            ctx.StrokeStyle <- "black"
            ctx.FillStyle <- "white"
            ctx.LineWidth <- 8.
            ctx.Save()

            // Hour marks
            for i in 1..12 do
                ctx.BeginPath()
                ctx.Rotate(Math.PI / 6.)
                ctx.MoveTo(100., 0.)
                ctx.LineTo(120., 0.)
                ctx.Stroke()
            ctx.Restore()

            // Minute marks
            ctx.Save()
            ctx.LineWidth <- 5.
            for i in 0 .. 59 do
                if (i % 5) <> 0 then
                    ctx.BeginPath()
                    ctx.MoveTo(117., 0.)
                    ctx.LineTo(120., 0.)
                    ctx.Stroke()
                ctx.Rotate(Math.PI / 30.)
            ctx.Restore()

            let sec = now.GetSeconds()
            let min = now.GetMinutes()
            let hr  =
                let hr = float (now.GetHours())
                if hr >= 12. then hr - 12. else hr
            
            ctx.FillStyle <- "black"

            // Hours hand
            ctx.Save()
            Math.PI * (float hr / 6. + float min / 360. + float sec / 21600.)
            |> ctx.Rotate
            ctx.LineWidth <- 14.
            ctx.BeginPath()
            ctx.MoveTo(-20., 0.)
            ctx.LineTo(80., 0.)
            ctx.Stroke()
            ctx.Restore()

            // Minutes hand
            ctx.Save()
            ctx.Rotate(Math.PI * (float min / 30. + float sec / 1800.))
            ctx.LineWidth <- 10.
            ctx.BeginPath()
            ctx.MoveTo(-28., 0.)
            ctx.LineTo(112., 0.)
            ctx.Stroke()
            ctx.Restore()

            // Seconds hand
            ctx.Save()
            ctx.Rotate(float sec * Math.PI / 30.)
            ctx.StrokeStyle <- "#D40000"
            ctx.FillStyle <- "#D40000"
            ctx.LineWidth <- 6.
            ctx.BeginPath()
            ctx.MoveTo (-30., 0.)
            ctx.LineTo (83., 0.)
            ctx.Stroke()
            ctx.BeginPath()
            ctx.Arc(0., 0., 10., 0., Math.PI * 2., true)
            ctx.Fill()
            ctx.BeginPath()
            ctx.Arc(95., 0., 10., 0., Math.PI * 2., true)
            ctx.Stroke()
            ctx.FillStyle <- "#555"
            ctx.Arc(0., 0., 3., 0., Math.PI * 2., true)
            ctx.Fill()
            ctx.Restore()
            ctx.BeginPath()
            ctx.LineWidth <- 14.
            ctx.StrokeStyle <- "#325FA2"
            ctx.Arc(0., 0., 142., 0., Math.PI * 2., true)
            ctx.Stroke()
            ctx.Restore()

        /// Calls the draw function every 1000 milliseconds.
        let rec loop ctx =
            async {
                do! Async.Sleep 1000
                do draw ctx
                do! loop ctx
            }

        /// Draws a clock on a <canvas> and starts the updates loop.
        let main() =
            let elt = HTML5.Tags.Canvas [Attr.Id "clock"]
            let canvas  = As<CanvasElement> elt.Dom
            canvas.Width <- 150
            canvas.Height <- 150
            let ctx = canvas.GetContext "2d"
            draw ctx
            Async.Start(loop ctx)
            elt

    /// A control for serving the main pagelet.
    type Control() =
        inherit Web.Control()

        [<JavaScript>]
        override __.Body = Client.main() :> _

module Snippet8 =

    /// Displays a button that redirects to the home page when clicked.
    [<JavaScript>]
    let main() =
        Button [Attr.Class "btn btn-primary btn-large"]
        -- Text "Home Page"
        |>! OnClick (fun _ _ -> Window.Self.Parent.Location.Assign "/")

    /// A control for serving the main pagelet.
    type Control() =
        inherit Web.Control()

        [<JavaScript>]
        override __.Body = main() :> _

module Snippet9 =

    /// Draws a blue filled rectangle on a canvas element.
    [<JavaScript>]
    let private main() =
        let elt = HTML5.Tags.Canvas [Text "The canvas element isn't supported by your browser."]
        elt.SetStyle "border: 1px solid;"
        let canvas  = As<CanvasElement> elt.Dom
        canvas.Height <- 400
        canvas.Width <- 600
        let ctx = canvas.GetContext "2d"
        ctx.FillStyle <- "blue"
        ctx.FillRect(50., 50., 300., 100.)
        elt

    /// A control for serving the main pagelet.
    type Control() =
        inherit Web.Control()

        [<JavaScript>]
        override __.Body = main() :> _

module Snippet10 =

    [<JavaScript>]
    module JS =

        /// Performs conversion to string and replaces the JS null with NA.
        let toStr x =
            x.ToString()
            |> function
                | "null" -> "NA"
                | str    -> str

        /// Sets the text of the element with the specified id.
        let setText id property =
            let propertyStr = toStr property
            ById(id).TextContent <- propertyStr

        /// Displays the properties of a position object.
        let displayPosition (p : Position) =
            let coords = p.Coords
            setText "longitude" coords.Longitude
            setText "latitude"  coords.Latitude
            setText "altitude"  coords.Altitude
            setText "accuracy"  coords.Accuracy
            setText "alt-acc"   coords.AltitudeAccuracy
            setText "heading"   coords.Heading
            setText "speed"     coords.Speed
            setText "timestamp" p.Timestamp

        let tr thTxt tdId =
            TR [
                TH [Text thTxt]
                TD [Attr.Id tdId; Attr.Style "width: 250px;"]
            ]

        /// Tracks the position of the user and displays its properties in a table.
        let main() =
            // Geolocation options
            let options =
                Html5.PositionOptions(
                    EnableHighAccuracy = true,
                    MaximumAge = 60000,
                    Timeout = 10000)

            /// Calls the getCurrentPosition method asynchronously.
            let trackPosition() =
                async {
                    Window.Self.Navigator.Geolocation.GetCurrentPosition(
                        displayPosition,
                        (fun _ -> ()),
                        options)
                }

            Div [Attr.Class "table-responsive"] -< [
                Default.Table [Attr.Class "table table-bordered"; Attr.Id "geolocation-table"] -< [
                    tr "Longitude"         "longitude"
                    tr "Latitude"          "latitude"
                    tr "Altitude"          "altitude"
                    tr "Accuracy"          "accuracy"
                    tr "Altitude Accuracy" "alt-acc"
                    tr "Heading"           "heading"
                    tr "Speed"             "speed"
                    tr "Time Stamp"        "timestamp"
                ]
                Button [Attr.Class "btn btn-primary btn-large"]
                -- Text "Track My Location"
                |>! OnClick (fun _ _ ->
                    async { do! trackPosition() }
                    |> Async.Start)
            ]
    
    /// A control for serving the main pagelet.                
    type Control() =
        inherit Web.Control()
 
        [<JavaScript>]
        override __.Body = JS.main() :> _

module Snippet11 =

    type Control() =
        inherit Web.Control()

        [<JavaScript>]
        override __.Body =
            Button [Attr.Class "btn btn-primary btn-lg"]
            -- Text "Click me"
            |>! OnClick (fun _ _ -> Window.Self.Alert "This is an alert dialog.")
            :> _

module Snippet12 =

    [<JavaScript>]
    module private Client =
        /// Draws a line between two points using the specified cap style.
        let lineTo (ctx:CanvasRenderingContext2D) lineCap coords coords' =
            ctx.LineCap <- lineCap
            ctx.BeginPath()
            ctx.MoveTo coords
            ctx.LineTo coords'
            ctx.Stroke()
            
        let main() =
            let elt = HTML5.Tags.Canvas []
            let canvas = As<CanvasElement> elt.Dom
            canvas.Height <- 400
            canvas.Width <- 600
            let ctx = canvas.GetContext "2d"
            ctx.LineWidth <- 40.
            // butt
            lineTo ctx LineCap.Butt (50., 50.) (50., 350.)
            // round
            lineTo ctx LineCap.Round (250., 50.) (250., 350.)
            // square
            lineTo ctx LineCap.Square (450., 50.) (450., 350.)
            elt

    /// A control for serving the main pagelet.              
    type Control() =
        inherit Web.Control()

        [<JavaScript>]
        override __.Body = Client.main() :> _

module Snippet13 =

    type Control() =
        inherit Web.Control()

        [<JavaScript>]
        override __.Body =
            let elt = HTML5.Tags.Audio []
            let audio = As<HTMLAudioElement> elt.Dom
            audio.Src <- "/AlFatiha.mp3"
            audio.Controls <- true
            elt :> _

module Snippet14 =

    [<JavaScript>]
    let btn txt =
        Button [
            Attr.Class "btn btn-default"
            Attr.Type "button"
        ]
        -- Text txt

    [<JavaScript>]
    let main() =
        Div [Attr.Class "btn-group btn-group-lg"] -< [
            btn "Back"
            |>! OnClick (fun _ _ -> Window.Self.History.Back())
            btn "Forward"
            |>! OnClick (fun _ _ -> Window.Self.History.Forward())
            btn "Go back 2 pages"
            |>! OnClick (fun _ _ -> Window.Self.History.Go -2)
        ]

    type Control() =
        inherit Web.Control()

        [<JavaScript>]
        override __.Body = main() :> _
