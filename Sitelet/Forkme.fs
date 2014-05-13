namespace Website

module Forkme =
    open IntelliFactory.WebSharper
    open IntelliFactory.WebSharper.Html

    [<JavaScript>]
    let private main() =
        A [HRef "https://github.com/TahaHachana/WS-Snippets"; Attr.Target "_blank"] -< [
            Img [
                Src "https://s3.amazonaws.com/github/ribbons/forkme_right_orange_ff7600.png"
                Alt "Fork me on GitHub"
                Id "forkme"
                Attr.Style "z-index: 2000;"
            ]
        ]

    type Control() =
        inherit Web.Control()

        [<JavaScript>]
        override __.Body = main() :> _