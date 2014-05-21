module Sitelet.Js

open IntelliFactory.WebSharper
open IntelliFactory.WebSharper.Html
open System.Text
open System.Security.Cryptography

// Hello world snippet.
module Snippet1 =

    /// Appends a heading containing a greeting to the DOM.
    type Control() =
        inherit Web.Control()

        [<JavaScript>]
        override __.Body = H2 [Text "Hello World!"] :> _

module Snippet2 =

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

module Snippet3 =

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

module Snippet4 =

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
module Snippet5 =
    
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

module Snippet6 =

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


module Snippet7 =

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

module Snippet8 =

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

module Snippet9 =

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