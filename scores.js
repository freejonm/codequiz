
var hsInitials = localStorage.getItem("initials");
var hsScore = localStorage.getItem("score");
console.log(hsInitials);
console.log(hsScore);

var liTag = document.createElement("li");
liTag.textContent = hsInitials + " - " + hsScore;

var olEl = document.querySelector("#highscores");
olEl.appendChild(liTag);

var clear = document.querySelector("#clear");
clear.addEventListener("click", function(){
  while (highscores.lastElementChild){
    highscores.removeChild(highscores.lastElementChild);
  }
})
