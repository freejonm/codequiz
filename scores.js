
var name = localStorage.getItem(("initials"));
var score = localStorage.getItem("score");


var liTag = document.createElement("li");

liTag.textContent =  name + " - " + score;

var olEl = document.querySelector("#highscores");

olEl.appendChild(liTag);

var clear = document.querySelector("#clear");

clear.addEventListener("click", function(){
  while (highscores.lastElementChild){
    highscores.removeChild(highscores.lastElementChild);
  }
})
