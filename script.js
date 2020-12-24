var timeEl = document.querySelector(".timer");
var startButton = document.querySelector("#start-btn");
var startScreen = document.querySelector("#start-screen");
var questionContainer = document.querySelector("#question-container");
var question = document.querySelector("#question");
var option1 = document.querySelector("#option1");
var option2 = document.querySelector("#option2");
var result = document.querySelector("#result-container");
var resultMessage = document.querySelector("#result-message");
var next = document.querySelector("#nextQuestion");
var highScores = document.querySelector("#highscores");

var secondsLeft = 100;
var secondsPenalty = 5;
var totalScore = 0;

var i = 0;
var score = 0;

var key = [
    {
        question: "What function logs its contents in the browser console?",

        answer: "console.log()",

        choiceA: "console.log()",
        choiceB: "something else",

    },
    
    {
        question: "Is this a stupid question?", 
        
        answer: "yes",

        choiceA: "no",
        choiceB: "yes",
    },
   
    

];


function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " seconds left";
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        sendMessage();
      }
  
    }, 1000);
  }
  
function sendMessage() {
    timeEl.textContent = "YOU'RE OUT OF TIME";
    }

function saveScore(){
    window.location.href="highscores.html";
         
    var initials = prompt("Please enter your initials.");
    
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("Initials: " + initials + " / " + "Total score (points + remaining seconds: " + totalScore));
}
function runQuiz(){

    if((i < key.length) && (secondsLeft > 0)){
    startScreen.classList.add("hide");
    questionContainer.classList.remove("hide");

    question.textContent = key[i].question;
    option1.textContent = key[i].choiceA;
    option2.textContent = key[i].choiceB; 


    option1.addEventListener("click", function(){
    
        if(option1.textContent === key[i].answer){
            alert("Correct");
            score++;
            console.log(score);
        }
        
        else{
            alert("Incorrect");
            for (let i = 0; i < 2; i++) {
                secondsLeft -= 5;   
            }
        }

    i++;
    runQuiz();
    })

    option2.addEventListener("click", function(){
    
        if(option2.textContent === key[i].answer){
            alert("Correct");
            score++;
            console.log(score);
        }
        
        else{
            alert("Incorrect");
            for (let i = 0; i < 2; i++) {
                secondsLeft -= 5;   
            }
        }
    i++;
    runQuiz();
    })}

    else{
        var totalScore = score + secondsLeft;
        alert("The quiz is complete.")
        alert("Your total score is " + totalScore);
        if (confirm("Would you like to save your initials and score?")){
            saveScore();
            
        }
        else {
            alert("Thanks for playing! Goodbye.");
            
            

        }

    }
    
}

startButton.addEventListener("click", function(){
    setTime();
    runQuiz();
});


