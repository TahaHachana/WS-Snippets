namespace Website

module Controls =
    open System.Collections.Generic
    open IntelliFactory.WebSharper
    open IntelliFactory.WebSharper.Html
    open IntelliFactory.WebSharper.JQueryUI

    type Snippet =
        {
            Id       : int
            Title    : string
            MetaDesc : string
            Description : string
            Tags     : string list
            Control  : Web.Control
        }

    let hashset = HashSet<Snippet>()
    let hashset' = HashSet<string>()

    module Snippet1 =
        [<JavaScript>]
        let private main() = Div [Text "Snippet"]

        type Control() =
            inherit Web.Control()

            [<JavaScript>]
            override __.Body = main() :> _

    module Snippet2 =
        [<JavaScript>]
        let main() =
            let style = 
                "width: 150px; font-size: large; text-align: center; border: 1px solid; margin: 5px;"
            let elt = 
                Div [Div [Attr.Style style] -- Text "Sortable item 1"
                     Div [Attr.Style style] -- Text "Sortable item 2"
                     Div [Attr.Style style] -- Text "Sortable item 3"]
            Sortable.New(elt)
    
        type Control() = 
            inherit Web.Control()
            [<JavaScript>]
            override __.Body = main() :> _        

    module Snippets =
        [|
            {Id = 1; Title = "Snippet 1 Title"; MetaDesc = "Snippet 1 meta description."; Description = ""; Tags = []; Control = new Snippet1.Control()}
            {Id = 2; Title = "Snippet 2 Title"; MetaDesc = "Snippet 2 meta description."; Description = ""; Tags = ["JQUERY"; "JQUERY UI"; "WEBSHARPER"; "JAVASCRIPT"; "EXT JS"; "KENDO UI"; "JQUERY MOBILE"; "SENCHA TOUCH"; "FORMLETS"; "SITELETS"; "GEOLOCATION"; "GOOGLE"; "GOOGLE MAPS"; "TWITTER"; "JSON"; "AJAX"; "GOOGLE VISUALIZATION"; "TYPESCRIPT"; "HTML5"; "DRAG AND DROP"; "FACEBOOK"]; Control = new Snippet2.Control()}
        |]
        |> Array.iter (fun x ->
            hashset.Add x |> ignore
            x.Tags |> List.iter (fun y -> hashset'.Add y |> ignore))