




var score = localStorage.getItem("score");

var initials = prompt("Please enter your initials");

var scoreBoard = [];


if(scoreBoard.length === 0){
  scoreBoard[0] = initials;
  localStorage.setItem("scoreBoard", scoreBoard);
}
else{
  scoreBoard.push(initials);
}

console.log(scoreBoard);






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
