//Function to randomly choose rock, paper, or scissors for the computer
function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

var playerSelection="";
//single play function

var playRound = function(playerSelection, computerChoice){
   playerSelection = playerSelection.toLowerCase();
  let result = "";//computerChoice = computerChoice.toLowerCase();

   if(playerSelection === computerChoice){
       alert(`Its a tie ${playerSelection} : ${computerChoice}`)
   }else{
       switch(playerSelection){
           case "rock":
               (computerChoice === "scissors") ? alert("You Win!! Rock beats Paper") : alert("You Lose : ( Paper beats Rock");
               break;
               /* case 'rock':
            return (computerChoice === 'scissors') ? "You win! Rock beats scissors." : "You lose! Paper beats rock.";
     */
           case "paper":
                (computerChoice === "rock") ? alert("You Win!! Paper beats Rock") : alert("You Lose : ( Scissors beat Paper");
                break;
            case "scissors":
               (computerChoice === "paper") ? alert("You Win!! Scissors beat Rock") : alert("You Lose : ( Rock beats Scissors");
               break;
       }
   }
   //replace alert with result??
   //rather return the whole thing ( i left an example below the first break)
};
playRound(playerSelection, computerChoice);
