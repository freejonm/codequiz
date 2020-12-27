
const userScores = localStorage.getItem("scoreBoard");
console.log(userScores);


var liTag = document.createElement("li");

liTag.textContent =  highScores;

var olEl = document.querySelector("#highscores");

olEl.appendChild(liTag);

var clear = document.querySelector("#clear");

clear.addEventListener("click", function(){
  while (highscores.lastElementChild){
    highscores.removeChild(highscores.lastElementChild);
  }
})
