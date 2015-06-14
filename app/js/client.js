'use strict';
/*global $:false */

$("#foodTruckImage").on("click", function() {
  $('#foodTruckName').empty().show();
  var adjective = '';
  var verb = '';
  var noun = '';

  $.get("/adjective", function(response) {
  adjective = response.word;
    $('#foodTruckName').append(adjective.toUpperCase() + ' ');
  });
  $.get("/verb", function(response) {
    verb = response.word;
    $('#foodTruckName').append(verb.toUpperCase() + ' ');
  });
  $.get("/noun", function(response) {
    noun = response.word;
    $('#foodTruckName').append(noun.toUpperCase());
  });
  console.log(adjective);
  //$('foodTruckName').html(verb + ' ' + adjective + ' ' + noun);
});

$('#submitAdjective').on('submit', function(event) {
  event.preventDefault();
  var userAdjective = $('#userAdjective').val();
  console.log(userAdjective);
  $.post('/submitNewAdjective', {adjective: userAdjective}, function(response) {
    var confirm = response.message;
    console.log(confirm);
    $('#userAdjSubmitRespose').html(confirm);
  });
});

$('#submitVerb').on('submit', function(event) {
  event.preventDefault();
  var userVerb = $('#userVerb').val();
  console.log(userVerb);
  $.post('/submitNewVerb', {verb: userVerb}, function(response) {
    var confirm = response.message;
    console.log(confirm);
    $('#userVerbSubmitRespose').html(confirm);
  });
});

$('#submitNoun').on('submit', function(event) {
  event.preventDefault();
  var userNoun = $('#userNoun').val();
  console.log(userNoun);
  $.post('/submitNewNoun', {noun: userNoun}, function(response) {
    var confirm = response.message;
    console.log(confirm);
    $('#userNounSubmitRespose').html(confirm);
  });
});

$('#resetUserDatabase').on("click", function() {
  $.get('/resetUserDatabase', function(response) {
    $('#resetUserDatabase').text(response.message);
  });
  setTimeout(function() {
    $('#resetUserDatabase').text('Reset User Submissions');
  } , 3000);
})
