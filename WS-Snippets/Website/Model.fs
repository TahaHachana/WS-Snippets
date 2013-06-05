namespace Website

open IntelliFactory.WebSharper.Sitelets.Content

module Model =

    type PageId = int
    type Tag = string
    type Query = string

    type Action =
        | About
        | Admin
        | Error
        | Home
        | Login of Action option
        | Logout
        | [<CompiledName("snippet")>] Snippet of PageId
        | Highlight
        | [<CompiledName("tagged")>] Tagged of Tag
        | [<CompiledName("extjs")>] Extjs of PageId
        | [<CompiledName("search")>] Search of Query * PageId