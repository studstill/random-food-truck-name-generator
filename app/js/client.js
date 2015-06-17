'use strict';
/*global $:false */

// Declare function to hand get requests
function getWord(path, index) {
  $.get(path, function(response) {
    $('#foodTruckName span:eq(' + index + ')').text(response.word);
  });
}

// Get words and populate spans
$('#foodTruckImage').on('click', function() {
  $('#foodTruckName').show().find('span').empty();
  var wordPaths = ['/adjective', '/verb', '/noun'];
  for (var i = 0; i < wordPaths.length; i++) {
    getWord(wordPaths[i], i);
  }
});

// Handle post request for user adjective submission
$('#submitAdjective').on('submit', function(event) {
  event.preventDefault();
  var userAdjective = $('#userAdjective').val();
  $('#userAdjective').val('');
  $.post('/submitNewAdjective', {adjective: userAdjective}, function(response) {
    var confirm = response.message;
    console.log(confirm);
    $('#userAdjSubmitRespose').html(confirm);
  });
});

// Handle post request for user verb submission
$('#submitVerb').on('submit', function(event) {
  event.preventDefault();
  var userVerb = $('#userVerb').val();
  $('#userVerb').val('');
  console.log(userVerb);
  $.post('/submitNewVerb', {verb: userVerb}, function(response) {
    var confirm = response.message;
    console.log(confirm);
    $('#userVerbSubmitRespose').html(confirm);

  });
});

// Handle post request for user nour submission
$('#submitNoun').on('submit', function(event) {
  event.preventDefault();
  var userNoun = $('#userNoun').val();
  $('#userNoun').val('');
  console.log(userNoun);
  $.post('/submitNewNoun', {noun: userNoun}, function(response) {
    var confirm = response.message;
    $('#userNounSubmitRespose').html(confirm);
  });
});

// Handle get request to "reset database"
$('#resetUserDatabase').on('click', function() {
  $.get('/resetUserDatabase', function(response) {
    $('#resetUserDatabase').text(response.message);
  });
  // Show success message
  setTimeout(function() {
    $('#resetUserDatabase').text('Delete all user submissions');
  }, 3000);
});

// Make instructions flash to draw attention to them
$(function blinker() {
  $('.foodTruck>h3').fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500);
});
