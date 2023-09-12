Twitter search example


    RestApi = require "../restapi"


We define our twitter api client 


    twitter = new RestApi "http://search.twitter.com/", 
      suffix : ".json"

    twitter.search = twitter.get("search")




Let's use it 


    twitter.search
      q: "blue angles"
      rpp: 5
      include_entities: true
      result_type: "mixed"
    , (err, tweets) -> 
      console.log tweets

    
