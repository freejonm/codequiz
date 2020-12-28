
var score = localStorage.getItem("score");

var initials = prompt("Please enter your initials");

var UserObject = {
  "name" : initials,

  "score" : score
}

var scoreBoard = [];

function setScore(){
  confirm("Click ok to save");
  localStorage.setItem("entry", JSON.stringify(UserObject));
  scoreBoard.push(UserObject);
  localStorage.setItem("scoreboard", JSON.stringify(scoreBoard));
  console.log(scoreBoard.length);
}

setScore();








// var UserObject = {

//     "name" : initials,

//     "score" : score
// };


// scoreBoard.push(UserObject);

// console.log(JSON.stringify(UserObject.name));
// console.log(scoreBoard.length);






// var liTag = document.createElement("li");

// liTag.textContent =  scoreBoard.name + " - " + score;

// var olEl = document.querySelector("#highscores");

// olEl.appendChild(liTag);

// var clear = document.querySelector("#clear");

// clear.addEventListener("click", function(){
//   while (highscores.lastElementChild){
//     highscores.removeChild(highscores.lastElementChild);
//   }
// })
