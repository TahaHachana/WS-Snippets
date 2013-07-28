namespace Website

module NewPage =

    open IntelliFactory.Html
    open IntelliFactory.WebSharper.Sitelets
    open Controls
    open Model

    let content control = 
        Views.withMainTemplate "" "" <| fun ctx ->
            [
//                Div [Class "container"; Style "width: 1000px; overflow: hidden;"] -< [control]
                Div [Style "overflow: hidden;"] -< [control]

            ]

    let snippet1 = content <| new Snippet1.Control()
    let snippet2 = content <| new Snippet2.Control()
    let snippet3 = content <| new Snippet3.Control()
    let snippet4 = content <| new Snippet4.Control()
    let snippet5 = content <| new Snippet5.Control()
    let snippet6 = content <| new Snippet6.Control()
    let snippet7 = content <| new Snippet7.Control()
    let snippet8 = content <| new Snippet8.Control()
    let snippet9 = content <| new Snippet9.Control()
    let snippet10 = content <| new Snippet10.Control()
    let snippet11 = content <| new Snippet11.Control()

    let main =
        [
            Sitelet.Content "1" (Action.NewPage 1) snippet1
            Sitelet.Content "2" (Action.NewPage 2) snippet2
            Sitelet.Content "3" (Action.NewPage 3) snippet3
            Sitelet.Content "4" (Action.NewPage 4) snippet4
            Sitelet.Content "5" (Action.NewPage 5) snippet5
            Sitelet.Content "6" (Action.NewPage 6) snippet6
            Sitelet.Content "7" (Action.NewPage 7) snippet7
            Sitelet.Content "8" (Action.NewPage 8) snippet8
            Sitelet.Content "9" (Action.NewPage 9)snippet9
            Sitelet.Content "10" (Action.NewPage 10) snippet10
            Sitelet.Content "11" (Action.NewPage 11) snippet11
        ]
        |> Sitelet.Sum
        |> Sitelet.Shift "newpage"


