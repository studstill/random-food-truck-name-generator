'use strict';
/*global $:false */

function getWord(path, index) {
  $.get(path, function(response) {
    $('#foodTruckName span:eq(' + index + ')').text(response.word);
  });
}

$("#foodTruckImage").on("click", function() {
  $('#foodTruckName').show().find('span').empty();

  var path = ['/adjective', '/verb', '/noun'];
  for (var i = 0; i < path.length; i++) {
    getWord(path[i], i);
  }
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
