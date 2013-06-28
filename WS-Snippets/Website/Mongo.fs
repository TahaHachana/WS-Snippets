namespace Website

open System
open System.Globalization
open System.Linq
open MongoDB.Bson
open MongoDB.Driver
open MongoDB.Driver.Builders

module Mongo =
    let culture = CultureInfo.CreateSpecificCulture "en-US"
    CultureInfo.DefaultThreadCurrentCulture <- culture

    [<AutoOpen>]
    module private Utilities =
        let mongoClient (connectionString: string) = MongoClient connectionString
        let databaseByName (server : MongoServer) (name : string) = server.GetDatabase name
        let collectionByName<'T> (db : MongoDatabase) (name : string) = db.GetCollection<'T> name

        let client = mongoClient Secret.connStr
        let server = client.GetServer()
        let database = databaseByName server "WSSnippets"

    [<AutoOpen>]
    module RecordTypes =        
        [<CLIMutable>]
        type Snippet =
            {
                _id    : ObjectId
                SnipId : int
                Title  : string
                Desc   : string
                Tags   : string []
                Date   : DateTime
            }
            static member New id title desc tags date =
                {
                    _id    = ObjectId.GenerateNewId()
                    SnipId = id
                    Title  = title
                    Desc   = desc
                    Tags   = tags
                    Date   = date
                }
            
    [<AutoOpen>]
    module private Collections =
        let snippets  = collectionByName<Snippet> database "snippets"

    [<AutoOpen>]
    module private Queryable =
        let asQueryable (collection : MongoCollection<_>) = collection.FindAll().AsQueryable()
        
        let snipQuery = asQueryable snippets

    module Snippets =
        let latest10() =
            query {
                for x in snipQuery do
                    sortByDescending x.Date
                    take 10 }

        let hasTag tag =
            query {
                for x in snipQuery do
                    where (x.Tags.Contains tag)
                    select x }

        let insert snip =
            let rslt = snippets.Insert snip
            rslt.Ok

            