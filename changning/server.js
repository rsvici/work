var express = require('express');
var app = express();
 
app.use(express.static('../changning'));
 
app.get('../changning/imgs/*', function (req, res) {
    res.sendFile( __dirname + "/" + req.url );
    console.log("Request for " + req.url + " received.");
})
  
app.get('../changning/index.html', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
   console.log("Request for " + req.url + " received.");
})
 
//如果访问网页和本地同名，可以使用以下版本
app.get('../changning/*.html', function (req, res) {
   res.sendFile( __dirname + "/" + req.url );
   console.log("Request for " + req.url + " received.");
})
 
var server = app.listen(8722, function () {
  console.log('Server running at http://127.0.0.1:8722/');
})