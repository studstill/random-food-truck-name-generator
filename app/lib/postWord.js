'use strict';

module.exports = function (newWord, wordObject) {
  if (wordObject.hasOwnProperty(newWord)) {
    var pleaseResubmit = {message: 'The word <em>' + newWord + '</em> is already our list.  Please submit another word'};
    return pleaseResubmit;
  } else if(newWord === '') {
    var pleaseEnterWord = {message: 'Please type in a word'};
    return pleaseEnterWord;
  } else {
    wordObject[newWord] = true;
    var wordAdded = {message: 'Thank you for submitting the word <em>' + newWord + '</em> to our list!'};
    return wordAdded;
  }
};
