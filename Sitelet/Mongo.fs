module Website.Mongo

open System
open System.Globalization
open System.Linq
open MongoDB.Bson
open MongoDB.Driver
open MongoDB.Driver.Builders

let culture = CultureInfo.CreateSpecificCulture "en-US"
System.Threading.Thread.CurrentThread.CurrentCulture <- culture

let client = MongoClient AppSettings.mongoConnectionString
let server = client.GetServer()
let db = server.GetDatabase "WSSnippets"
let collection<'T> (name : string) = db.GetCollection<'T> name

[<CLIMutable>]
type Snippet =
    {
        _id      : ObjectId
        SnipId   : int
        Title    : string
        Url : string
        MetaDesc : string
        Desc     : string
        DescHtml : string
        Tags     : string []
        Date     : DateTime
    }
    static member New id title url metaDesc desc descHtml tags date =
        {
            _id      = ObjectId.GenerateNewId()
            SnipId   = id
            Title    = title
            Url = url
            MetaDesc = metaDesc
            Desc     = desc
            DescHtml = descHtml
            Tags     = tags
            Date     = date
        }
            
let snippets  = collection<Snippet> "snippets"
let queryable = snippets.FindAll().AsQueryable()

module Snippets =
    let latest10() =
        query {
            for x in queryable do
                sortByDescending x.Date
                take 10
        }

    let hasTag tag =
        query {
            for x in queryable do
                where (x.Tags.Contains tag)
                select x
        }

    let insert snip =
        let rslt = snippets.Insert snip
        rslt.Ok

    let byId id =
        query {
            for x in queryable do
                where (x.SnipId = id)
                head
        }

    let tags() =
        query {
            for x in queryable do
                select x.Tags
        }
        |> Seq.toArray
        |> Array.concat
        |> Seq.distinct
        |> Seq.toList
