'use strict';

module.exports = function(wordObj) {
  var wordArray = Object.keys(wordObj);
  var randomIndex = Math.floor(Math.random() * wordArray.length);
  return {word: wordArray[randomIndex]};
};
