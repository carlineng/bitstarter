var express = require('express');
var fs = require('fs')
var app = express();


app.use(express.logger());

app.get('/', function(request, response) {
  index_buffer = fs.readFileSync('index.html')
  response.send(index_buffer.toString('utf-8'))
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
