var timeEl = document.querySelector(".time");



var startButton = document.querySelector("#start-btn");

var questionContainer = document.querySelector("#question-container");

var question = document.querySelector("#question");

var option1 = document.querySelector("#option1");

var option2 = document.querySelector("#option2");

var answer = document.querySelector("#answer-buttons")

startButton.addEventListener("click", startGame);

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

var i = 0;

function startGame(){
    console.log("Started");
    question.textContent = questions[i].question;
    option1.textContent = questions[i].answers[0].text;
    option2.textContent = questions[i].answers[1].text;
    answer.addEventListener("click", checkAnswer());
}


function checkAnswer(e){
    if (correct = true){
        console.log("that's right!");
    }

}
var questions = [
    {
        question: "What function logs its contents in the browser console?",

        answers: [
            { text: "console.log()", correct: true },
            { text: "something else", correct: false},
        ]
    },
    
    {
        question: "Is this a stupid question?", 
        
        answers: [
            { text: "yes", correct: true },
            { text: "no", correct: false},


        ]
    },
    {
        question: "What are you, some kind of tough guy?",

        answers: [
            { text: "no", correct: true },
            { text: "yes", correct: false},

        ]
    }
    

];

var key = ["console.log()", "yes", "no"];
