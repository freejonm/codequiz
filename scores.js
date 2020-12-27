

var user = JSON.parse(localStorage.getItem("username"));

console.log(user);


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
