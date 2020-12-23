var timeEl = document.querySelector(".timer");
var startButton = document.querySelector("#start-btn");
var startScreen = document.querySelector("#start-screen");
var questionContainer = document.querySelector("#question-container");
var question = document.querySelector("#question");
var option1 = document.querySelector("#option1");
var option2 = document.querySelector("#option2");
var result = document.querySelector("#result")



var secondsLeft = 100;
var secondsPenalty = 5;

var i = 0;
var score = 0;
var questionNumber = i + 1;


startButton.addEventListener("click", runQuiz);


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


function runQuiz(){
    startScreen.classList.add("hide");
    questionContainer.classList.remove("hide");

    setTime();

    question.textContent = questions[i].question;
    option1.textContent = questions[i].choiceA;
    option2.textContent = questions[i].choiceB; 


    option1.addEventListener("click", function(){
    
        if(option1.textContent === questions[i].corrAnswer){
            result.textContent = "you're right!";
            score++;
        }
        
        else{
            alert("you're wrong!");
            for (let i = 0; i < 2; i++) {
                secondsLeft -= 5;   
            }
        }
    i++;
    runQuiz();
    
    })

    option2.addEventListener("click", function(){
    
        if(option2.textContent === questions[i].corrAnswer){
            alert("you're right!");
            score++;
        }
        
        else{
            alert("you're wrong!");
            for (let i = 0; i < 2; i++) {
                secondsLeft -= 5;   
            }
            
        }
  
    i++;
    runQuiz();
    })

}


var questions = [
    {
        question: "What function logs its contents in the browser console?",

        corrAnswer: "console.log()",

        choiceA: "console.log()",
        choiceB: "something else",

    },
    
    {
        question: "Is this a stupid question?", 
        
        corrAnswer: "yes",

        choiceA: "no",
        choiceB: "yes",
    },
   
    

];



