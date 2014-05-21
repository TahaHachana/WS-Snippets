module Sitelet.Google

open IntelliFactory.WebSharper
open IntelliFactory.WebSharper.Html
open IntelliFactory.WebSharper.Google.Maps
open IntelliFactory.WebSharper.Google.Visualization
open IntelliFactory.WebSharper.Google.Visualization.Base


module Snippet1 =

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

module Snippet2 =

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

module Snippet3 =

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
