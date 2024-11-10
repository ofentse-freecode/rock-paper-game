function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

let playerSelection = prompt("Enter Rock, Paper, or Scissors:");

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection && playerSelection.toLowerCase();
    computerSelection = computerSelection && computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return `Its a tie ${playerSelection} : ${computerChoice}`;
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")
    ) {
        return "win";
    } else {
        return "lose";
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    console.log("Welcome to the Rock Paper Scissors Game!");
    console.log("First to win 5 rounds is the winner. Good luck!");

    for (let round = 1; round <= 5; round++) {
        
        console.log(`\nRound ${round}:`);
        
        let computerSelection = computerPlay();
        
        let result = playRound(playerSelection, computerSelection);

        if (result === "win") {
            playerScore++;
            console.log(`You Win! ${(playerSelection)} beats ${(computerSelection)}`);
        } else if (result === "lose") {
            computerScore++;
            console.log(`You Lose! ${(computerSelection)} beats ${(playerSelection)}`);
        } else {
            console.log(`It's a tie! Both chose ${(playerSelection)}`);
        }
        
        console.log(`Score: You ${playerScore} - ${computerScore} Computer`);
    }

    console.log("\nGame Over!");
    if (playerScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else if (computerScore > playerScore) {
        console.log("Sorry, you lost the game. Better luck next time!");
    } else {
        console.log("It's a draw! No one wins this time.");
    }
}
game();
