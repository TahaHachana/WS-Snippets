namespace Website

module NewPage =

    open IntelliFactory.Html
    open IntelliFactory.WebSharper.Sitelets
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

//    let extjsContent control =
//        ExtjsSkin.withTemplate <| Div [Style "overflow: hidden;"] -< [control]

    let cnts =
        [
            content <| new Js.Snippet1.Control()
            content <| new Html5.Snippet1.Control()
            content <| new Html5.Snippet2.Control()
            content <| new Twitter.Snippet1.Control()
            content <| new Js.Snippet2.Control()
            content <| new Geolocation.Snippet1.Control()
            content <| new Html5.Snippet3.Control()
            content <| new Html5.Snippet4.Control()
            content <| new Html5.Snippet5.Control()
            content <| new Js.Snippet3.Control()
            content <| new Js.Snippet4.Control()
            content <| new Js.Snippet5.Control()
            content <| new Html5.Snippet6.Control()
            content <| new Js.Snippet6.Control()
            content <| new Js.Snippet7.Control()
            content <| new Google.Snippet1.Control()
            content <| new Html5.Snippet7.Control()
            content <| new JQueryUI.Snippet1.Control()
            content <| new Html5.Snippet8.Control()
            content <| new Html5.Snippet9.Control()
            content <| new Js.Snippet8.Control()
            content <| new Html5.Snippet10.Control()
            content <| new JQueryUI.Snippet2.Control()
            content <| new Html5.Snippet11.Control()
            content <| new Html5.Snippet12.Control()
            content <| new Html5.Snippet13.Control()
//            extjsContent <| new Snippet27.Control()
            content <| new Google.Snippet2.Control()
            content <| new Google.Snippet3.Control()
//            content <| new Snippet30.Control()
            content <| new Html5.Snippet14.Control()
            content <| new Js.Snippet9.Control()
        ]

    let sitelet x cnt = Sitelet.Content (string x) (Action.NewPage x) cnt

    let main =
        cnts
        |> List.mapi (fun i cnt ->
            match i with
            | _ when i <= 26 -> sitelet (i + 1) cnt
            | _ when i <= 29 -> sitelet (i + 2) cnt
            | _ -> sitelet (i + 3) cnt
        ) 
        |> Sitelet.Sum
        |> Sitelet.Shift "newpage"