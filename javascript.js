document.addEventListener('DOMContentLoaded', function () {
    const rockBtn = document.querySelector('#rock');
    const paperBtn = document.querySelector('#paper');
    const scissorsBtn = document.querySelector('#scissors');
    const computerChoiceContainer = document.querySelector('#computer-choice');
    const resultContainer = document.querySelector('#result');
    const scoreContainer = document.querySelector('#score');

    let humanScore = 0;
    let computerScore = 0;

    rockBtn.addEventListener('click', () => playRound("Rock"));
    paperBtn.addEventListener('click', () => playRound("Paper"));
    scissorsBtn.addEventListener('click', () => playRound("Scissors")); 

    function getComputerChoice() {
        const choiceTextContainer = document.createElement('p');
        const randomNum = Math.floor(Math.random() * 3);
        let choice;

        if (randomNum === 0) {
            choice = "Rock";
        } else if (randomNum === 1) {
            choice = "Paper";
        } else {
            choice = "Scissors";
        }

        choiceTextContainer.textContent = `Computer choice: ${choice}`;
        computerChoiceContainer.innerHTML = ''; // limpia antes de mostrar
        computerChoiceContainer.appendChild(choiceTextContainer);

        return choice;
    }

    function playRound(humanChoice) {
        if (humanScore >= 5 || computerScore >= 5) 
        return;

        const computerChoice = getComputerChoice();
        let result;

        if (humanChoice === computerChoice) {
            result = "It's a tie";
        } else if (
            (humanChoice === "Rock" && computerChoice === "Scissors") ||
            (humanChoice === "Paper" && computerChoice === "Rock") ||
            (humanChoice === "Scissors" && computerChoice === "Paper")
        ) {
            result = "You win this round!";
            humanScore++;
        } else {
            result = "You lose this round!";
            computerScore++;
        }

        resultContainer.textContent = result;
        scoreContainer.textContent = `Score - You: ${humanScore} | Computer: ${computerScore}`;

         if (humanScore === 5 || computerScore === 5) {
            declareWinner();
        }

        function declareWinner() {
            let finalMessage;
            if (humanScore > computerScore) {
                finalMessage = "You win the game!";
            } else {
                finalMessage = "Computer wins the game!";
            }

            resultContainer.textContent = finalMessage;

            // Desactivar botones
            rockBtn.disabled = true;
            paperBtn.disabled = true;
            scissorsBtn.disabled = true;
        }
    }
});
