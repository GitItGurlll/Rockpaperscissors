console.log("h")
let compChoice = ""
function getComputerChoice(compChoice) {
    console.log("h")
    let randomNumber = Math.floor((Math.random() * (3)));
  if (randomNumber == 1) {
    compChoice = "scissors"
} else if (randomNumber == 2) {
    compChoice = "rock"
} else {
    compChoice = "paper"
}
console.log(randomNumber)
return compChoice;
}

function oneround() {
    compChoice = getComputerChoice()
    console.log(compChoice)
    if (playerChoice === compChoice) {
        return("tie!")
    } else if (playerChoice === "rock" && compChoice === "scissors") {
        console.log("You win!")
    } else if (playerChoice === "scissors" && compChoice === "paper") {
        console.log("You win!")
    } else if (playerChoice === "paper" && compChoice === "rock") {
        console.log("You win!")
    } else {
        console.log("you lost")
    }
    console.log(playerChoice)
}
 
console.log(compChoice)
let  playerChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();
console.log(oneround())
