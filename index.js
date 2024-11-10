function computerPlay() {
    const choices = ["Rock", "Paper", "Scissors"];
    const  Choice = choices[Math.floor(Math.random() * choices.length)];
    return Choice;
}

function getPlayerSelection() {

    const Inputselection = prompt("Enter Rock, Paper, or Scissors:");

     if (Inputselection === null) {
        return "exit"; 
    }
    return Inputselection;
}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection?.toLowerCase();
    computerSelection = computerSelection?.toLowerCase();

    if (playerSelection === computerSelection) {
        return `It's a tie! Both chose ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}`;
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")
    ) {
        return `You Win! ${(playerSelection)} beats ${(computerSelection)}`;

    } else if(playerSelection == undefined || !["rock", "paper", "scissors"].includes(playerSelection)){
        return 'Invalid input! Please enter rock or paper or scissors !!'
    }
    else{

        return `You Lose! ${(computerSelection)} beats ${(playerSelection)}`;

    }
}


function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 1; i <= 5; i++) {

        const playerSelection = getPlayerSelection();
        if (playerSelection === "exit") {
            console.log("Game canceled by player!");
            return; 
        }

        const computerSelection = computerPlay();
        const result = playRound(playerSelection, computerSelection);
        console.log(`Round ${i}: ${result}`);

        if (result.includes("Win")) {
            playerScore++;
        } else if (result.includes("Lose")) {
            computerScore++;
        }
    }

    console.log("\nGame Over!");
    if (playerScore > computerScore) {
        console.log(`Congratulations! You won the game with a score of ${playerScore} to ${computerScore}`);
    } else if (computerScore > playerScore) {
        console.log(`Sorry! You lost the game. Final score: ${computerScore} to ${playerScore}`);
    } else {
        console.log("It's a tie! Good luck next time!");
    }
}

game();

