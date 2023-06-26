console.log("h")
let compChoice = ""
function getComputerChoice(compChoice) {
    console.log("h")
    let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber == 1) {
        console.log("h")
    compChoice = "Scissors"
} else if (randomNumber == 2) {
    console.log("h")
    compChoice = "Rock"
} else {
    console.log("h")
    compChoice = "Paper"
}
console.log(randomNumber)
console.log(compChoice)
}

console.log(getComputerChoice(compChoice))
