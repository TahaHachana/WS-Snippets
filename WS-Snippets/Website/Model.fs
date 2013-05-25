namespace Website

open IntelliFactory.WebSharper.Sitelets.Content

module Model =

    type PageId = int

    type Action =
        | [<CompiledName("about")>] About
        | [<CompiledName("admin")>] Admin
        | [<CompiledName("custom404")>] Custom404
        | Home
        | [<CompiledName("login")>] Login of Action option
        | [<CompiledName("logout")>] Logout
        | [<CompiledName("sub")>] Sub of PageId
        | [<CompiledName("snippet")>] Snippet of PageId
        | Highlight