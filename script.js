console.log("h")
let compChoice = ""
function getComputerChoice(compChoice) {
    console.log("h")
    let randomNumber = Math.floor((Math.random() * (2)) + 1);
  if (randomNumber == 1) {
        console.log("h")
    compChoice = "scissors"
} else if (randomNumber == 2) {
    console.log("h")
    compChoice = "rock"
} else {
    console.log("h")
    compChoice = "paper"
}
console.log(randomNumber)
return compChoice;
}

function oneround() {
    let  playerChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();
    if ((playerChoice == "rock") && (compChoice == "scissors")) {
        console.log("You win!")
    } else {
        console.log("you lost")
    }
    console.log(playerChoice)
}
 
console.log(getComputerChoice(compChoice))
console.log(oneround())
