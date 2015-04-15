module Sitelet.Geolocation

open WebSharper
open WebSharper.JavaScript
open WebSharper.Html.Client
open WebSharper.JavaScript.Geolocation

module Snippet1 =

    /// Client-side code.
    [<JavaScript>]
    module Client =

        /// Sets the text content of the element with the specified id.
        let setText id txt = JS.Document.GetElementById(id).TextContent <- txt

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
                JS.Window.Navigator.Geolocation.GetCurrentPosition display }

        let tr thTxt tdId = TR [TH [Text thTxt]; TD [Attr.Id tdId]]

        /// Tracks the position of the user and displays its properties in a table.
        let main() =
            Div [
                Tags.Style [Text "td {width: 200px;}"]
                Div [Attr.Class "table-responsive"] -< [
                    Table [Attr.Class "table table-bordered"; Attr.Id "geolocation-table"] -< [
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