namespace Website

module Login =
    open IntelliFactory.WebSharper

    type private LoginInfo =
        {
            Name     : string
            Password : string
        }

    type private Access = Denied | Granted

    module private Server =
        open IntelliFactory.WebSharper.Sitelets

        [<Rpc>]
        let login loginInfo =
            async {
                let access =
                    if loginInfo.Password = Secret.password then
                        UserSession.LoginUser loginInfo.Name
                        Granted
                    else Denied
                return access }

    module private Client =
        open IntelliFactory.WebSharper.Html
        open IntelliFactory.WebSharper.Formlet
        open IntelliFactory.WebSharper.JQuery

        [<JavaScript>]
        let passInput =
            Input [Attr.Type "password"; Attr.Class "form-control"; Attr.Id "password"]
            |>! OnKeyDown (fun _ keyCode ->
                match keyCode.KeyCode with
                    | 13 -> JQuery.Of("#login-btn").Click().Ignore
                    | _  -> ())

        [<JavaScript>]
        let loginForm (redirectUrl : string) =
            let userInput = Input [Attr.Type "text"; HTML5.Attr.AutoFocus "autofocus"; Attr.Class "form-control"; Attr.Id "username"]
            let submitBtn =
                Button [Attr.Type "button"; Attr.Class "btn btn-primary btn-block"; Id "login-btn"] -< [Text "Submit"]
               |>! OnClick (fun _ _ ->
                    async {
                        let! access = Server.login {Name = userInput.Value; Password = passInput.Value}
                        match access with
                            | Denied -> JavaScript.Alert "Login failed"
                            | Granted -> Html5.Window.Self.Location.Assign redirectUrl
                    } |> Async.Start)
            Form [Attr.NewAttr "role" "form"; Attr.Id "signin"] -< [
                H2 [Text "Please sign in"]
                FieldSet [Attr.Class "form-group"] -< [
                    Label [Text "Username"; Attr.For "username"]
                    userInput
                    Label [Text "Password"; Attr.For "password"]
                    passInput
                ]
                FieldSet [
                    submitBtn
                ]
            ]

    type Control(redirectUrl) =
        inherit Web.Control ()

        [<JavaScript>]
        override __.Body = Client.loginForm redirectUrl :> _