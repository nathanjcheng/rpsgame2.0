let userScore = 0;
let computerScore = 0;
const userScorespan = document.getElementById("userscore");
const computerScorespan = document.getElementById("computerscore");
const scoreboarddiv = document.getElementById(".scoreboard");
const rockdiv = document.getElementById("r");
const paperdiv = document.getElementById("p");
const scissorsdiv = document.getElementById("s");
//cached the dom
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissor'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
  }
  
  function win(userChoice, computerChoice) {
    userScore++;
    userScorespan.innerHTML = userScore;
    console.log( userChoice + " beats " + computerChoice + ". You win!");
    console.log("win");
  }
  
  function lose(userChoice, computerChoice) {
    computerScore++;
    computerScorespan.innerHTML = computerScore;
    console.log(computerChoice + " beats " + userChoice + ". You lose!");
    console.log("lose");
  }
  
  function draw(userChoice, computerChoice) {
    console.log(computerChoice + " is the same as " + userChoice + ". It is a tie!");
  }
  
  function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){
      case "rockscissor":
      case "paperrock":
      case "scissorpaper":
        win(userChoice, computerChoice);
      break;
      case "rockpaper":
      case "paperscissor":
      case "scissorrock":
        lose(userChoice, computerChoice);
      break;
      case "rockrock":
      case "paperpaper":
      case "scissorscissor":
        draw(userChoice, computerChoice);
      break;
    }
  }
  
  function main() {
  rockdiv.addEventListener('click', function(){
      game("rock");
    })
    paperdiv.addEventListener('click', function(){
      game("paper");
    })
    scissorsdiv.addEventListener('click', function(){
      game("scissor");
    })
  }
  main();