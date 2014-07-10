module Sitelet.JQuery

open IntelliFactory.WebSharper
open IntelliFactory.WebSharper.Html
open IntelliFactory.WebSharper.JQuery

module Snippet1 =

    [<JavaScript>]
    module private Js =
    

        type Direction = Backward | Forward

        let fadeIn (jquery:JQuery) selector =
            jquery.Children(selector)
                .FadeIn(1000.)
                .Ignore

        /// Scrolls to the previous or next slider image.
        let scroll (jquery:JQuery) direction _ =
            let activeSlide = jquery.Children(":visible")
            let index = activeSlide.Index()

            // Fade out the active slide.
            activeSlide.FadeOut(1000.).Ignore

            let fadeIn' = fadeIn jquery

            // Fade in the previous/next slide.
            let slidesCount = jquery.Children().Length
            match direction with
            | Forward ->
                match index with
                | _ when index = slidesCount - 1 -> fadeIn' ":eq(0)"
                | _ -> fadeIn' <| ":eq(" + string (index + 1) + ")"
            | Backward ->
                match index with
                | 0 -> fadeIn' <| ":eq(" + string (slidesCount - 1) + ")"
                | _ -> fadeIn' <| ":eq(" + string (index - 1) + ")"

        let baseUrl = "http://placekitten.com/200/200?image="

        let main () =
            Div [Attr.Id "jquery-slider-container"] -< [
                Div [Attr.Id "jquery-slider"] -< [
                    for x in 1 .. 5 do
                        yield Img [
                            Attr.Src <| baseUrl + string x
                        ]
                ]
                A [
                    Attr.Id "prev-slide"
                    Text "Prev"
                ]
                A [
                    Attr.Id "next-slide"
                    Text "Next"
                ]
            ]
            |>! OnAfterRender (fun _ ->
                let slider = JQuery.Of("#jquery-slider")

                // Image scrolling timer.
                let f = scroll slider Forward
                let timer = ref <| JavaScript.SetInterval f 2000

                // Display the first image.
                slider.Children().First().Show().Ignore

                // Pause on hover functionality.
                JQuery.Of("#jquery-slider, #prev-slide, #next-slide").Hover(
                    (fun _ _ -> JavaScript.ClearInterval(!timer)),
                    (fun _ _ -> timer := JavaScript.SetInterval f 2000)
                ).Ignore

                // Allow the user to choose the active slide.
                JQuery.Of("#prev-slide, #next-slide").Click(fun elt event ->
                    let linkId = elt.GetAttribute "id"
                    event.PreventDefault()
                    match linkId with
                    | "prev-slide" -> scroll slider Backward ()
                    | _ -> f ()
                ).Ignore
            )

    type Control() =
            inherit Web.Control()

            [<JavaScript>]
            override __.Body = Js.main () :> _