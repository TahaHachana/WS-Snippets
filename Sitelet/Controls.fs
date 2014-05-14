﻿namespace Website

module Controls =
    open System
    open System.Globalization
    open System.Collections.Generic
    open System.Security.Cryptography
    open System.Text
    open IntelliFactory.WebSharper
//    open IntelliFactory.WebSharper.ExtJs
    open IntelliFactory.WebSharper.Dom
    open IntelliFactory.WebSharper.Html
    open IntelliFactory.WebSharper.Html5
    open IntelliFactory.WebSharper.Google.Maps
    open IntelliFactory.WebSharper.Google.Visualization
    open IntelliFactory.WebSharper.Google.Visualization.Base
//    open IntelliFactory.WebSharper.KendoUI
    open TweetSharp

    // Hello world snippet.
    module Snippet1 =

        /// Appends a heading containing a greeting to the DOM.
        type Control() =
            inherit Web.Control()

            [<JavaScript>]
            override __.Body = H2 [Text "Hello World!"] :> _
            
    // HTML5 logo on canvas snippet.
    module Snippet2 =
    
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

    module Snippet3 =

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

    module Snippet4 =

        module Culture =
            let culture = CultureInfo.CreateSpecificCulture "en-US"
            System.Threading.Thread.CurrentThread.CurrentCulture <- culture

        type Tweet =
            {
                Avatar     : string
                Date       : string
                Html       : string
                Id         : string
                Name       : string
                ScreenName : string
            }

            static member New avatar date html id name screenName =
                {
                    Avatar     = avatar
                    Date       = date
                    Html       = html
                    Id         = id
                    Name       = name
                    ScreenName = screenName
                }

        type SearchResult = Failure | Success of Tweet list

        /// Server-side code.
        module private Server =

            // Twitter authentication
            let ts = TwitterService(AppSettings.consumerKey, AppSettings.consumerSecret)
            ts.AuthenticateWith(AppSettings.token, AppSettings.tokenSecret)

            // search options
            let options = SearchOptions()
            options.Q <- "#fsharp"
            options.Count <- Nullable 100

            /// Returns the latest 100 "#fsharp" tweets.
            [<Rpc>]
            let fetchTweets() =
                async {
                    let searchResult =
                        try
                            ts.Search(options).Statuses
                            |> Seq.toList
                            |> List.map (fun status ->
                                Tweet.New
                                    status.Author.ProfileImageUrl
                                    (status.CreatedDate.ToLongDateString())
                                    status.TextAsHtml
                                    (status.Id.ToString())
                                    status.User.Name
                                    status.Author.ScreenName)
                            |> Success
                        with _ -> Failure
                    return searchResult }

        /// Client-side code.
        [<JavaScript>]
        module private Client =
            open IntelliFactory.WebSharper.JQuery

            /// Creates an <li> containing the details of a tweet (screen name, creation date...).
            let li tweet =
                let id = tweet.Id
                let name = tweet.Name
                let screenName = tweet.ScreenName
                let profileLink = "https://twitter.com/" + screenName
                let replyLink = "https://twitter.com/intent/tweet?in_reply_to=" + id
                let retweetLink = "https://twitter.com/intent/retweet?tweet_id="  + id
                let favoriteLink = "https://twitter.com/intent/favorite?tweet_id=" + id
                let p = P []
                p.Html <- tweet.Html
                LI [Attr.Class "list-group-item"] -< [
                    Div [
                        A [HRef profileLink; Attr.Class "profile-link"; Attr.Target "_blank"] -< [
                            Img [Src tweet.Avatar; Alt name; Attr.Class "avatar"]
                            Strong [Text name]
                        ] -< [Text <| " @" + screenName]
                        Br []
                        Default.Small [Text tweet.Date]
                        p
                        Div [Attr.Class "tweet-actions"] -< [
                            A [HRef replyLink; Attr.Class "tweet-action"; Attr.Style "margin-right: 5px;"] -< [Text "Reply"]
                            A [HRef retweetLink; Attr.Class "tweet-action"; Attr.Style "margin-right: 5px;"] -< [Text "Retweet"]
                            A [HRef favoriteLink; Attr.Class "tweet-action"] -< [Text "Favorite"]
                        ]
                    ]
                ]

            /// Toggles the visibility of the reply, retweet and favorite links.
            let toggleActionsVisibility() =
                let jquery = JQuery.Of ".list-group-item"
                jquery.Mouseenter(fun x _ -> JQuery.Of(".tweet-actions", x).Css("visibility", "visible").Ignore).Ignore
                jquery.Mouseleave(fun x _ -> JQuery.Of(".tweet-actions", x).Css("visibility", "hidden").Ignore).Ignore

            /// Opens the reply, retweet and favorite links in a modal dialog.
            let handleTweetActions() =
                let jquery = JQuery.Of "a.tweet-action"
                jquery.Click(fun elt event ->
                    event.PreventDefault()
                    let href = elt.GetAttribute "href"
                    Html5.Window.Self.ShowModalDialog href |> ignore).Ignore

            /// Appends a <div> containing a list of tweets to the DOM.
            let main() =
                Div [Attr.Id "tweets"]
                |>! OnAfterRender (fun elt ->
                    async {
                        let! searchResults = Server.fetchTweets()
                        match searchResults with
                            | Failure -> JavaScript.Alert "Failed to fetch the latest tweets."
                            | Success tweets ->
                                let ul = UL [Attr.Class "list-group"; Attr.Id "tweets-ul"]
                                tweets |> List.iter (fun tweet -> ul.Append (li tweet))
                                elt.Append ul
                                toggleActionsVisibility()
                                handleTweetActions() }
                    |> Async.Start)

        /// A control for serving the main pagelet.
        type Control() =
            inherit Web.Control()

            [<JavaScript>]
            override this.Body = Client.main() :> _

    module Snippet5 =

        /// Client-side code.
        [<JavaScript>]
        module private Client =

            /// Creates an input element.
            let inputElt _ =
                Input [
                    Attr.Class "form-control"
                    Attr.Type "text"
                    Attr.Value "Hello console!"
                    HTML5.Attr.AutoFocus "autofocus"
                ]

            /// Creates a button that logs the value
            /// of the specified element when clicked.
            let logBtn (elt:Element) =
                Button [
                    Attr.Class "btn btn-primary"
                    Attr.Type "button"
                ]
                -- Text "Log"
                |>! OnClick (fun _ _ -> JavaScript.Log elt.Value)
        
            let main() =
                let input = inputElt ()
                Div [Attr.Id "console-log"] -< [
                    Default.Legend [Text "Log messages to the console"]
                    FieldSet [Attr.Class "form-group"] -< [
                        Label [Text "Message"]
                        input
                    ]
                    logBtn input
                ]

        /// A control for serving the main pagelet.
        type Control() =
            inherit Web.Control()

            [<JavaScript>]
            override this.Body = Client.main() :> _

    module Snippet6 =

        /// Client-side code.
        [<JavaScript>]
        module Client =

            /// Sets the text content of the element with the specified id.
            let setText id txt = Document.Current.GetElementById(id).TextContent <- txt

            /// Performs conversion to string and replaces the JS null with NA.
            let toStr f = f.ToString() |> function "null" -> "NA" | x -> x

            /// Displays the properties of a position object.
            let display (p : Position) =
                let coords = p.Coords
                setText "longitude" <| coords.Longitude.ToString()
                setText "latitude"  <| coords.Latitude.ToString()
                setText "altitude"  <| toStr coords.Altitude
                setText "accuracy"  <| coords.Accuracy.ToString()
                setText "alt-acc"   <| toStr coords.AltitudeAccuracy
                setText "heading"   <| toStr coords.Heading
                setText "speed"     <| toStr coords.Speed
                setText "timestamp" <| p.Timestamp.ToString()

            // Calls the getCurrentPosition method asynchronously.
            let getPosition() =
                async {
                    Window.Self.Navigator.Geolocation.GetCurrentPosition display }

            let tr thTxt tdId = TR [TH [Text thTxt]; TD [Attr.Id tdId]]

            /// Tracks the position of the user and displays its properties in a table.
            let main() =
                Div [
                    Tags.Style [Text "td {width: 200px;}"]
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
                    ]
                    Button [Text "Track My Location"; Attr.Class "btn btn-primary"]
                    |>! OnClick (fun _ _ ->
                        async { do! getPosition() }
                        |> Async.Start)
                ]
    
        /// A control for serving the main pagelet.                
        type Control() =
            inherit Web.Control()
 
            [<JavaScript>]
            override __.Body = Client.main() :> _

    module Snippet7 =

        // Client-side code.
        [<JavaScript>]
        module Client =
        
            // Appends a video element to the DOM.
            let main() =
                let elt =
                    HTML5.Tags.Video [Attr.Height "360px"; Attr.Width "640px"] -< [
                        HTML5.Tags.Source [Attr.Src "/Videos/madagascar.mp4"; Attr.Type "video/mp4"]                    
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

    module Snippet8 =

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

    module Snippet9 =
    
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

    module Snippet10 =

        /// Client-side code.
        [<JavaScript>]
        module private Client =

            /// Computes the factorial of a number using recursion and pattern matching.
            let rec factRec n =
                match n with
                | _ when n < 2 -> 1
                | _ -> n * factRec (n - 1)

            /// Computes the factorial of a number using the fold function from the Array module.
            let factFold n = Array.fold (*) 1  [|1 .. n|]

            let main() =
                let input = Input [Attr.Type "text"; HTML5.Attr.AutoFocus "autofocus"; Attr.Class "form-control"; Attr.Id "factorial"]
                let recSpan = Span []
                let foldSpan = Span []
                let button =
                    Button [Text "Factorial"; Attr.Class "btn btn-primary"; Attr.Style "margin-left: 8px;"]
                    |>! OnClick (fun _ _ ->
                        let v = int input.Value
                        recSpan.Text <- "Recursion: " + string (factRec v)
                        foldSpan.Text <- "Array.fold: " + string (factFold v))
                Div [
                    Div [Attr.Class "form-inline"]
                        -< [input; button]
                    Div [Attr.Style "margin-top: 8px;"]
                        -< [recSpan; Br []; foldSpan]
                ]

        /// A control for serving the main pagelet.
        type Control() =
            inherit Web.Control()

            [<JavaScript>]
            override this.Body = Client.main() :> _

    module Snippet11 =

        /// Client-side code.
        [<JavaScript>]
        module Client =
            open IntelliFactory.WebSharper.Html

            let th txt = TH [Text txt]

            let tr level =
                let implementation = Dom.Document.Current.Implementation
                ["Core"; "CSS"; "Events"; "HTML"; "Selectors-API"]
                |> List.map (fun feature ->
                    let rslt = implementation.HasFeature(feature, level)
                    TD [Text <| string rslt])
                |> fun tds -> TR [th level] -< tds

            /// Displays DOM implementation information in a table.
            let main() =
                Table [Attr.Class "table table-bordered table-striped"; Attr.Style "width: 900px;"] -< [
                    TR [] -< List.map th ["Level"; "Core"; "CSS"; "Events"; "HTML"; "Selectors-API"]
                ] -< List.map tr ["1.0"; "2.0"; "3.0"]

        /// A control for serving the main pagelet.
        type Control() =
            inherit Web.Control()

            [<JavaScript>]
            override this.Body = Client.main() :> _

    // calculator
    module Snippet12 =
    
        /// Client-side code.
        [<JavaScript>]
        module private Client =

            /// Creates a button and adds a click event listener to it.
            let btn caption action =
                Button [Attr.Class "btn"; Attr.Style "margin: 3px; width: 45px;"; Text caption]
                |>! OnClick (fun e _ -> action())

            let main()  =
                /// Calculator state: old number, current one and arithmetic operation.
                let oldNum, num, op = ref 0, ref 0, ref None
            
                /// Calculator display screen.
                let display = Input [Attr.Type "text"; Attr.Value "0"; Attr.Class "form-control"; Attr.Id "display"]

                /// Updates the claculator display screen.
                let updateDisplay() = display.Value <- string !num

                /// Updates the current number register.
                let d n =
                    num := 10 * !num + n
                    updateDisplay()

                /// Clears the current number register.
                let c() =
                    num := 0
                    updateDisplay()

                /// Clears all registers.
                let ac() =
                    num := 0
                    oldNum := 0
                    op := None
                    updateDisplay()

                /// Negates the current number.
                let n() =
                    num := - !num
                    updateDisplay()

                /// Performs the operation currently in the op register.
                let e() =
                    match !op with
                    | None -> ()
                    | Some f ->
                        num := f !oldNum !num
                        op := None
                        updateDisplay()

                /// Pushes an arbitrary operation onto the op register.
                let o op' () =
                    match !op with
                    | None -> ()
                    | Some f ->
                        num := f !oldNum !num
                        updateDisplay()
                    oldNum := !num
                    num := 0
                    op := Some op'

                let digit n = btn (string n) (fun () -> d n)

                Div [
                    display
                    Br []
                    Div [
                        digit 7; digit 8; digit 9; btn "/" (o ( / ))
                        Br []
                        digit 4; digit 5; digit 6; btn "*" (o ( * ))
                        Br []
                        digit 1; digit 2; digit 3; btn "-" (o ( - ))
                        Br []
                        digit 0; btn "C" c; btn "AC" ac; btn "+" (o ( + ));
                        Br []
                        btn "+/-" n; btn "=" e
                    ]
                ]

        /// A control for serving the main pagelet.
        type Control() =
            inherit Web.Control()
            [<JavaScript>]
            override this.Body = Client.main() :> _

    module Snippet13 =

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

    module Snippet14 =

        /// Client-side code.
        [<JavaScript>]
        module Client =
            open IntelliFactory.WebSharper.JQuery

            let loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elit lacus, commodo non posuere sit amet, sodales in risus. Donec et sagittis nisl, at blandit nisl. Cras fermentum libero et erat tincidunt, vel euismod justo elementum. Quisque eget augue quis arcu dictum sagittis. Duis in arcu vulputate lorem sagittis facilisis. In non justo quis metus aliquet luctus a id justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce vitae augue sagittis, sodales diam id, blandit turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempor suscipit nibh vel mollis. Vestibulum eros lorem, pharetra quis varius in, lobortis at risus."
        
            /// Accordion group CSS rules.
            let style = "border: 1px solid; border-radius: 5px; margin-bottom: 10px; padding: 3px; width: 900px;"
            
            /// Creates an accordion group.
            let accordionGroup num =
                let accordionBody = Div [Attr.Style "display: none;"] -< [Div [Text loremIpsum]]
                let jq = JQuery.Of(accordionBody.Dom)
                Div [Attr.Style style] -< [
                    Div [
                        Div [Attr.Class "btn-link"; Attr.Style "font-weight: bold;"]
                        -< [Text <| "Collapsible Group " + string num]
                        // Toggle expanding and collapsing.
                        |>! OnClick (fun _ _ ->
                            match jq.Is ":visible" with
                            | false -> jq.SlideDown("fast", ignore).Ignore
                            | true -> jq.SlideUp("fast", ignore).Ignore)
                    ]
                    accordionBody
                ]

            let main() = Div [] -< List.map accordionGroup [1 .. 3]

        /// A control for serving the main pagelet.
        type Control() =
            inherit Web.Control()

            [<JavaScript>]
            override __.Body = Client.main() :> _

    module Snippet15 =

        /// Server-side code.
        module private Server =

            /// Computes the MD5 hash of a string.
            [<Rpc>]
            let md5 (data:string) =
                async {
                    use md5 = MD5.Create()
                    let sb = StringBuilder()
                    data.ToCharArray()
                    |> Encoding.Unicode.GetBytes
                    |> md5.ComputeHash
                    |> Array.iter (fun b -> sb.Append(b.ToString("X2")) |> ignore)
                    return sb.ToString()
                }

        /// Client-side code.
        [<JavaScript>]
        module private Client =

            let main() =
                let output = Div [Attr.Style "margin-top: 8px;"]
                let input = Input [Attr.Type "text"; HTML5.Attr.AutoFocus "autofocus"; Attr.Class "form-control"; Attr.Id "display"]
                Div [Attr.Class "form-inline"] -< [
                    input
                    Button [Text "MD5"; Attr.Class "btn btn-primary"; Attr.Style "margin-left: 8px;"]
                    // Click event listener to invoke the md5 server-side function asynchronously.
                    |>! OnClick (fun _ _ ->
                        async {
                            let! md5 = Server.md5 input.Value
                            output.Text <- md5
                        } |> Async.Start)                        
                    output]
    
        /// A control for serving the main pagelet.              
        type Control() =
            inherit Web.Control()

            [<JavaScript>]
            override __.Body = Client.main() :> _

    module Snippet16 =

        /// Client-side code.
        [<JavaScript>]
        module private Client =

            /// Sets the value of a google visualization DataTable cell.
            let setCell (dataTable:DataTable) row column value =
                dataTable.setCell(row, column, value)
                |> ignore


            let main() =
                // Line chart options with custom title.
                let options = LineChartOptions()
                options.title <- "Company Performance"

                // Chart data.
                let data =
                    let dataTable = DataTable()
                    dataTable.addColumn(ColumnType.StringType, "Year") |> ignore
                    dataTable.addColumn(ColumnType.NumberType, "Sales") |> ignore
                    dataTable.addColumn(ColumnType.NumberType, "Expenses") |> ignore
                    dataTable.addRows 4 |> ignore
                    setCell dataTable 0 0 "2004"
                    setCell dataTable 1 0 "2005"
                    setCell dataTable 2 0 "2006"
                    setCell dataTable 3 0 "2007"
                    setCell dataTable 0 1 1000
                    setCell dataTable 1 1 1170
                    setCell dataTable 2 1 660
                    setCell dataTable 3 1 1030
                    setCell dataTable 0 2 400
                    setCell dataTable 1 2 460
                    setCell dataTable 2 2 1120
                    setCell dataTable 3 2 540
                    dataTable

                Div [Attr.Style "width: 900px; height: 500px;"]
                |>! OnAfterRender (fun elt ->
                    let geoMap = LineChart elt.Dom
                    geoMap.draw(data, options))
    
        /// A control for serving the main pagelet.
        type Control() =
            inherit Web.Control()

            [<JavaScript>]
            override __.Body = Client.main() :> _

    module Snippet17 =

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

    module Snippet18 =

        [<JavaScript>]
        module private JS =

            let tab x =
                let xStr = string x
                "Header " + xStr, Div [Text <| "Tab " + xStr + " content"]

            /// Adds a new panel to a jQuery UI tabs widget.
            let addTabBtn (tabs:JQueryUI.Tabs) =
                Button [Attr.Class "btn btn-success"; Attr.Style "margin-right: 8px;"]
                -- Text "Add"
                |>! OnClick (fun _ _ ->
                    let label, elt = tab <| tabs.Length + 1
                    tabs.Add(elt, label))

            /// Removes the last panel from a jQuery UI tabs widget.
            let removeTabBtn (tabs:JQueryUI.Tabs) =
                Button [Attr.Class "btn btn-danger"]
                -- Text "Remove"
                |>! OnClick (fun _ _ -> try tabs.Remove(tabs.Length - 1) with _ -> ())

            let main() =
                let tabs =
                    List.map tab [1 .. 3]
                    |> JQueryUI.Tabs.New
                Div [
                    tabs :> IPagelet
                    Div [Attr.Style "margin-top: 8px;"] -< [
                        addTabBtn tabs
                        removeTabBtn tabs
                    ] :> _
                ]

        /// A control for serving the main pagelet.
        type Control() =
            inherit Web.Control()

            [<JavaScript>]
            override __.Body = JS.main() :> _

    module Snippet19 =

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

    module Snippet20 =

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

    module Snippet21 =

        [<JavaScript>]
        module JS =
            /// Creates a draggable <img> element.
            let img x =
                Img [
                    Attr.Class "cat-img"
                    Attr.Id <| "cat-" + x
                    Attr.Src <| "/Images/cat" + x + ".jpg"
                    HTML5.Attr.Draggable "true"
                ]
        
            /// Wraps an <img> element inside a div.
            let imgDiv img =
                Div [Attr.Class "col-lg-3 cat-img-div"; Attr.Style "width: auto;"]
                -< [img]

            /// Assigns the id of a dragged element to the specified reference cell.
            let handleDragStart idRef (elt:Element) =
                elt.Dom.AddEventListener(
                    "dragstart",
                    (fun () -> idRef := elt.Id),
                    false)

            /// Handle dragging events.
            let handleDragging (elt:Element) idRef =
                let dom = elt.Dom
                dom.AddEventListener(
                    "dragenter",
                    (fun (e : Dom.Event) ->
                        e.PreventDefault()
                        elt.SetCss("background-color", "lightgray")
                        elt.SetCss("border", "dotted")),
                    false)
                dom.AddEventListener(
                    "dragleave",
                    (fun (e : Dom.Event) ->
                        e.PreventDefault()
                        elt.SetCss("background-color", "white")
                        elt.SetCss("border", "solid")),
                    false)
                dom.AddEventListener(
                    "dragover",
                    (fun (e : Dom.Event) -> e.PreventDefault()),
                    false)
                dom.AddEventListener(
                    "drop",
                    (fun (e : Dom.Event) ->
                        e.PreventDefault()
                        let nodeClone = ById(!idRef).CloneNode(false)
                        elt.Html <- ""
                        elt.Append nodeClone
                        elt.SetCss("background-color", "white")
                        elt.SetCss("border", "black solid")),
                    false)

            let main() =
                let idRef, img1, img2, img3 = ref "", img "1", img "2", img "3"
                let src =
                    Div [Attr.Class "row"; Attr.Id "src"] -< [
                        imgDiv img1
                        imgDiv img2
                        imgDiv img3
                    ]
                let target =
                    Div [Attr.Id "target"] -< [
                        P [Attr.Class "text-center"; Attr.Id "target-text"]
                        -- Text "Drop image here"
                    ]
                List.iter (handleDragStart idRef) [img1; img2; img3]
                handleDragging target idRef
                Div [src; target]

        /// A control for serving the main pagelet.
        type Control() =
            inherit Web.Control()

            [<JavaScript>]
            override __.Body = JS.main() :> _

    module Snippet22 =

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

    module Snippet23 =
            
        type Control() =
            inherit Web.Control()
 
            [<JavaScript>]
            override __.Body = JQueryUI.Datepicker.New() :> _

    module Snippet24 =

        type Control() =
            inherit Web.Control()

            [<JavaScript>]
            override __.Body =
                Button [Attr.Class "btn btn-primary btn-lg"]
                -- Text "Click me"
                |>! OnClick (fun _ _ -> Window.Self.Alert "This is an alert dialog.")
                :> _

    module Snippet25 =

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

    module Snippet26 =

        type Control() =
            inherit Web.Control()

            [<JavaScript>]
            override __.Body =
                let elt = HTML5.Tags.Audio []
                let audio = As<HTMLAudioElement> elt.Dom
                audio.Src <- "/AlFatiha.mp3"
                audio.Controls <- true
                elt :> _

//    module Snippet27 =
//        [<JavaScript>]
//        let main() =
//            let pConfig = Ext.panel.PanelConfiguration()
//            let vConfig = Ext.container.ViewportConfiguration()
//            pConfig.Title <- "Ext JS Panel"
//            pConfig.Html <- "Hello, world!"
//            vConfig.Layout <- "fit"
//            vConfig.Items <- [|pConfig|]
//            Ext.container.Viewport vConfig
//            |> ignore
//
//        /// A control for serving the main pagelet.
//        type Control() =
//            inherit Web.Control()
//
//            [<JavaScript>]
//            override __.Body =
//                Div []
//                |>! OnAfterRender (fun _ -> Ext.OnReady(fun _ -> main()))
//                :> _

    module Snippet28 =

        [<JavaScript>]
        module Client =
            let dataTable data =
                let dataTable = DataTable()
                dataTable.addColumn(ColumnType.StringType, "Resource") |> ignore
                dataTable.addColumn(ColumnType.NumberType, "Size") |> ignore
                dataTable.addRows 5 |> ignore
                List.iteri
                    (fun idx (x, y) ->
                        dataTable.setCell(idx, 0, x)
                        dataTable.setCell(idx, 1, y))
                    data
                dataTable
        
            let pie data dom =
                let dt = dataTable data
                let options = PieChartOptions()
                options.title <- "Resources Breakdown"
                let pie = PieChart dom
                pie.draw(dt, options)

            let data =
                [
                    "CSS"       , 5421.54
                    "HTML"      , 15632.47
                    "Images"    , 12478.98
                    "JavaScript", 42568.47
                    "Other"     , 3456.29
                ]

            let main() =
                Div [Attr.Style "width: 900px; height: 500px;"]
                |>! OnAfterRender (fun elt -> pie data elt.Dom)

        /// A control for serving the main pagelet.              
        type Control() =
            inherit Web.Control()

            [<JavaScript>]
            override __.Body = Client.main() :> _

    module Snippet29 =

        [<JavaScript>]
        let map() =
            Div [Attr.Id "map"]
            |>! OnAfterRender (fun elt ->
                let center = LatLng(21.427378, 39.814838)
                let options = MapOptions(center, 4)
                Google.Maps.Map(elt.Dom, options)
                |> ignore)

        type Control() =
            inherit Web.Control()

            [<JavaScript>]
            override __.Body = map() :> _

//    module Snippet30 =
//
//        type Control() =
//            inherit Web.Control()
//
//            [<JavaScript>]
//            override __.Body =
//                Div []
//                |>! OnAfterRender (fun elt ->
//                    kendo.ui.Calendar(elt.Body)
//                    |> ignore)
//                :> _

    module Snippet31 =

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

    module Snippet32 =

        [<JavaScript>]
        module JS =

            /// Schedules the dispaly of an alert box after 3 seconds.
            let timerHandle (btn:Element) =
                JavaScript.SetTimeout
                    (fun () ->
                        btn.Remove()
                        ById("set-btn").RemoveAttribute "disabled"
                        JavaScript.Alert "Timeout Expired")
                    3000

            let clearBtn() =
                Button [
                    Attr.Class "btn btn-lg btn-warning"
                    Attr.Id "clear-btn"
                    Attr.Type "button"
                ] -- Text "Clear Timeout"
                    
            let clearTimeout (btn:Element) handle =                    
                btn
                |>! OnClick (fun elt _ ->
                    // Remove the clear timeout button.
                    elt.Remove()
                    // Clear alert box timeout.
                    JavaScript.ClearTimeout handle
                    ById("set-btn").RemoveAttribute "disabled")
                |> ignore

            let main() =
                let btnsDiv = Div []

                let setBtn =
                    Button [
                        Attr.Class "btn btn-lg btn-primary"
                        Attr.Id "set-btn"
                        Attr.Type "button"
                    ] -- Text "Set Timeout"
                    |>! OnClick (fun elt _ ->
                        elt.SetAttribute("disabled", "disabled")
                        let btn = clearBtn()
                        let handle = timerHandle btn
                        clearTimeout btn handle
                        // Append the clear timeout button.
                        btnsDiv.Append btn)

                btnsDiv -- setBtn

        type Control() =
            inherit Web.Control()

            [<JavaScript>]
            override __.Body = JS.main() :> _