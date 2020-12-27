var timeEl = document.querySelector(".timer");
var startButton = document.querySelector("#start-btn");
var startScreen = document.querySelector("#start-screen");
var questionContainer = document.querySelector("#question-container");
var question = document.querySelector("#question");
var option1 = document.querySelector("#option1");
var option2 = document.querySelector("#option2");


var secondsLeft = 60;
var secondsPenalty = 5;
var totalScore = 0;

var i = 0;
var score = 0;


var key = [
    {
        question: "What function logs its contents in the browser console?",

        answer: "console.log()",

        choiceA: "console.log()",
        choiceB: "yule.log()",

    },

    {
        question: "JQuery is an example of a _______",

    
        answer: "API",

    
        choiceA: "API",
        choiceB: "IPA",
    
    },

    {
        question: "Which of the following declares a read-only constant?",

    
        answer: "const",

    
        choiceA: "const",
        choiceB: "var",
    
    },
    
    {
        question: "True or false: javascript is one of the four building blocks of the internet.",

    
        answer: "False",

    
        choiceA: "True",
        choiceB: "False",
    
    },
];


function saveScore(){

    initials = prompt("Please enter your initials.");
    localStorage.setItem("initials", initials);
    localStorage.setItem("score", totalScore);


}

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
    endGame();
    }

function endGame(){
    alert("The quiz is complete.")
    
    totalScore = score + secondsLeft;
    
    alert("Your total score is " + totalScore);
    
    

    if (confirm("Would you like to save your initials and score?")){
        saveScore();
        window.location.href = "highscores.html";
    }

    else {
        alert("Thanks for playing! Goodbye.");
        window.location.href = "highscores.html";
        
    }
}

function timeLoss(){
    secondsLeft = secondsLeft - 5;
}

function nextQuestion(){
    i++;
    runQuiz();
}

function runQuiz(){

    
    startScreen.classList.add("hide");
    questionContainer.classList.remove("hide");
    
    if(i < key.length){ 
        
    question.textContent = key[i].question;
    option1.textContent = key[i].choiceA;
    option2.textContent = key[i].choiceB; 


    option1.addEventListener("click", function(){
        
        if(option1.textContent === key[i].answer){
            alert("Correct");
            score++;
        }
        else{
            alert("Incorrect");
            timeLoss();
        }

        nextQuestion()
    });

    option2.addEventListener("click", function(){
       
        if(option2.textContent === key[i].answer){
            alert("Correct");
            score++;
        }
        else{
            alert("Incorrect");
            timeLoss();
        }

        nextQuestion();
    })
    }

    else{
        endGame();
    }

    
}

startButton.addEventListener("click", function(){
    setTime();
    runQuiz();
});


