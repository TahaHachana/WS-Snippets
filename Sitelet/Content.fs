module Sitelet.Content

open System.IO
open System.Web
open IntelliFactory.Html
open IntelliFactory.WebSharper
open IntelliFactory.WebSharper.Sitelets
open IntelliFactory.WebSharper.Sitelets.Content
open Mongo
open Tags
open Model

let truncate count xs =
    xs
    |> Seq.truncate count
    |> Seq.toList

let skip count xs =
    xs
    |> Seq.skip count
    |> Seq.toList

let split count xs =        
    let rec loop xs =
        [
            yield truncate count xs
            match List.length xs <= count with
            | false -> yield! loop <| skip count xs
            | true -> ()
        ]
    loop xs

let link href text = A [HRef href] -< [Text text]
    
let subDescription (description:string) =
    match description.Length with
    | length when length < 150 -> description
    | _ ->
        let description' = description.[..150]
        match description'.EndsWith "." with
        | false ->
            match description'.EndsWith " " with
            | false ->
                let substrings = description'.Split ' '
                substrings.[.. (substrings.Length - 2)]
                |> String.concat " "
                |> fun x -> x + " ..."
            | true -> description' + " ..."
        | true -> description'
        
let snippetColumn snippet =    
    Div [Class "col-md-6 snippet"] -< [
        H3 [
            A [
                HRef
                <| "/snippet/" + string snippet.SnipId + "/" + snippet.Url
            ] -< [Text snippet.Title]
        ]
        P [Text <| subDescription snippet.Desc]
    ]

module Footer =

    let elt : HtmlElement =
        HTML5.Footer [Id "footer"] -< [
                P [Class "text-center"] -< [
                    Text "Built with "
                    A [
                        HRef "http://www.websharper.com/"
                        Target "_blank"
                    ] -< [
                        Text "WebSharper"
                    ]
                ]
                P [Class "text-center"] -< [
                    Text "Snippets in database: 30"
                ]
        ]

module Home =

    let snippetsRow snippet snippet' =
        Div [Class "row"] -< [
            snippetColumn snippet
            snippetColumn snippet'
        ]  

    let searchSection =
        HTML5.Section [Class "row"] -< [
            new Search.Control()
        ]
                                
    let snippetsSection =
        let snippets =
            Snippets.latest10()
            |> Seq.toList
            |> split 2
            |> List.map (fun lst -> snippetsRow lst.[0] lst.[1])
        HTML5.Section [Class "featured container"] -< [
            yield H2 [
                Text "Latest snippets "
                A [HRef "/rss"] -< [
                    Img [
                        Src "/Images/feed-icon.png"
                        Alt "RSS Feed"
                        Id "feed-icon"
                    ]                    
                ]
            ]
            yield! snippets
        ]

    let tagsBtns =
        Mongo.Snippets.tags()
        |> List.map (fun tag ->
            A [
                HRef
                <| "/tagged/" + tag.ToLower().Replace(' ', '-')
                Class "tag-link"
            ] -< [
                Button [Class "btn btn-info btn-tag"] -< [
                    Text tag
                ]
            ])

    let tagsSection =
        Div [
            Class "featured container"
            Id "tags"
        ] -< [
            yield H2 [Text "Tags"]
            yield! tagsBtns
        ] 
        
    let body =
        Div [
            searchSection
            HR []
            snippetsSection
            HR []
            tagsSection
            Div [Id "push"]
        ]

module Login =

    let link action (ctx:Context<_>) =
        match action with
        | Some action -> action
        | None -> Action.Admin
        |> ctx.Link
       
    let body action ctx =
        let link = link action ctx
        Div [Class "container"] -< [
            new Login.Control(link)
        ]

module Admin =

    let body ctx =
        Div [Class "container"] -< [
            LoginInfo.elt ctx :> INode<_>
            new NewSnippet.Control() :> _
            Div [Id "push"] :> _
        ]

