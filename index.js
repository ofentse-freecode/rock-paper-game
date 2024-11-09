//Function to randomly choose rock, paper, or scissors for the computer
/*function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}*/
var computerPlay = function(){
    var choices = ["paper", "rock", "scissors"] ;
  return computerChoice = choices[Math.floor(Math.random() * 3)];
 
}; //return computerCoice so it can be used in the next function
 /*computerPlay();*/

//var playerSelection="";

function playRound(playerSelection, computerChoice) {
    
    playerSelection = playerSelection.toLowerCase();
   // computerSelection = computerSelection.toLowerCase();

   if(playerSelection === computerChoice){
       result=`Its a tie ${playerSelection} : ${computerChoice}`
   }else if(playerSelection == null){
    result ="Be sure to enter a play";  }
   else{
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
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    console.log("Welcome to the Rock Paper Scissors Game!");
    console.log("First to win 5 rounds is the winner. Good luck!");

    for (let round = 1; round <= 5; round++) {
        
        console.log(`\nRound ${round}:`);
        
        let playerSelection = prompt("Enter your play Rock, Paper, or Scissors:");
        let computerSelection = computerPlay();
        
        let result = playRound(playerSelection, computerChoice);

        if (result === "You Win!!") {
            playerScore++;
            console.log(`You Win! ${capitalize(playerSelection)} beats ${capitalize(computerChoice)}`);
        } else if (result === "You Lose") {
            computerScore++;
            console.log(`You Lose! ${capitalize(computerChoice)} beats ${capitalize(playerSelection)}`);
        } 
        else {
            console.log(`It's a tie! Both chose ${capitalize(playerSelection)}`);
        }
        
        console.log(`Score: You ${playerScore} - ${computerScore} Computer`);
    }

    console.log("\nGame Over!");
    if (playerScore > computerScore) {
        console.log("Congratulations!! You Won the game! Reload page to play again.");
    } else if (computerScore > playerScore) {
        console.log("Sorry, you lost the game. Better luck next time! Reload page to play again.");
    } else {
        console.log("It's a draw! No one wins this time.");
    }
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

game();

