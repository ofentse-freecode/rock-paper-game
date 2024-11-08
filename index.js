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

var playerSelection="Rock";
//single play function. call in game input.

var playRound = function(playerSelection, computerChoice){
   playerSelection = playerSelection.toLowerCase();
  let result = "";

   if(playerSelection === computerChoice){
       alert(`Its a tie ${playerSelection} : ${computerChoice}`)
   }else{
       switch(playerSelection){
           case "rock":
               (computerChoice === "scissors") ? result = alert("You Win!! Rock beats Paper") : result = alert("You Lose : ( Paper beats Rock");
               break;
           case "paper":
                (computerChoice === "rock") ? result = alert("You Win!! Paper beats Rock") : result = alert("You Lose : ( Scissors beat Paper");
                break;
            case "scissors":
               (computerChoice === "paper") ? result = alert("You Win!! Scissors beat Rock") : result = alert("You Lose : ( Rock beats Scissors");
               break;
       }
   }
   return result

};
playRound(playerSelection, computerChoice);
