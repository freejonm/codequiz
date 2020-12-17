var timeEl = document.querySelector(".time");
var question = document.querySelector(".question");
var answer = document.querySelector(".answer");
var btn = document.querySelector("#btn");
// Timer
// var secondsLeft = 10;

// function setTime() {
//   var timerInterval = setInterval(function() {
//     secondsLeft--;
//     timeEl.textContent = secondsLeft + " seconds left";

//     if(secondsLeft === 0) {
//       clearInterval(timerInterval);
//       sendMessage();
//     }

//   }, 1000);
// }

// function sendMessage() {
//     timeEl.textContent = "YOU'RE OUT OF TIME";
//   }
  
//   setTime();

// Containers for questions and answers

var qBank = ["What function logs its contents in the browser console?", "Is this a stupid question?", "What are you, some kind of tough guy?",];

var key = ["console.log()", "yes", "no"];

// ask questions and check for accuracy

function quiz(){
    for (var i = 0; i < qBank.length; i++){
    question.textContent = qBank[Math.floor(Math.random() * qBank.length)];

    console.log(qBank[i]);
    // btn.addEventListener("click", function(){
    //     if(answer.textContent === key[i]){
    //         alert("You're right!");
    //           }
    //      else{
    //         alert("You're wrong! The answer to that question is " + key[i]+".");
    //         }
           
    //         }
    //         )
    }

    
    }

quiz();
