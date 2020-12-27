const name = localStorage.getItem("initials");
const userScore = localStorage.getItem("points");
const scoreBoard = localStorage.getItem("scoreBoard");

console.log(scoreBoard);

var liTag = document.createElement("li");

liTag.textContent =  name + " / " + userScore;

var olEl = document.querySelector("#highscores");

olEl.appendChild(liTag);

var clear = document.querySelector("#clear");

clear.addEventListener("click", function(){
  while (highscores.lastElementChild){
    highscores.removeChild(highscores.lastElementChild);
  }
})
