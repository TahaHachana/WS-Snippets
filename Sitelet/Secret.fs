namespace Website

module AppSettings =

    open System.Configuration

    let keyValue (key:string) = ConfigurationManager.AppSettings.Get key

    let mongoConnectionString = keyValue "MongoConnectionString"
    let password = keyValue "Password"
    let indexdenUrl = keyValue "IndexdenUrl"
    let consumerKey = keyValue "ConsumerKey"
    let consumerSecret = keyValue "ConsumerSecret"
    let token = keyValue "Token"
    let tokenSecret = "TokenSecret"