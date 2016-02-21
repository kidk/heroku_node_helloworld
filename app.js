var express = require('express');
var app = express();
// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

app.get('/', function (req, res) {
  res.send('<html><head><title>Hello!</title></head><body><h1>Hello World!</h1></body></html>');
});

app.listen(port, function () {
  console.log('Example app listening on port ' + port + '!');
});