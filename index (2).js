var readlineSync = require("readline-sync");
const chalk = require('chalk');
var score = 0;
var userName =readlineSync.question(" Enter your name please ! ");
console.log("Welcome  "+ userName);
console.log(chalk.blue(" \nLets play quiz here!\n"));

function play (question,answer){
var userAnswer =readlineSync.question(question);
if (userAnswer ===  answer){
  console.log("Yes are RIGHT.. !! ");
  score = score +1
}else{
  console.log(chalk.red(" NEVERMIND "));
  score = score;
}
console.log(chalk.green("Your score " + score));
console.log("____________")
}

var array = [
  {  question:
      '\n Que.1 Where do I live ? \n a. Nashik \n b. Pune \n c. Banglore \n d. Delhi \n ',
     answer:("a")},

  {  question:
      "Que.2 What I am learning currently? \n a. web development \n b. Machine learning,AI \n ",
     answer:"a"},
  
  { question:
  ("Que.3 Which engineeing degree I have? \n a. Comp. Science \n b. Mechanical \n c. Electrical \n"),
    answer:("b")} ,

  { question:
   ("Que.4  What is my favourite color? \n a. Blue \n b. Black \n c. Red \n"), 
    answer:("b")} ]

for (var i=0; i<array.length; i++){
  var currentQuestion = array[i];
  play(currentQuestion.question,currentQuestion.answer)
}

console.log("Your Final Score: "+ score);

console.log("Thank you for playing!");
