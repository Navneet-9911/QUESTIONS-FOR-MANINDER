var readlineSync = require('readline-sync')
var score = 0;
var userName = readlineSync.question("What is your name? ")
var welcomeMessage = ("Welcome " + userName + " to do you really know FOOTBALL? ")
console.log(welcomeMessage)
console.log("Note: use capital letter in the name. Here are some questions for you: ")
console.log("--------")
function play(question, answer) {
var userAnswer = readlineSync.question(question)
  if (userAnswer === answer) {
  console.log("You are right! ")
  score = score + 10
  } else {
  console.log("You are wrong! ")
  score = score - 5
  }
console.log("Your score is: " + score)
console.log("--------")}


var questions = [{
  question: "How Many Players are on Each Football Team? ",
  answer: "11"
}, {
  question: "Which team won most number of champions league? ",
  answer: "Real Madrid"
}, {
  question: "Who won the best FIFA player of 2022? ",
  answer: "Lionel Messi"
}, {
  question: "Which team won the first ever football world cup? ",
  answer: "Uruguay"
}];

for (var i=0; i<questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}
console.log("YAY!!! Your Final score is: " + score)