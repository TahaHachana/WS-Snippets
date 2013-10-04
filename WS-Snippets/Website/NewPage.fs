namespace Website

module NewPage =

    open IntelliFactory.Html
    open IntelliFactory.WebSharper.Sitelets
    open Controls
    open Model
    open Skin
    open Content

    let content control = 
        withTemplate
            Templates.newPage
            ""
            ""
            (fun ctx -> Div [Style "overflow: hidden;"] -< [control])
//            (fun ctx ->  [Div [control]])
            (Div []) //Shared.footer

    let extjsContent control =
        ExtjsSkin.withTemplate <| Div [Style "overflow: hidden;"] -< [control]

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
    let snippet12 = content <| new Snippet12.Control()
    let snippet13 = content <| new Snippet13.Control()
    let snippet14 = content <| new Snippet14.Control()
    let snippet15 = content <| new Snippet15.Control()
    let snippet16 = content <| new Snippet16.Control()
    let snippet17 = content <| new Snippet17.Control()
    let snippet18 = content <| new Snippet18.Control()
    let snippet19 = content <| new Snippet19.Control()
    let snippet20 = content <| new Snippet20.Control()
    let snippet21 = content <| new Snippet21.Control()
    let snippet22 = content <| new Snippet22.Control()
    let snippet23 = content <| new Snippet23.Control()
    let snippet24 = content <| new Snippet24.Control()
    let snippet25 = content <| new Snippet25.Control()
    let snippet26 = content <| new Snippet26.Control()
    let snippet27 = extjsContent <| new Snippet27.Control()
    let snippet28 = content <| new Snippet28.Control()

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
            Sitelet.Content "9" (Action.NewPage 9) snippet9
            Sitelet.Content "10" (Action.NewPage 10) snippet10
            Sitelet.Content "11" (Action.NewPage 11) snippet11
            Sitelet.Content "12" (Action.NewPage 12) snippet12
            Sitelet.Content "13" (Action.NewPage 13) snippet13
            Sitelet.Content "14" (Action.NewPage 14) snippet14
            Sitelet.Content "15" (Action.NewPage 15) snippet15
            Sitelet.Content "16" (Action.NewPage 16) snippet16
            Sitelet.Content "17" (Action.NewPage 17) snippet17
            Sitelet.Content "18" (Action.NewPage 18) snippet18
            Sitelet.Content "19" (Action.NewPage 19) snippet19
            Sitelet.Content "20" (Action.NewPage 20) snippet20
            Sitelet.Content "21" (Action.NewPage 21) snippet21
            Sitelet.Content "22" (Action.NewPage 22) snippet22
            Sitelet.Content "23" (Action.NewPage 23) snippet23
            Sitelet.Content "24" (Action.NewPage 24) snippet24
            Sitelet.Content "25" (Action.NewPage 25) snippet25
            Sitelet.Content "26" (Action.NewPage 26) snippet26
            Sitelet.Content "27" (Action.NewPage 27) snippet27
            Sitelet.Content "28" (Action.NewPage 28) snippet28
        ]
        |> Sitelet.Sum
        |> Sitelet.Shift "newpage"




