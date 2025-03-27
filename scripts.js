function getComputerChoice() {
  let randomNumber = Math.random(); //generates a random number between 0 adn1
  
  if (randomNumber < 0.33) {
    return "rock";
  } else if (randomNumber < 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}
console.log(getComputerChoice());

function getHumanChoice() {
    let userChoice = prompt("Enter your choice(rock, paper, or scissors):")
    return userChoice;
}
console.log(getHumanChoice());

// let humanScore = 0;
// let computerScore = 0;

// function playRound(humanChoice, computerChoice) {}
