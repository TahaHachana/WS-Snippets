﻿module Sitelet.Model

type PageId = int
type Path = string
type Tag = string
type Query = string

type Action =
    | About
    | Admin
    | Error
    | Home
    | Login of Action option
    | Logout
    | [<CompiledName("snippet")>] Snippet of PageId * Path
//    | [<CompiledName("snippet")>] OldSnippet of PageId
    | [<CompiledName("tagged")>] Tagged of Tag
//        | [<CompiledName("extjs")>] Extjs of PageId
    | [<CompiledName("search")>] Search of Query * PageId
    | Rss
    | NewPage of int
    | Redirect of int * string