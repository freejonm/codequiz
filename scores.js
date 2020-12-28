var addBtn = document.querySelector("#add");
var score = localStorage.getItem("score");

var scoreBoard = [];

addBtn.addEventListener("click", function(){
  var initials = prompt("Please enter your initials");

  var UserObject = {
    "name" : initials,

    "score" : score
}
  localStorage.setItem("entry", JSON.stringify(UserObject));
  scoreBoard.push(UserObject);
  localStorage.setItem("scoreboard", JSON.stringify(scoreBoard));
  console.log(scoreBoard.length);
});




// var liTag = document.createElement("li");

// liTag.textContent =  scoreBoard.UserObject.name;

// var olEl = document.querySelector("#highscores");

// olEl.appendChild(liTag);

// var clear = document.querySelector("#clear");

// clear.addEventListener("click", function(){
//   while (highscores.lastElementChild){
//     highscores.removeChild(highscores.lastElementChild);
//   }
// })
