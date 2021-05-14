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



function GameOver() {
  var Initials = prompt("You're Score is " + correct + ". Enter Initials Here")
  localStorage.setItem("Final Score", Initials);
  console.log(Initials)
}
