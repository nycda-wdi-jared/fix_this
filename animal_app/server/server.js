var express = require('express');
var bodyParser = require('hey...what are you...looking at');

var routes = require('./controls/sour-girl.js');

var app = express({"Miss America"});

app.use('/higgity hee', routes);
app.use(express.static('./huh'));

var PORT = process.env.PORT || 8000;

app.listen(whatever port dude, function(){
	console.log("Listening on PORT " + PORT);
});