'use strict';

var numberCorrect = 0;

//Ask and check answer for first question
var a = 1;
while (a > 0) {
  var questionAnswer1 = prompt('Do I study at Code Fellows?').toLowerCase();
  if (questionAnswer1 === 'yes' || questionAnswer1 === 'y' || questionAnswer1 === 'no' || questionAnswer1 === 'n') {
    if (questionAnswer1 === 'yes' || questionAnswer1 === 'y') {
      alert('Correct!');
      numberCorrect += 1;
      console.log('Do I study at Code Fellows?: ' + questionAnswer1);
      a--;
    }
    else {
      alert('Wrong. Maybe next time.');
      console.log('Do I study at Code Fellows?: ' + questionAnswer1);
      a--;
    }
  }
  else {
    alert('Please respond with "Yes" or "No"');
  }
}

// Ask and check answer for second question
var b = 1;
while (b > 0) {
  var questionAnswer2 = prompt('Did I serve in the military?').toLowerCase();
  if (questionAnswer2 === 'yes' || questionAnswer2 === 'y' || questionAnswer2 === 'no' || questionAnswer2 === 'n') {
    if (questionAnswer2 === 'yes' || questionAnswer2 === 'y') {
      alert('Correct!');
      numberCorrect += 1;
      console.log('Did I serve in the military?: ' + questionAnswer2);
      b--;
    }
    else {
      alert('Wrong. Maybe next time.');
      console.log('Did I serve in the military?: ' + questionAnswer2);
      b--;
    }
  }
  else {
    alert('Please respond with "Yes" or "No"');
  }
}

// Ask and check answer for third question
var c = 1;
while (c > 0) {
  var questionAnswer3 = prompt('Am I from Seattle?').toLowerCase();
  if (questionAnswer3 === 'yes' || questionAnswer3 === 'y' || questionAnswer3 === 'no' || questionAnswer3 === 'n') {
    if (questionAnswer3 === 'no' || questionAnswer3 === 'n') {
      alert('Correct!');
      numberCorrect += 1;
      console.log('Am I from Seattle?: ' + questionAnswer3);
      c--;
    }
    else {
      alert('Wrong. Maybe next time.');
      console.log('Am I from Seattle?: ' + questionAnswer3);
      c--;
    }
  }
  else {
    alert('Please respond with "Yes" or "No"');
  }
}

// Ask and check answer for fourth question
var d = 1;
while (d > 0) {
  var questionAnswer4 = prompt('Do I have have three dogs at home?').toLowerCase();
  if (questionAnswer4 === 'yes' || questionAnswer4 === 'y' || questionAnswer4 === 'no' || questionAnswer4 === 'n') {
    if (questionAnswer4 === 'no' || questionAnswer4 === 'n') {
      alert('Correct!');
      numberCorrect += 1;
      console.log('Do I have three dogs at home?: ' + questionAnswer4);
      d--;
    }
    else {
      alert('Wrong. Maybe next time.');
      console.log('Do I have three dogs at home?: ' + questionAnswer4);
      d--;
    }
  }
  else {
    alert('Please respond with "Yes" or "No"');
  }
}

// Ask and check answer for fifth question
var e = 1;
while (e > 0) {
  var questionAnswer5 = prompt('Is my daughter\'s name Emma?').toLowerCase();
  if (questionAnswer5 === 'yes' || questionAnswer5 === 'y' || questionAnswer5 === 'no' || questionAnswer5 === 'n') {
    if (questionAnswer5 === 'yes' || questionAnswer5 === 'y'){
      alert('Correct!');
      numberCorrect += 1;
      console.log('Is my daughter\'s name Emma?: ' + questionAnswer5);
      e--;
    }
    else {
      alert('Wrong. Maybe next time.');
      console.log('Is my daughter\'s name Emma?: ' + questionAnswer5);
      e--;
    }
  }
  else {
    alert('Please respond with "Yes" or "No"');
  }
}

// Ask and check answer for 6th question
var f = 4;
var number = 41;
while (f >= 1) {
  var questionAnswer6 = parseInt(prompt('What is my favorite number? Guess between 1 and 50.'));
  if (questionAnswer6 === number) {
    alert('Correct!');
    numberCorrect += 1;
    console.log('What is my favorite number?: ' + questionAnswer6);
    break;
  }else if (questionAnswer6 > 50 || questionAnswer6 < 1){
    alert('You need to answer between 1 and 50');
  }else if (questionAnswer6 < number) {
    f--;
    alert('Too low. You have ' + (f) + ' guesses left.');
  }else if (questionAnswer6 > number) {
    f--;
    alert('Too high. You have ' + (f) + ' guesses left.');
  }else {
    alert('You need to input a number');
  }
  if (f === 0) {
    alert('You are out of guesses. The answer is 41');
    break;
  }
  console.log('What is my favorite number?: ' + questionAnswer6);
}

// Ask and check answer to seventh question
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

alert('You got ' + numberCorrect + ' out of 7!');