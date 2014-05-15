module Website.Login

open IntelliFactory.WebSharper

[<ReflectedDefinition>]
type LoginInfo =
    {
        Username : string
        Password : string
    }

    static member New username password =
        {
            Username = username
            Password = password
        }

type Access = Denied | Granted

module Server =
    open IntelliFactory.WebSharper.Sitelets

    [<Remote>]
    let login loginInfo =
        async {
            match loginInfo.Password = AppSettings.password with
            | false -> return Denied
            | true ->
                UserSession.LoginUser loginInfo.Username
                return Granted
        }

[<JavaScript>]
module Client =
    open IntelliFactory.WebSharper.Html
    open IntelliFactory.WebSharper.JQuery
    open IntelliFactory.WebSharper.Piglets

    let loginPiglet (init:LoginInfo) =
        Piglet.Return (fun username password -> LoginInfo.New username password)
        <*> (Piglet.Yield init.Username
            |> Piglet.Validation.Is Piglet.Validation.NotEmpty "Please enter your username.")
        <*> (Piglet.Yield init.Password
            |> Piglet.Validation.Is Piglet.Validation.NotEmpty "Please enter your password.")
        |> Piglet.WithSubmit

    let loginRender name password submit =
            Div [Attr.Class "well"; Attr.Id "login-form"] -< [
                Div [Attr.Class "form-group"] -< [
                    Controls.Input name -< [
                        Attr.Class "form-control"
                        Attr.Type "text"
                        HTML5.Attr.AutoFocus "autofocus"
                        HTML5.Attr.Required "required"
                        HTML5.Attr.PlaceHolder "Username"
                    ]
                ]
                Div [Attr.Class "form-group"] -< [
                    Controls.Input password -< [
                        Attr.Class "form-control"
                        Attr.Type "password"
                        HTML5.Attr.PlaceHolder "Password"
                    ]
                    |>! OnKeyDown (fun _ keyCode ->
                        match keyCode.KeyCode with
                        | 13 -> JQuery.Of("#submit-btn").Click().Ignore
                        | _  -> ())
                ]
                Controls.SubmitValidate submit -< [
                    Attr.Class "btn btn-primary"; Attr.Id "submit-btn"
                ]
            ]

    let form redirectUrl =
        loginPiglet {Username = ""; Password = ""}
        |> Piglet.Run (fun loginInfo ->
            async {
                let! access = Server.login loginInfo
                match access with
                | Denied -> JavaScript.Alert "Login failed"
                | Granted -> Html5.Window.Self.Location.Assign redirectUrl
            } |> Async.Start)
        |> Piglet.Render loginRender

type Control(redirectUrl) =
    inherit Web.Control ()

    [<JavaScript>]
    override __.Body = Client.form redirectUrl :> _