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
        return 'Invalid input! Please enter rock or paper or scissors !!'// this warnig has to appear in the alert popup
    }
    else{

        return `You Lose! ${(computerSelection)} beats ${(playerSelection)}`;

    }
}


function game() {
    alert("Hello guys, I’ve hacked this browser, Welcome to the game of ROCK, PAPER or SCISSORS :)");
      //Hello Humans I have taken control of this code and the only way to defeat me is by accepting my challage to play the rock paper scissors game, the rules are simple whoever wins the game owns the code forever HAHAHAHAHA
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 1; i <= 5; i++) {

        const playerSelection = getPlayerSelection();
        if (playerSelection === "exit") { 
            console.log("Game canceled by player!");//instead of console.log(we can alert(aaah You leaving so soon!!! weakingly Human you could not comprehent my power as an AI thats why you coward in fear and decided to leave the game . HHAHAHAHAHA im so awesome))
            return; 
        }

        const computerSelection = computerPlay();
        const result = playRound(playerSelection, computerSelection);
        console.log(`Round ${i}: ${result}`);

        if (result.includes("Win")) {
            playerScore++; // if player wins congratulate them with an alert(AAAAAHHHHH !!! you have defeated me, i should have not under estimate your knowledge but know i will return HAHAHAHAHAH)
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

