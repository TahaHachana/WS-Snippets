module Sitelet.Login

open WebSharper

[<ReflectedDefinition>]
type LoginInfo =
    {
        Username : string
        Password : string
    }

type Access = Denied | Granted

module Server =
    open WebSharper.Web

    [<Remote>]
    let login loginInfo =
        async {
            match loginInfo.Password = AppSettings.password with
            | false -> return Denied
            | true ->
                do! Remoting.GetContext().UserSession.LoginUser loginInfo.Username
                return Granted
        }

[<JavaScript>]
module Client =
    open WebSharper.Html.Client
    open WebSharper.JavaScript
    open WebSharper.JQuery
    open WebSharper.Piglets

    let loginPiglet (init:LoginInfo) =
        Piglet.Return (fun username password ->
            {
                Username = username
                Password = password
            }
        )
        <*> (Piglet.Yield init.Username
            |> Piglet.Validation.Is
                Piglet.Validation.NotEmpty
                "Please enter your username."
            )
        <*> (Piglet.Yield init.Password
            |> Piglet.Validation.Is
                Piglet.Validation.NotEmpty
                "Please enter your password."
            )
        |> Piglet.WithSubmit

    let loginRender name password submit =
            Div [Attr.Class "well"; Attr.Id "login-form"] -< [
                Div [Attr.Class "form-group"] -< [
                    Controls.Input name -< [
                        Attr.Class "form-control"
                        Attr.Type "text"
                        Attr.AutoFocus "autofocus"
                        Attr.Required "required"
                        Attr.PlaceHolder "Username"
                    ]
                ]
                Div [Attr.Class "form-group"] -< [
                    Controls.Input password -< [
                        Attr.Class "form-control"
                        Attr.Type "password"
                        Attr.PlaceHolder "Password"
                    ]
                    |>! OnKeyDown (fun _ keyCode ->
                        match keyCode.KeyCode with
                        | 13 -> JQuery.Of("#submit-btn").Click().Ignore
                        | _  -> ())
                ]
                Controls.SubmitValidate submit -< [
                    Attr.Class "btn btn-primary"
                    Attr.Id "submit-btn"
                ]
            ]

    let form redirectUrl =
        loginPiglet {Username = ""; Password = ""}
        |> Piglet.Run (fun loginInfo ->
            async {
                let! access = Server.login loginInfo
                match access with
                | Denied -> JS.Alert "Login failed"
                | Granted -> JS.Window.Location.Assign redirectUrl
            } |> Async.Start)
        |> Piglet.Render loginRender

type Control(redirectUrl) =
    inherit Web.Control ()

    [<JavaScript>]
    override __.Body = Client.form redirectUrl :> _