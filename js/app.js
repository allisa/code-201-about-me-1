'use strict';

//Ask and check answer for first question
function firstQuestion() {
  var questionAnswer = prompt('Do I study at Code Fellows?').toLowerCase();
  if (questionAnswer === 'yes' || questionAnswer === 'y' || questionAnswer === 'no' || questionAnswer === 'n') {
    if (questionAnswer === 'yes' || questionAnswer === 'y') {
      alert('Correct!');
      numberCorrect += 1;
      console.log('Do I study at Code Fellows?: ' + questionAnswer);
    }
    else {
      alert('Wrong. Maybe next time.');
      console.log('Do I study at Code Fellows?: ' + questionAnswer);
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
      numberCorrect += 1;
      console.log('Did I serve in the military?: ' + questionAnswer);
    }
    else {
      alert('Wrong. Maybe next time.');
      console.log('Did I serve in the military?: ' + questionAnswer);
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
      numberCorrect += 1;
      console.log('Am I from Seattle?: ' + questionAnswer);
    }
    else {
      alert('Wrong. Maybe next time.');
      console.log('Am I from Seattle?: ' + questionAnswer);
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
      numberCorrect += 1;
      console.log('Do I have three dogs at home?: ' + questionAnswer);
    }
    else {
      alert('Wrong. Maybe next time.');
      console.log('Do I have three dogs at home?: ' + questionAnswer);
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
      numberCorrect += 1;
      console.log('Is my daughter\'s name Emma?: ' + questionAnswer);
    }
    else {
      alert('Wrong. Maybe next time.');
      console.log('Is my daughter\'s name Emma?: ' + questionAnswer);
    }
  }
  else {
    alert('Please respond with "Yes" or "No"');
    fifthQuestion();
  }
}

// Ask and check answer for 6th question
function sixthQuestion() {
  var number = 41;
  while (i >= 1) {
    var questionAnswer = parseInt(prompt('What is my favorite number? Guess between 1 and 50.'));
    if (questionAnswer === number) {
      alert('Correct!');
      numberCorrect += 1;
      console.log('What is my favorite number?: ' + questionAnswer);
      break;
    }else if (questionAnswer > 50 || questionAnswer < 1){
      alert('You need to answer between 1 and 50');
    }else if (questionAnswer < number) {
      i--;
      alert('Too low. You have ' + (i) + ' guesses left.');
    }else if (questionAnswer > number) {
      i--;
      alert('Too high. You have ' + (i) + ' guesses left.');
    }else {
      alert('You need to input a number');
    }
    if (i === 0) {
      alert('You are out of guesses. The answer is 41');
      break;
    }
    console.log('What is my favorite number?: ' + questionAnswer);
  }
}

// Ask and check answer to seventh question
function seventhQuestion() {
  var favFoods = ['sushi', 'ramen', 'bulgogi', 'curry'];
  var userGuesses = 6;
  var userRight = false;


  while (userGuesses > 0) {
    var userAnswer = prompt('What is one of my favorite foods?');
    for (var i = 0; i < favFoods.length; i++) {
      if (userAnswer === favFoods[i]) {
        alert('Correct!');
        userRight = true;
        numberCorrect += 1;
        userGuesses = 0;
      }
    }
    if (userGuesses >= 1 && userRight === false) {
      userGuesses--;
      alert('Wrong. You have ' + userGuesses + ' left.');
    }
    if (userGuesses === 0 && userRight === false) {
      alert('The possible correct answers are: sushi, ramen, bulgogi, or curry');
      break;
    }
    console.log('What is one of my favorite foods?: ' + userAnswer);
  }
}

// Call functions and log their responses in console
var numberCorrect = 0;
firstQuestion();
secondQuestion();
thirdQuestion();
fourthQuestion();
fifthQuestion();

var i = 4;
sixthQuestion();

seventhQuestion();
alert('You got ' + numberCorrect + ' out of 7!');