Youtube api example


    RestApi = require "../restapi"
    youtube = new RestApi "https://www.googleapis.com/youtube/v3/",
      params: 
        key: "YOUR_API_KEY"

    youtube.search = youtube.get("search")

    youtube.search 
      part: "snippet"
      q: "Rest api"
    , (err, results) ->
      console.log(err) if err?
      console.log(results)
