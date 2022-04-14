const choice = ["Rock", "Paper" , "Scissors"];
const playerSelection = prompt("Rock, Paper, Scissors?");
const computerSelection = computerPlay ();
let playerScore = (0)
let computerScore = (0)


function computerPlay () {
  let random = Math.floor(Math.random() * 3);
  return choice[random];
}
function playRound () {
  if ((playerSelection == "Rock" && computerSelection == "Scissors") ||
   (playerSelection == "Paper" && computerSelection == "Rock") ||
    (playerSelection == "Scissors" && computerSelection == "Paper")) {
      playerScore += 1
      return ('You win');
    }

   else if (playerSelection == computerSelection) {
    return ("It's a Tie");}

   else {
     computerScore += 1
     return ("You Loose");
     
   }}
   




  console.log (playRound(playerSelection,computerSelection))