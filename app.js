var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('<html><head><title>Hello!</title></head><body><h1>Hello World!</h1></body></html>');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});