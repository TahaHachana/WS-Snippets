module Website.Utils

open IntelliFactory.Html

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