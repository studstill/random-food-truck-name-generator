'use strict';

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 3000;

// Refer server to app/ directory
app.use(express.static(__dirname + '/app'));

// Implement bodyParser package
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var getRandomWord = require('./app/lib/getRandomWord');
var postWord = require('./app/lib/postWord');
var Adjectives = require('./app/lib/Adjectives');
var Nouns = require('./app/lib/Nouns');
var Verbs = require('./app/lib/Verbs');

// Respond to root url request with index.html
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/app/index.html');
});

app.listen(port);
console.log('Server started on port ' + port);

var adjectives = new Adjectives();
var nouns = new Nouns();
var verbs = new Verbs();

app.get('/adjective', function(request, response) {
  response.json(getRandomWord(adjectives));
});

app.get('/noun', function(request, response) {
  response.json(getRandomWord(nouns));
});

app.get('/verb', function(request, response) {
  response.json(getRandomWord(verbs));
});

app.post('/submitNewAdjective', function(request, response) {
  var newAdjective = request.body.adjective;
  response.json(postWord(newAdjective, adjectives));
});

app.post('/submitNewVerb', function(request, response) {
  var newVerb = request.body.verb;
  response.json(postWord(newVerb, verbs));
});

app.post('/submitNewNoun', function(request, response) {
  var newNoun = request.body.noun;
  response.json(postWord(newNoun, nouns));
});

app.get('/resetUserDatabase', function(request, response) {
  adjectives = new Adjectives();
  nouns = new Nouns();
  verbs = new Verbs();
  response.json({message: 'User submissions successfully removed from database'});
});

