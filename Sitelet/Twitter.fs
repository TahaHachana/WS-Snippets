﻿module Sitelet.Twitter

module Snippet1 =

    type Tweet =
        {
            id : string
            screenName : string
            avatar: string
            statusAsHtml : string
            createdAt : string
            isRetweeted : bool
            retweetedId : string option
            retweetedScreenName : string option
        }

    open WebSharper

    module Server =

        open LinqToTwitter
        open System
        open System.Collections.Generic

        let entityDetails (entity:#EntityBase) formattedStr =
            entity.Start,
            entity.End,
            formattedStr
    
        let hashTagDetails (hashTag:HashTagEntity) =
            let format = "<a href=\"https://twitter.com/search?f=realtime&q=%23{0}\" target=\"_blank\">#{0}</a>"
            entityDetails hashTag <| String.Format(format, hashTag.Tag)

        let urlDetails (url:UrlEntity) =
            let format = "<a href=\"{0}\" target=\"_blank\">{1}</a>"
            entityDetails url <| String.Format(format, url.Url, url.DisplayUrl)

        let userMentionDetails (userMention:UserMentionEntity) =
            let format = "<a href=\"http://twitter.com/{0}\" target=\"_blank\">@{0}</a>"
            entityDetails userMention <| String.Format(format, userMention.ScreenName)

        let entityDetails' (entities:List<#EntityBase>) detailsFunc =
            entities
            |> Seq.toList
            |> List.map detailsFunc

        let statusEntities (status:Status) =
            let entities = status.Entities
            [
                entityDetails' entities.HashTagEntities hashTagDetails
                entityDetails' entities.UrlEntities urlDetails
                entityDetails' entities.UserMentionEntities userMentionDetails
            ]
            |> List.concat
            |> List.filter (fun (start, ``end`` , _) -> ``end`` - start <> 1)
            |> List.sortBy (fun (start, _, _) -> start)

        let skipTake (str:string) idx start =
            str
            |> Seq.skip idx
            |> Seq.take (start - idx)
            |> String.Concat

        let formatEntities statusText entities =
            let skipTake' = skipTake statusText
            let rec f entities idx (acc:string) =
                match entities with
                | [(start, ``end``, str)] ->
                    [
                        acc
                        skipTake' idx start
                        str
                        (statusText |> Seq.skip ``end`` |> String.Concat)
                    ]
                    |> String.Concat
                | (start, ``end``, str) :: tail ->
                    let acc' =
                        [
                            acc
                            skipTake' idx start
                            str
                        ]
                        |> String.Concat
                    f tail ``end`` acc' 
                | [] -> statusText
            f entities 0 ""

        let statusHtml (status:Status) =
            status
            |> statusEntities
            |> formatEntities status.Text

        let credStore =
            SingleUserInMemoryCredentialStore(
                ConsumerKey = AppSettings.consumerKey,
                ConsumerSecret = AppSettings.consumerSecret,
                AccessToken = AppSettings.token,
                AccessTokenSecret = AppSettings.tokenSecret
            )

        let authorizer =
            SingleUserAuthorizer(
                CredentialStore = credStore,
                SupportsCompression = true
            )

        let ``#fsharpSearch``() =
            let context = new TwitterContext(authorizer)
            query {
                for x in context.Search do
                    where (
                        x.Type = SearchType.Search
                        && x.Query = "#fsharp"
                        && x.Count = 50
                    )
                    select x
            }
            |> fun x -> x.SingleOrDefaultAsync()
            |> Async.AwaitTask
                                    
        let newTweet (status:Status) =
            let retweetedStatus = status.RetweetedStatus
            let retweeted =
                match retweetedStatus.StatusID with
                | 0UL -> false
                | _ -> true
            let retweetedScreenName =
                match retweeted with
                | false -> None
                | true -> Some retweetedStatus.User.ScreenNameResponse
            let retweetedId = 
                match retweeted with
                | false -> None
                | true -> Some (string retweetedStatus.StatusID)
            {
                id = string status.StatusID
                screenName = status.User.ScreenNameResponse
                avatar = status.User.ProfileImageUrl
                statusAsHtml = statusHtml status
                createdAt =
                    status.CreatedAt.ToShortDateString()
                    + " "
                    + status.CreatedAt.ToShortTimeString()
                isRetweeted = retweeted
                retweetedId = retweetedId
                retweetedScreenName = retweetedScreenName
            }

        [<Remote>]
        let latestTweets() =
            async {
                try
                    let! search = ``#fsharpSearch``()
                    let statuses =
                        search.Statuses.ToArray()
                        |> Array.map newTweet
                    return Some statuses
                with _ -> return None
            }

    /// Client-side code.
    [<JavaScript>]
    module private Client =
        open WebSharper.JavaScript
        open WebSharper.JQuery
        open WebSharper.Html.Client

        /// Creates an <li> containing the details of a tweet (screen name, creation date...).
        let li tweet =
            let id = tweet.id
            let screenName = tweet.screenName
            let profileLink = "https://twitter.com/" + screenName
            let replyLink = "https://twitter.com/intent/tweet?in_reply_to=" + id
            let retweetLink = "https://twitter.com/intent/retweet?tweet_id="  + id
            let favoriteLink = "https://twitter.com/intent/favorite?tweet_id=" + id
            let p = P []
            p.Html <- tweet.statusAsHtml
            LI [Attr.Class "list-group-item"] -< [
                Div [
                    A [HRef profileLink; Attr.Class "profile-link"; Attr.Target "_blank"] -< [
                        Img [Src tweet.avatar; Alt screenName; Attr.Class "avatar"]
                        Strong [Text screenName]
                    ]
                    Br []
                    Small [Text tweet.createdAt]
                    p
                    Div [Attr.Class "tweet-actions"] -< [
                        A [HRef replyLink; Attr.Class "tweet-action"; Attr.Style "margin-right: 5px;"] -< [Text "Reply"]
                        A [HRef retweetLink; Attr.Class "tweet-action"; Attr.Style "margin-right: 5px;"] -< [Text "Retweet"]
                        A [HRef favoriteLink; Attr.Class "tweet-action"] -< [Text "Favorite"]
                    ]
                ]
            ]

        /// Toggles the visibility of the reply, retweet and favorite links.
        let toggleActionsVisibility() =
            let jquery = JQuery.Of ".list-group-item"
            jquery.Mouseenter(fun x _ -> JQuery.Of(".tweet-actions", x).Css("visibility", "visible").Ignore).Ignore
            jquery.Mouseleave(fun x _ -> JQuery.Of(".tweet-actions", x).Css("visibility", "hidden").Ignore).Ignore

        /// Opens the reply, retweet and favorite links in a modal dialog.
        let handleTweetActions() =
            let jquery = JQuery.Of "a.tweet-action"
            jquery.Click(fun elt event ->
                event.PreventDefault()
                let href = elt.GetAttribute "href"
                JS.Window.ShowModalDialog href |> ignore).Ignore

        /// Appends a <div> containing a list of tweets to the DOM.
        let main() =
            Div [Attr.Id "tweets"]
            |>! OnAfterRender (fun elt ->
                async {
                    let! searchResults = Server.latestTweets()
                    match searchResults with
                        | None -> JS.Alert "Failed to fetch the latest tweets."
                        | Some tweets ->
                            let ul = UL [Attr.Class "list-group"; Attr.Id "tweets-ul"]
                            tweets |> Array.iter (fun tweet -> ul.Append (li tweet))
                            elt.Append ul
                            toggleActionsVisibility()
                            handleTweetActions() }
                |> Async.Start)

    /// A control for serving the main pagelet.
    type Control() =
        inherit Web.Control()

        [<JavaScript>]
        override __.Body = Client.main() :> _