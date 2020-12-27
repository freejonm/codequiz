
const scoreBoard = JSON.parse(localStorage.getItem("highscores")) || [];


var initials = prompt("Please enter your initials.");
var score = localStorage.getItem("score")

const entry = {

  name : initials,

  points : score,

} 

scoreBoard.push(entry);

console.log(scoreBoard);

// var liTag = document.createElement("li");

// liTag.textContent =  initials + " - " + score;

// var olEl = document.querySelector("#highscores");

// olEl.appendChild(liTag);

var clear = document.querySelector("#clear");

clear.addEventListener("click", function(){
  while (highscores.lastElementChild){
    highscores.removeChild(highscores.lastElementChild);
  }
})
