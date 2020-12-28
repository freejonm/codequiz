

var score = localStorage.getItem("score");
console.log(score);

var name = localStorage.getItem(("initials"));
var scoreBoard = [
  { "name" : JSON.stringify(name), 
    "score" : JSON.stringify(score)  
  }
]

var liTag = document.createElement("li");

liTag.textContent =  scoreBoard.name + " - " + scoreBoard.score;

var olEl = document.querySelector("#highscores");

olEl.appendChild(liTag);

var clear = document.querySelector("#clear");

clear.addEventListener("click", function(){
  while (highscores.lastElementChild){
    highscores.removeChild(highscores.lastElementChild);
  }
})
