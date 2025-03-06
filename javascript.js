function playGame() {
    let humanScore = 0;
    let computerScore = 0;

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
            computerScore++;
            console.log("You lose! Rock beats Scissors.");
        } else if (computerChoice === 1 && humanChoice === 0){
            computerScore++;
            console.log("You lose! Paper beats Rock.");
        } else if (computerChoice === 2 && humanChoice === 1) {
            computerScore++;
            console.log("You lose! Scissors beat Paper.")
        } else {
            humanScore++;
            console.log("You Win");
        }   
    }

    for (let i = 0; i < 5; i++) {
        playRound();
        console.log("Your score: " + humanScore);
        console.log("Computer Score: " + computerScore);
    }
}
playGame();