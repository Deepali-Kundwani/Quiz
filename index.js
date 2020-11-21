var game = require("readline-sync");
var name = game.question("What's your name? ");
console.log("Welcome "+"to the Quiz  "+ name );
var score = 0;

var maxScores = 
  {
    name: "Misha",
    score: 10,
  };

  
var questions = [
  {
  question: "Where do I live? ",
  answer: "Jaipur"
}, {
  question: "What is my name?",
  answer: "Deepali"
},
{
  question: "What do i like the most ",
  answer: "Food"
}
];

function quiz(question, answer) 
{
  var userAnswer = game.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase())
   { 
    console.log("Yes, you areright! ");
    score++;
    
  } else {
    console.log("Sorry, you are wrong!");
  }
  console.log('your score is: '+score);
  console.log("---------");
}


for (var i=0; i<questions.length; i++)
 {
  quiz(questions[i].question, questions[i].answer);
 }


if(maxScores.score > score);
{
  console.log(maxScores.name+" has the highest score that is:  ",+ maxScores.score);
}

console.log("Your final score is: ", score);
console.log("Quiz ended");