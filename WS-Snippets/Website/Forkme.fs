namespace Website

module Forkme =
    open IntelliFactory.WebSharper
    open IntelliFactory.WebSharper.Html

    [<JavaScript>]
    let private main() =
//<a href="https://github.com/you"><img style="position: absolute; top: 0; right: 0; border: 0;" src="https://s3.amazonaws.com/github/ribbons/forkme_right_green_007200.png" alt="Fork me on GitHub"></a>
        A [HRef "https://github.com/TahaHachana/WS-Snippets"] -< [
            Img [
                Src "https://s3.amazonaws.com/github/ribbons/forkme_right_green_007200.png"
                Alt "Fork me on GitHub"
                Id "forkme"
            ]
        ]

    type Control() =
        inherit Web.Control()

        [<JavaScript>]
        override __.Body = main() :> _