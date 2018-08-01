'use strict';

// Ask and check answer for first question
function firstQuestion() {
  var questionAnswer = prompt('Do I study at Code Fellows?').toLowerCase();
  if (questionAnswer === 'yes' || questionAnswer === 'y' || questionAnswer === 'no' || questionAnswer === 'n') {
    if (questionAnswer === 'yes' || questionAnswer === 'y') {
      alert('Correct!');
      return questionAnswer;
    }
    else {
      alert('Wrong. Maybe next time.');
      return questionAnswer;
    }
  }
  else {
    alert('Please respond with "Yes" or "No"');
    firstQuestion();
  }
}

// Ask and check answer for second question
function secondQuestion() {
  var questionAnswer = prompt('Did I serve in the military?').toLowerCase();
  if (questionAnswer === 'yes' || questionAnswer === 'y' || questionAnswer === 'no' || questionAnswer === 'n') {
    if (questionAnswer === 'yes' || questionAnswer === 'y') {
      alert('Correct!');
      return questionAnswer;
    }
    else {
      alert('Wrong. Maybe next time.');
      return questionAnswer;
    }
  }
  else {
    alert('Please respond with "Yes" or "No"');
    secondQuestion();
  }
}

// Ask and check answer for third question
function thirdQuestion() {
  var questionAnswer = prompt('Am I from Seattle?').toLowerCase();
  if (questionAnswer === 'yes' || questionAnswer === 'y' || questionAnswer === 'no' || questionAnswer === 'n') {
    if (questionAnswer === 'no' || questionAnswer === 'n') {
      alert('Correct!');
      return questionAnswer;
    }
    else {
      alert('Wrong. Maybe next time.');
      return questionAnswer;
    }
  }
  else {
    alert('Please respond with "Yes" or "No"');
    thirdQuestion();
  }
}

// Ask and check answer for fourth question
function fourthQuestion() {
  var questionAnswer = prompt('Do I have have three dogs at home?').toLowerCase();
  if (questionAnswer === 'yes' || questionAnswer === 'y' || questionAnswer === 'no' || questionAnswer === 'n') {
    if (questionAnswer === 'no' || questionAnswer === 'n') {
      alert('Correct!');
      return questionAnswer;
    }
    else {
      alert('Wrong. Maybe next time.');
      return questionAnswer;
    }
  }
  else {
    alert('Please respond with "Yes" or "No"');
    fourthQuestion();
  }
}

// Ask and check answer for fifth question
function fifthQuestion() {
  var questionAnswer = prompt('Is my daughter\'s name Emma?').toLowerCase();
  if (questionAnswer === 'yes' || questionAnswer === 'y' || questionAnswer === 'no' || questionAnswer === 'n') {
    if (questionAnswer === 'yes' || questionAnswer === 'y'){
      alert('Correct!');
      return questionAnswer;
    }
    else {
      alert('Wrong. Maybe next time.');
      return questionAnswer;
    }
  }
  else {
    alert('Please respond with "Yes" or "No"');
    fifthQuestion();
  }
}

// Call functions and log their responses in console
var firstAnswer = firstQuestion();
console.log('First question answer: ' + firstAnswer);

var secondAnswer = secondQuestion();
console.log('Second question answer: ' + secondAnswer);

var thirdAnswer = thirdQuestion();
console.log('Third question answer: ' + thirdAnswer);

var fourthAnswer = fourthQuestion();
console.log('Fourth question answer: ' + fourthAnswer);

var fifthAnswer = fifthQuestion();
console.log('Fifth question answer: ' + fifthAnswer);