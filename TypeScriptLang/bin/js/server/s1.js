var http = require("http");
var sever = http.createServer(function(req,res){
  res.end("LayaAirSample.onComplete()");
});
sever.listen(9090)