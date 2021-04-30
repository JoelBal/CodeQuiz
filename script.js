var StartButton = document.getElementById("start")
var timer = document.getElementById("timer")
var StartScreen = document.querySelector(".start")
var timerInterval;
var secondsLeft = 20

function start() {
  setTime()
}
StartButton.addEventListener("click", function () {
  StartScreen.classList.add("hide")
  timer.classList.remove("hide")
  start()
})
function setTime() {
  // Sets interval in variable
  timerInterval = setInterval(function () {
    secondsLeft--;
    timer.textContent = secondsLeft + " Seconds to Answer Questions ";
      if (secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        GameOver();
      }

    }, 1000);
}



var inputs = document.querySelectorAll("input")
console.log (inputs)
var correct = 0;
var wrong = 0;
// if (userChoice === computerChoice) {
//   ties++;
//   window.alert("Correct");
inputs.forEach(function(input){
  input.addEventListener("click", myFunction)
})
function myFunction() {
  console.log(this);
  if(this.value === "Correct"){
    correct++;
    alert ("Correct");
  }
  else {
  wrong++;
  alert ("Wrong");
}}
// var Answer1 = document.getElementById("a15")

// document.getElementById("a15").addEventListener("click", myFunction);

// var Answer2 = document.getElementById("a32")
// document.getElementById("a32").addEventListener("click", myFunction);

// var Answer3 = document.getElementById("a7")
// document.getElementById("a7").addEventListener("click", myFunction);

// var Answer4 = document.getElementById("a88")
// document.getElementById("a88").addEventListener("click", myFunction);

// var Answer5 = document.getElementById("a60")
// document.getElementById("a60").addEventListener("click", myFunction);

// var Answer6 = document.getElementById("a672")
// document.getElementById("a672").addEventListener("click", myFunction);



function GameOver() {
  var Initials = prompt("You're Score is " + correct + ". Enter Initials Here")
  localStorage.setItem("Final Score", Initials);
  console.log(Initials)
}