module Snippet =

    let title (snippet:Snippet) = snippet.Title + " · WebSharper Snippets"
                
    let code id =
        let path =
            HttpContext.Current.Server.MapPath
            <| "~/Source/" + string id + ".txt"
        let source = File.ReadAllText path
        let html = Highlight.Server.highlight source
        Element.VerbatimContent html
        
    let tags snippet =
        snippet.Tags
        |> Array.map (fun tag ->
            let href = "/tagged/" + tag.ToLower().Replace(' ', '-')
            A [
                HRef href
                Class "tag-link"
            ] -< [
                Button [Class "btn btn-info btn-tag"] -< [
                    Text tag
                ]
            ])

    let detailsDiv (snippet:Snippet) =
        Div [Id "snippet-description"] -< [
            H1 [Text snippet.Title]
            Element.VerbatimContent snippet.DescHtml
        ]

    let body snippet =
        Div [Class "container"] -< [
            detailsDiv snippet
            Div [Class "page-header"] -< [
                H2 [Text "Demo"]
            ]
            IFrame [
                Src <| "/newpage/" + string snippet.SnipId
                Scrolling "no"
                Attributes.Style "width: 100%; border: none;"
            ]
            A [
                HRef <| "/newpage/" + string id
                Class "tag-link"
                Target "_blank"
            ] -< [
                Button [Class "btn btn-primary btn-tag"] -< [
                    Text "Open in new page"
                ]                        
            ]
            Div [Class "page-header"] -< [
                H2 [Text "Code"]
            ]
            code snippet.SnipId
            Div [Class "page-header"] -< [
                H2 [Text "Tags"]
            ]
            Div [yield! tags snippet]
            Div [Id "push"]
        ]

module Tagged =

    let snippetsRow lst =
        match lst with
        | [snippet] ->
            Div [Class "row"] -< [
                snippetColumn snippet
            ]
        | _ ->
            Div [Class "row"] -< [
                snippetColumn lst.[0]
                snippetColumn lst.[1]
            ]

    let snippetsDiv tag =
        let rows =
            Snippets.hasTag tag
            |> Seq.toList
            |> split 2
            |> List.map snippetsRow
        Div [Id "tagged-snippets"]
        -< rows

    let body tagUpper tag =
        Div [
            Class "container"
            Id "main"
        ] -< [
            Div [Class "page-header"] -< [
                    H1 [Text <| "Snippets tagged \"" + tagUpper + "\""]
            ]
            snippetsDiv tag
            Div [Id "push"]
        ]

module SearchUtils =

    let resultDiv (id, title, description) =
        let description' = subDescription description
        Div [
            H3 [
                A [HRef <| "/snippet/" + id] -< [
                    Element.VerbatimContent title
                ]
            ]
            Div [Text description']
        ]

    let resultsDiv results =
        results
        |> Array.map resultDiv
        |> fun divs -> Div [Id "search-results"] -< divs

    let prevLi pageId queryStr =
        match pageId with
        | 1 -> LI [Class "disabled"] -< [link "#" "«"]
        | _ -> LI [link ("/search/" + queryStr + "/" + string (pageId - 1)) "«"]

    let nextLi pageId pagesLength queryStr =
        match pageId with
        | _ when pageId = pagesLength ->
            LI [Class "disabled"] -< [link "#" "»"]
        | _ ->
            LI [
                link
                    ("/search/" + queryStr + "/" + string (pageId + 1))
                    "»"
            ]

    let pageLi x pageId queryStr =
        let xStr = string x
        match x with
        | _ when x = pageId ->
            LI [Class "active"] -< [
                link
                    ("/search/" + queryStr + "/" + xStr)
                    xStr
            ]
        | _ ->
            LI [
                link
                    ("/search/" + queryStr + "/" + string x)
                    xStr
            ]

    let pagesUl pageId queryStr pages length =
        UL [Class "pagination"] -< [
            yield prevLi pageId queryStr
            yield! Array.map (fun x -> pageLi x pageId queryStr) pages
            yield nextLi pageId length queryStr
        ]

    let paginationDiv matches pageId queryStr =
        let pages =
            matches / 10.
            |> ceil |> int |> fun x -> [|1 .. x|]
        let length = pages.Length
        let pages' =
            match pageId with
            | _ when pageId < 7 ->
                pages
                |> Seq.truncate 10
                |> Seq.toArray
            | _ ->
                let tail =
                    pages.[pageId ..]
                    |> Seq.truncate 4
                    |> Seq.toArray
                pages.[.. pageId - 1]
                |> Array.rev
                |> Seq.truncate (10 - tail.Length)
                |> Seq.toArray
                |> Array.rev
                |> fun x -> Array.append x tail
        match length with
            | 1 -> Div []
            | _ ->
                Div [
                    pagesUl pageId queryStr pages' length
                ]

    let body (results:(string * string * string) []) pageId matches queryStr =
        match results.Length with
            | 0 ->
                Div [Class "container"] -< [
                    Div [Class "page-header"] -< [
                        H1 [Text "Results"]
                    ]
                    P [Text "The query did not match any documents."]
                    Div [Id "push"]
                ]
            | _ ->
                Div [Class "container"] -< [
                    Div [Class "page-header"] -< [
                        H1 [Text "Results"]
                    ]
                    resultsDiv results
                    paginationDiv matches pageId queryStr
                    Div [Id "push"]
                ]