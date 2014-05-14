namespace Website

module AppSettings =

    open System.Configuration

    let keyValue (key:string) = ConfigurationManager.AppSettings.Get key

    let mongoConnectionString = ConfigurationManager.ConnectionStrings.["Mongo"].ConnectionString
    let password = keyValue "Password"
    let indexdenUrl = keyValue "IndexdenUrl"
    let consumerKey = keyValue "ConsumerKey"
    let consumerSecret = keyValue "ConsumerSecret"
    let token = keyValue "Token"
    let tokenSecret = keyValue "TokenSecret"