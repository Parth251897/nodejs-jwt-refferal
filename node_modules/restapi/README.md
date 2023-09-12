Rest Api
=========


The modules we need
--------------------
```coffeescript
request = require 'request'
_       = require 'underscore'
```

A small module to easily query rest api
```coffeescript
encodeUrlParams = (params) ->
  encoded = "?"
  for key, value of params
    encoded += (if encoded != "?" then "&" else "") + "#{key}=#{value}"
  encoded
    

class RestApi 
  constructor: (url, options) -> 
    @url = url
    @options = options || {}

  get:     (route) -> @.call("get",   route)
  post:    (route) -> @.call("post",  route)
  put:     (route) -> @.call("put",   route)
  delete:  (route) -> @.call("delete",route)

  call: (verb, route) -> 

    parameters = route.match /\:([^\:\/]*)/g
    parameters = [] if not parameters

    (params, done) => 
      
      params = _.extend(params, @options.params) if @options.params?

      for i in [0...parameters.length]
        param = parameters[i].replace(/\:/, '')
        route = route.replace ":#{param}", params[param].toString()
       
      url = @url 
      url += route
      url += @options.suffix if @options.suffix? 
      url += encodeUrlParams(params) if verb == "get"
      
      console.log url
      query = 
        url : url
     
      query.json = params if verb == "post"

      request[verb] query, (e, r, body) ->
        done e, JSON.parse(body)
```

    module.exports = RestApi
