namespace Website

module Forkme =
    open IntelliFactory.WebSharper
    open IntelliFactory.WebSharper.Html

    [<JavaScript>]
    let private main() =
        A [HRef "https://github.com/TahaHachana/WS-Snippets"] -< [
            Img [
                Src "https://s3.amazonaws.com/github/ribbons/forkme_left_green_007200.png"
                Alt "Fork me on GitHub"
                Id "forkme"
            ]
        ]

    type Control() =
        inherit Web.Control()

        [<JavaScript>]
        override __.Body = main() :> _