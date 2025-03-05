function playRound(humanChoice, computerChoice){
    function getComputerChoice() {
        computerChoice = Math.floor(Math.random() * 3);
        if (computerChoice === 0) {
            return "Rock";
        } else if (computerChoice === 1) {
            return "Paper";
        } else {
            return "Scissors"; 
        }
    } 
    console.log("Computers choice: " + getComputerChoice());
    
    function getHumanChoice() {
        humanChoice = prompt("Please enter your choice: ");
        if (humanChoice.toLowerCase() == "rock") {
            humanChoice = 0;
            return "Rock";
        } else if (humanChoice.toLowerCase() == "paper") {
            humanChoice = 1;
            return "Paper";
        } else {
            humanChoice = 2;
            return "Scissors";
        }
    }
    console.log("Your choice: "+ getHumanChoice())

    if (computerChoice == humanChoice) {
        console.log("Tie.");
    } else if (computerChoice === 0 && humanChoice === 2) {
        console.log("You lose! Rock beats Scissors.");
    } else if (computerChoice === 1 && humanChoice === 0){
        console.log("You lose! Paper beats Rock.");
    } else if (computerChoice === 2 && humanChoice === 1) {
        console.log("You lose! Scissors beat Paper.")
    } else {
        console.log("You Win");
    }
}
console.log(playRound());


let humanScore = 0;
let computerScore = 0;