
 let choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
  }
}

 console.log(getComputerChoice());

function getUserChoice (userInput) {
  prompt(userInput = '')
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    console.log("Error!!!");
  }
};
 console.log(getUserChoice());

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock") {
    if (computerChoice === "paper") {
      return "The computer won!";
    } else {
      return "You won!";
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "scissors") {
      return "The computer won!";
    } else {
      return "You won!";
    }
  }
  if (humanChoice === "scissors");
  {
    if (computerChoice === "rock") {
      return "The computer won!";
    } else {
      return "You won!";
    }
  }
}
const humanSelection = getUserChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

// if (getUserChoice === getComputerChoice) {
//   return "the game is a tie!";
// } else {
//   return "You won!";
// }

function playGame() {
  let userChoice = getUserChoice('scissors');
  let computerChoice = getComputerChoice();
  console.log("You threw: " + userChoice);
  console.log("The computer threw: " + computerChoice);
  console.log(playRound(userChoice, computerChoice));
}
playGame();