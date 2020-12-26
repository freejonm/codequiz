
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
// sort highscores by score property in descending order

// highscores.sort(function(a, b) {
//   return b.score - a.score;
// });

// highscores.forEach(function(score) {
//   // create li tag for each high score
//   var liTag = document.createElement("li");
//   liTag.textContent = score.initials + " - " + score.score;

//   // display on page
//   var olEl = document.getElementById("user");
//   olEl.appendChild(liTag);
// });

// document.getElementById("clear").addEventListener("click", function() {
//   window.localStorage.removeItem("user");
//   window.location.reload();
// });
