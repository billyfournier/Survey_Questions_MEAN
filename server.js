// npm install --save express body-parser express-session ejs socket.io mongoose
var express = require('express');
var bodyParser = require("body-parser");
var app = express();

app.use(express.static(__dirname + '/client'));
app.use(express.static(__dirname + '/bower_components'));
app.use(bodyParser.json());

require('./server/config/mongoose.js');
require("./server/config/routes.js")(app);

app.listen(8000, function() { 
  console.log('listening on port 8000');
});
