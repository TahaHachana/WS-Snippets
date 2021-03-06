﻿module Sitelet.NewSnippet

open WebSharper

//[<ReflectedDefinition>]
type NewSnippet =
    {
        Id : string
        Title : string
        Url : string
        MetaDescription : string
        Description : string
        DescriptionHtml : string
        Tags : Tag []
    }

//[<ReflectedDefinition>]
and Tag = string

module Server =
    
    open Mongo
    open System
    open System.Collections.Generic
    open System.Text.RegularExpressions
    open TankTop
    open TankTop.Dto

    let insert id title url metaDesc desc descHtml (tags:string []) =
        async {
            try
                let tags' = tags |> Array.map (fun x -> x.ToUpper())
                let snip = Snippet.New (int id) title url metaDesc desc descHtml tags' DateTime.Now
                Snippets.insert snip
                |> ignore
            with _ -> ()
        }

    let addDoc id url title desc =
        async {
            try
                let client = TankTopClient AppSettings.indexdenUrl
                let doc = Document(id + "/" + url)
                let dict = Dictionary()
                dict.Add("title", title)
                dict.Add("description", desc)
                doc.Fields <- dict
                client.AddDocument("Snippets", doc)
            with _ -> ()
        }

    [<Remote>]
    let addSnippet snippet =
        async {
            do! insert snippet.Id snippet.Title snippet.Url snippet.MetaDescription snippet.Description snippet.DescriptionHtml snippet.Tags
            do! addDoc snippet.Id snippet.Url snippet.Title snippet.Description
        }

[<JavaScript>]
module Client =
    open WebSharper.Html.Client
    open WebSharper.JavaScript
    open WebSharper.Piglets

    let tagPiglet (init:Tag) =
        Piglet.Return id
        <*> Piglet.Yield init

    let snippetPiglet (init:NewSnippet) =
        Piglet.Return (fun id title url metaDescription description descriptionHtml tags ->
            {
                Id = id
                Title = title
                Url = url
                MetaDescription = metaDescription
                Description = description
                DescriptionHtml = descriptionHtml
                Tags = tags
            }
        )
        <*> Piglet.Yield init.Id
        <*> Piglet.Yield init.Title
        <*> Piglet.Yield init.Url
        <*> Piglet.Yield init.MetaDescription
        <*> Piglet.Yield init.Description
        <*> Piglet.Yield init.DescriptionHtml
        <*> Piglet.ManyInit init.Tags "" tagPiglet
        |> Piglet.WithSubmit

    let tagView tag =
        Div [Attr.Class "form-group"] -< [
            Controls.Input tag -< [
                Attr.Class "form-control"
                Attr.Type "text"
                Attr.PlaceHolder "Tag"
            ]
        ]

    let Button (writer: Writer<string>) =
        Button []
        |>! OnClick (fun _ _ -> writer.Trigger(Success ""))

    let snippetView id title url metaDescription description descriptionHtml tags submit =
            Div [Attr.Class "well col-md-4"] -< [
                Div [Attr.Class "form-group"] -< [
                    Controls.Input id -< [
                        Attr.Class "form-control"
                        Attr.Type "text"
                        Attr.AutoFocus "autofocus"
                        Attr.PlaceHolder "Id"
                    ]
                ]
                Div [Attr.Class "form-group"] -< [
                    Controls.Input title -< [
                        Attr.Class "form-control"
                        Attr.Type "text"
                        Attr.PlaceHolder "Title"
                    ]
                ]
                Div [Attr.Class "form-group"] -< [
                    Controls.Input url -< [
                        Attr.Class "form-control"
                        Attr.Type "text"
                        Attr.PlaceHolder "Url"
                    ]
                ]
                Div [Attr.Class "form-group"] -< [
                    Controls.TextArea metaDescription -< [
                        Attr.Class "form-control"
                        Attr.Type "text"
                        Attr.PlaceHolder "Meta Description"
                    ]
                ]
                Div [Attr.Class "form-group"] -< [
                    Controls.TextArea description -< [
                        Attr.Class "form-control"
                        Attr.Type "text"
                        Attr.PlaceHolder "Description"
                    ]
                ]
                Div [Attr.Class "form-group"] -< [
                    Controls.TextArea descriptionHtml -< [
                        Attr.Class "form-control"
                        Attr.Type "text"
                        Attr.PlaceHolder "Description HTML"
                    ]
                ]
                Div [] |> Controls.RenderMany tags (fun _ tag ->
                    tagView tag
                )
                Div [
                    Button tags.Add -< [
                        Text "New Tag"
                        Attr.Class "btn btn-default"
                    ]
                    Controls.SubmitValidate submit -< [
                        Attr.Class "btn btn-primary"
                        Attr.Id "submit-btn"
                    ]
                ]
            ]

    let form =
        snippetPiglet
            {
                Id = ""
                Title = ""
                Url = ""
                MetaDescription = ""
                Description = ""
                DescriptionHtml = ""
                Tags = [|""|]
            }
        |> Piglet.Run (fun snippet ->
            async {
                do! Server.addSnippet snippet
                JS.Alert "Done"
            } |> Async.Start)
        |> Piglet.Render snippetView

type Control() =
    inherit Web.Control ()

    [<JavaScript>]
    override __.Body = Client.form :> _