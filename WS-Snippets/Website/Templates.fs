module Website.Templates

open IntelliFactory.WebSharper.Sitelets
open Skin

let home      = makeDefaultTemplate "~/HTML/Home.html"
let about     = makeDefaultTemplate "~/HTML/About.html"
let error     = makeDefaultTemplate "~/HTML/Error.html"
let login     = makeDefaultTemplate "~/HTML/Login.html"
let admin     = makeDefaultTemplate "~/HTML/Admin.html"
let snippet   = makeDefaultTemplate "~/HTML/Snippet.html"
let highlight = makeDefaultTemplate "~/HTML/Highlight.html"
let tagged    = makeDefaultTemplate "~/HTML/Tagged.html"
let search    = makeDefaultTemplate "~/HTML/Search.html"
let newPage   = makeDefaultTemplate "~/HTML/NewPage.html"