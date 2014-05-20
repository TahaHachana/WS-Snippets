module Sitelet.

module InsertSnippet =
    do()

//    open System
//    open IntelliFactory.WebSharper
//
//    module private Server =
//        open Mongo
//
//        [<Rpc>]
//        let insert (id, title, metaDesc, (desc : string), descHtml, (tags : string)) =
//            async {
//                let desc' =
//                    match desc.Length with
//                        | length when length < 150 -> desc
//                        | _ -> desc.[..147] + "..."
//                let tags' = tags.Split ',' |> Array.map (fun x -> x.Trim().ToUpper())
//                let snip = Snippet.New (int id) title metaDesc desc' descHtml tags' DateTime.Now
//                let ok = Snippets.insert snip
//                return ok }
//    
//    module private Client =
//        open IntelliFactory.WebSharper.Html
//        open IntelliFactory.WebSharper.Formlet
//
//        [<JavaScript>]
//        let main() =
//            let id = Controls.Input "" |> Enhance.WithTextLabel "Id"
//            let title = Controls.Input "" |> Enhance.WithTextLabel "Title"
//            let metaDesc = Controls.Input "" |> Enhance.WithTextLabel "Meta Description"
//            let desc = Controls.TextArea "" |> Enhance.WithTextLabel "Description"
//            let descHtml = Controls.TextArea "" |> Enhance.WithTextLabel "Description HTML"
//            let tags = Controls.Input "" |> Enhance.WithTextLabel "Tags"
//            let formlet =
//                Formlet.Yield (fun id title metaDesc desc descHtml tags -> id, title, metaDesc, desc, descHtml, tags)
//                <*> id
//                <*> title
//                <*> metaDesc
//                <*> desc
//                <*> descHtml
//                <*> tags
//                |> Enhance.WithSubmitAndResetButtons
//                |> Enhance.WithFormContainer
//            Formlet.Run (fun x ->
//                async {
//                    JavaScript.Log x
//                    let! ok = Server.insert x
//                    match ok with
//                        | false -> JavaScript.Alert "The query failed."
//                        | true  -> JavaScript.Alert "New snippet inserted successfully." }
//                |> Async.Start) formlet
//
//    type Control() =
//        inherit Web.Control()
//
//        [<JavaScript>]
//        override __.Body = Client.main()