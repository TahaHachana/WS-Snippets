namespace Website

open IntelliFactory.WebSharper.Sitelets.Content

module Model =

    type PageId = int

    type Action =
        | About
        | Admin
        | Error
        | Home
        | Login of Action option
        | Logout
        | [<CompiledName("snippet")>] Snippet of PageId
        | Highlight
        | [<CompiledName("tagged")>] Tagged of string
        | [<CompiledName("extjs")>] Extjs of PageId