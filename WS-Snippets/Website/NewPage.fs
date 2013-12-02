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
            (Div [])

    let extjsContent control =
        ExtjsSkin.withTemplate <| Div [Style "overflow: hidden;"] -< [control]

    let cnts =
        [
            content <| new Snippet1.Control()
            content <| new Snippet2.Control()
            content <| new Snippet3.Control()
            content <| new Snippet4.Control()
            content <| new Snippet5.Control()
            content <| new Snippet6.Control()
            content <| new Snippet7.Control()
            content <| new Snippet8.Control()
            content <| new Snippet9.Control()
            content <| new Snippet10.Control()
            content <| new Snippet11.Control()
            content <| new Snippet12.Control()
            content <| new Snippet13.Control()
            content <| new Snippet14.Control()
            content <| new Snippet15.Control()
            content <| new Snippet16.Control()
            content <| new Snippet17.Control()
            content <| new Snippet18.Control()
            content <| new Snippet19.Control()
            content <| new Snippet20.Control()
            content <| new Snippet21.Control()
            content <| new Snippet22.Control()
            content <| new Snippet23.Control()
            content <| new Snippet24.Control()
            content <| new Snippet25.Control()
            content <| new Snippet26.Control()
            extjsContent <| new Snippet27.Control()
            content <| new Snippet28.Control()
            content <| new Snippet29.Control()
            content <| new Snippet30.Control()
            content <| new Snippet31.Control()
            content <| new Snippet32.Control()
        ]

    let sitelet x cnt = Sitelet.Content (string x) (Action.NewPage x) cnt

    let main =
        cnts
        |> List.mapi (fun i cnt -> sitelet (i + 1) cnt) 
        |> Sitelet.Sum
        |> Sitelet.Shift "newpage"