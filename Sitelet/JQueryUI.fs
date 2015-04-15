module Sitelet.JQueryUI

open WebSharper
open WebSharper.JQueryUI
open WebSharper.Html.Client

module Snippet1 =

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
                tabs :> Pagelet
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

module Snippet2 =
            
    type Control() =
        inherit Web.Control()
 
        [<JavaScript>]
        override __.Body = JQueryUI.Datepicker.New() :> _
