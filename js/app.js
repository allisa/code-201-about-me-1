'use strict';

// Variable that holds tally of correct questions
var numberCorrect = 0;

var quizQuestions = ['Do I study at Code Fellows?', 'Did I serve in the military?','Am I from Seattle?', 'Do I have have three dogs at home?', 'Is my daughter\'s name Emma?'];
var responses = ['Correct!', 'Wrong. Maybe next time.'];
var answers = ['y', 'y', 'n', 'n', 'y'];

function yesNoQuestions() {
  for (var i=0; i<quizQuestions.length; i++) {
    var questionAnswer = prompt(quizQuestions[i]).toLowerCase()[0];
    if (questionAnswer === 'y' || questionAnswer === 'n') {
      if (questionAnswer === answers[i]) {
        alert(responses[0]);
        numberCorrect += 1;
        console.log(quizQuestions[i] + ': ' + questionAnswer);
      }
      else if (questionAnswer !== answers[i]) {
        alert(responses[1]);
        console.log(quizQuestions[i] + ': ' + questionAnswer);
      }
    }
    else {
      alert('Please respond with "Yes" or "No"');
    }
  }
}


// Ask and check answer for 6th question
function favNumber() {
  var f = 4;
  var number = 41;
  while (f >= 1) {
    var questionAnswer = parseInt(prompt('What is my favorite number? Guess between 1 and 50.'));
    if (questionAnswer === number) {
      alert('Correct!');
      numberCorrect += 1;
      console.log('What is my favorite number?: ' + questionAnswer);
      break;
    }else if (questionAnswer > 50 || questionAnswer < 1){
      alert('You need to answer between 1 and 50');
    }else if (questionAnswer < number) {
      f--;
      alert('Too low. You have ' + (f) + ' guesses left.');
    }else if (questionAnswer > number) {
      f--;
      alert('Too high. You have ' + (f) + ' guesses left.');
    }else {
      alert('You need to input a number');
    }
    if (f === 0) {
      alert('You are out of guesses. The answer is 41');
      break;
    }
    console.log('What is my favorite number?: ' + questionAnswer);
  }
}

// Ask and check answer to seventh question
var favFoods = ['sushi', 'ramen', 'bulgogi', 'curry'];
var userGuesses = 6;
var userRight = false;

function favFood() {
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
function quiz() {
  yesNoQuestions();
  favNumber();
  favFood();
  alert('You got ' + numberCorrect + ' out of 7!');
}