

localStorage.setItem("scoreBoard", scoreBoard);
var scoreBoard = [];

var score = localStorage.getItem("score");

var initials = prompt("Please enter your initials");

var UserObject = {

    "name" : initials,

    "score" : score
};




scoreBoard.push(UserObject);

console.log(JSON.stringify(scoreBoard));


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
