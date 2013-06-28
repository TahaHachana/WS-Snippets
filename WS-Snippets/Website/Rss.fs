namespace Website

module Rss =
    open System
    open System.IO
    open System.ServiceModel.Syndication
    open System.Text.RegularExpressions
    open System.Xml

    let initFeed() =
        let feed = SyndicationFeed()
        feed.Title <- TextSyndicationContent "WebSharper Snippets Feed"
        feed.Description <- TextSyndicationContent "Latest WebSharper code snippets and demos."
        feed

    let genItems() =
        Mongo.Snippets.latest10()
        |> Seq.toList
        |> List.map (fun snippet ->
            let id = snippet.SnipId |> string
            let desc' = Regex("(<|>)").Replace(snippet.Desc, "")
            let item = SyndicationItem()
            item.Title <- TextSyndicationContent snippet.Title
            item.Summary <- TextSyndicationContent desc'
            item.BaseUri <- Uri("http://wssnippets.apphb.com/snippet/" + id)
            item.Id <- id
            item)

    let feedStr (feed : SyndicationFeed) =
        let feedFormatter = Rss20FeedFormatter(feed)
        let strBuilder = Text.StringBuilder()
        let xmlWriter = XmlTextWriter.Create(strBuilder)
        feedFormatter.WriteTo xmlWriter
        xmlWriter.Flush()
        strBuilder.ToString()

    let rssFeed() =
        let feed = initFeed()
        let items = genItems()
        feed.Items <- items
        feedStr feed