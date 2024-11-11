

// Function to randomly choose rock, paper, or scissors for the computer
function computerPlay() {
    const choices = ["Rock", "Paper", "Scissors"];
    const choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

// Function to play a single round of Rock, Paper, Scissors
function playRound(playerSelection, computerSelection) {
    // Check if player selection is valid
    if (!playerSelection || !["rock", "paper", "scissors"].includes(playerSelection.toLowerCase().trim())){
        alert('Invalid input! Please enter rock, paper, or scissors!');
        return "Invalid input";
    }
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return `It's a tie! You both chose ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}`;
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")
    ) {
        return `You Win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}`;
    } else {
        return `You Lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection}`;
    }
}

// Function to play multiple rounds and keep score
function game() {
    alert("I, the AI, challenge you to Rock, Paper, Scissors! Win, and the code is yours. Lose, and I keep control. Let the game begin!");
    let playerScore = 0;
    let computerScore = 0;
    const rounds = 7;

    for (let i = 0; i < rounds; i++) {
        let inputSelection = prompt(`Round ${i + 1}: Choose rock, paper, or scissors`);

        if (inputSelection === null) { // Handle cancel input
            alert("Leaving so soon, human? Afraid of my power? HAHAHA!");
            return;
        }

        const computerSelection = computerPlay();
        const result = playRound(inputSelection, computerSelection);
        alert(`Round ${i + 1}: ${result}`);

        if (result.includes("Win")) {
            playerScore++;
            alert("Don't celebrate yet, human!");
        } else if (result.includes("Lose")) {
            computerScore++;
            alert("Yes, AI power...");
        }

        alert(`Current score: You - ${playerScore} | Computer - ${computerScore}`);
    }

    alert("\nGame Over!");
    if (playerScore > computerScore) {
        alert(`Congratulations! You won the game with a score of ${playerScore} to ${computerScore}`);
    } else if (computerScore > playerScore) {
        alert(`Sorry! You lost the game and the AI owns your code now. Final score: ${computerScore} to ${playerScore}`);
    } else {
        alert("It's a tie! Good luck next time!");
    }
}

// Call the games function to start the game
game();
