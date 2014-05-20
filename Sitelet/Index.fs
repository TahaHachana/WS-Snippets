module Sitelet.

module Index =
    do ()

//    open IntelliFactory.WebSharper
//
//    module private Server =
//        open System.Collections.Generic
//        open System.Text.RegularExpressions
//        open TankTop
//        open TankTop.Dto
//
//        let stripSpaces str =
//            let regex = Regex("(\n|\r)", RegexOptions.Compiled)
//            let regex' = Regex(" {2,}", RegexOptions.Compiled)
//            regex.Replace(str, " ")
//            |> fun x -> regex'.Replace(x, " ")
//        
//        let client = TankTopClient AppSettings.indexdenUrl
//
//        [<Rpc>]
//        let addDoc (id : string, title : string, desc : string, code : string) =
//            async {
//                try
//                    let code' = stripSpaces code
//                    let doc = Document id
//                    let dict = Dictionary()
//                    dict.Add("title", title)
//                    dict.Add("description", desc)
//                    dict.Add("code", code')
//                    doc.Fields <- dict
//                    client.AddDocument("WSSnippets", doc)
//                with _ -> () }
//
//    [<JavaScript>]
//    module Client =
//        open IntelliFactory.WebSharper.Formlet
//
//        let main() =
//            let id = Controls.Input "" |> Enhance.WithTextLabel "Id"
//            let title = Controls.Input "" |> Enhance.WithTextLabel "Title"
//            let desc = Controls.TextArea "" |> Enhance.WithTextLabel "Description"
//            let code = Controls.TextArea "" |> Enhance.WithTextLabel "Code"
//            let formlet =
//                Formlet.Yield (fun id title desc code -> id, title, desc, code)
//                <*> id
//                <*> title
//                <*> desc
//                <*> code
//                |> Enhance.WithSubmitAndResetButtons
//                |> Enhance.WithFormContainer
//            Formlet.Run (fun x ->
//                async {
//                    do! Server.addDoc x
//                    JavaScript.Alert "Document indexed." }
//                |> Async.Start) formlet
//    
//    type Control() =
//        inherit Web.Control()
//
//        [<JavaScript>]
//        override __.Body = Client.main()