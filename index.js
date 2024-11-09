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
//single play function. call in game input.

var playRound = function(playerSelection, computerChoice){
   playerSelection = playerSelection.toLowerCase();
  let result = "";

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

};
playRound(playerSelection, computerChoice);


