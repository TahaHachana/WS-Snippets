namespace Website

module AddThis =    
    open IntelliFactory.WebSharper
    open IntelliFactory.WebSharper.Html

    [<JavaScript>]
    let main() =
        let div = Div [Attr.Class "hidden-xs"]
        div.Html <-
            """<div class="addthis_toolbox addthis_default_style ">
               <a class="addthis_button_facebook_like" fb:like:layout="button_count"></a>
               <a class="addthis_button_tweet" tw:hashtags="fsharp,websharper"></a>
               <a class="addthis_button_pinterest_pinit"></a>
               <a class="addthis_counter addthis_pill_style"></a>
               </div>"""
        div

    type Control() =
        inherit Web.Control()

        [<JavaScript>]
        override __.Body = main() :> _