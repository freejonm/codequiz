

var score = localStorage.getItem("score");
console.log(score);

var initials = prompt("Please enter your initials");
console.log(initials);

var scoreBoard = [
  { "iniitals" : initials, 
    "score" : score  
  }
]

localStorage.setItem("scoreBoard", scoreBoard);

// var liTag = document.createElement("li");

// liTag.textContent =  scoreBoard.name + " - " + score;

// var olEl = document.querySelector("#highscores");

// olEl.appendChild(liTag);

// var clear = document.querySelector("#clear");

// clear.addEventListener("click", function(){
//   while (highscores.lastElementChild){
//     highscores.removeChild(highscores.lastElementChild);
//   }
// })
