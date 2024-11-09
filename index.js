//Function to randomly choose rock, paper, or scissors for the computer
function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
/*var computerPlay = function(){
    var choices = ["paper", "rock", "scissors"] ;
  return computerChoice = choices[Math.floor(Math.random() * 3)];
 
}; //return computerCoice so it can be used in the next function
 computerPlay()*/

var playerSelection="";

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

   if(playerSelection === computerChoice){
       alert(`Its a tie ${playerSelection} : ${computerChoice}`)
   }else{
       switch(playerSelection){
           case "rock":
               (computerChoice === "scissors") ? result = "You Win!!" : result = "You Lose";
               break;
           case "paper":
                (computerChoice === "rock") ? result = "You Win!!" : result = "You Lose";
                break;
            case "scissors":
               (computerChoice === "paper") ? result = "You Win!!"  : result = "You Lose";
               break;
       }
   }
   return result;

function game() {
    let playerScore = 0;
    let computerScore = 0;

    console.log("Welcome to the Rock Paper Scissors Game!");
    console.log("First to win 5 rounds is the winner. Good luck!");

    for (let round = 1; round <= 5; round++) {
        
        console.log(`\nRound ${round}:`);
        
        let playerSelection = prompt("Enter Rock, Paper, or Scissors:");
        let computerSelection = computerPlay();
        
        let result = playRound(playerSelection, computerSelection);

        if (result === "win") {
            playerScore++;
            console.log(`You Win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`);
        } else if (result === "lose") {
            computerScore++;
            console.log(`You Lose! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`);
        } else {
            console.log(`It's a tie! Both chose ${capitalize(playerSelection)}`);
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

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

game();



//try this before deciding
/*//  Function to randomly choose rock, paper, or scissors for the computer
function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

//  Function to play a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
    // making both selections to lowercase for case-insensitivity
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    // Comparing choices and determine the result
    if (playerSelection === computerSelection) {
        return `It's a tie! You both chose ${playerSelection}.`;
    }

    switch (playerSelection) {
        case 'rock':
            return (computerSelection === 'scissors') ? "You win! Rock beats scissors." : "You lose! Paper beats rock.";
        case 'paper':
            return (computerSelection === 'rock') ? "You win! Paper beats rock." : "You lose! Scissors beats paper.";
        case 'scissors':
            return (computerSelection === 'paper') ? "You win! Scissors beats paper." : "You lose! Rock beats scissors.";
        default:
            return "Invalid selection. Please choose rock, paper, or scissors.";
    }
}


//  Game function to play 5 rounds and keep score
function game() {
    let playerScore = 0;
    let computerScore = 0;
    let rounds = 5;

    for (let i = 0; i < rounds; i++) {
        // Get user input using prompt
        let playerSelection = prompt(`Round ${i + 1}: Choose rock, paper, or scissors`).trim();

        // Ensure input is valid
        if (!['rock', 'paper', 'scissors'].includes(playerSelection.toLowerCase())) {
            alert("Invalid input. Please enter rock, paper, or scissors.");
            i--; // Decrease counter to retry this round
            continue;
        }

        // Get computer's random choice
        let computerSelection = computerPlay();
        
        // Play round and get result
        let result = playRound(playerSelection, computerSelection);
        alert(result); // Show the round result

        // Update scores based on the result
        if (result.includes("win")) {
            playerScore++;
        } else if (result.includes("lose")) {
            computerScore++;
        }

        // Display current score after each round
        alert(`Current score: You - ${playerScore} | Computer - ${computerScore}`);
    }

    // Announce the winner after 5 rounds
    if (playerScore > computerScore) {
        alert(`You win the game! Final score: You - ${playerScore} | Computer - ${computerScore}`);
    } else if (playerScore < computerScore) {
        alert(`You lose the game! Final score: You - ${playerScore} | Computer - ${computerScore}`);
    } else {
        alert(`It's a tie game! Final score: You - ${playerScore} | Computer - ${computerScore}`);
    }
}

// Call the game function to start the game
game();*/