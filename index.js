





var playerSelection="Rock";
//single play function

var playRound = function(playerSelection, computerChoice){
   playerSelection = playerSelection.toLowerCase();
   let result = "";

   if(playerSelection === computerChoice){
       alert(`Its a tie ${playerSelection} : ${computerChoice}`)
   }else{
       switch(playerSelection){
           case "rock":
               (computerChoice === "scissors") ? alert("You Win!! Rock beats Paper") : alert("You Lose : ( Paper beats Rock");
               break;
           case "paper":
                (computerChoice === "rock") ? alert("You Win!! Paper beats Rock") : alert("You Lose : ( Scissors beat Paper");
                break;
            case "scissors":
               (computerChoice === "paper") ? alert("You Win!! Scissors beat Rock") : alert("You Lose : ( Rock beats Scissors");
               break;
       }
   }
   //replace alert with result??
};
playRound(playerSelection, computerChoice);