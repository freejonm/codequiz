
var user = 
  {
    name : localStorage.getItem("initials"),

    score : localStorage.getItem("score") 

  }


console.log(user.name);
console.log(user.score);

var liTag = document.createElement("li");

liTag.textContent =  user.name + " - " + user.score;

var olEl = document.querySelector("#highscores");

olEl.appendChild(liTag);

var clear = document.querySelector("#clear");

clear.addEventListener("click", function(){
  while (highscores.lastElementChild){
    highscores.removeChild(highscores.lastElementChild);
  }
})
