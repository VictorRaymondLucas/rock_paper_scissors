// define constants for rock, paper, scissors
const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

// initialize scores
let playerScore = 0
let computerScore = 0

// get DOM elements
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const playerScoreElement = document.getElementById("scorePlay");
const computerScoreElement = document.getElementById("scoreComp");

// add click event listeners to buttons
rockButton.addEventListener("click", function() {
    playRound(ROCK);
  });
  
  paperButton.addEventListener("click", function() {
    playRound(PAPER);
  });
  
  scissorsButton.addEventListener("click", function() {
    playRound(SCISSORS);
  });

// A function that plays a single round of Rock Paper Scissors
function playRound(playerSelection) {
  // generate computer's selection randomly
  const computerSelection = getComputerChoice();

  // determine winner
  let winner;
  if (playerSelection === computerSelection) {
    winner = "tie";
  } else if (
    (playerSelection === ROCK && computerSelection === SCISSORS) ||
    (playerSelection === PAPER && computerSelection === ROCK) ||
    (playerSelection === SCISSORS && computerSelection === PAPER)
  ) {
    winner = "player";
  } else {
    winner = "computer";
  }

  // update scores
  if (winner === "player") {
    playerScore++;
  } else if (winner === "computer") {
    computerScore++;
  }

  // update score display
  playerScoreElement.textContent = playerScore;
  computerScoreElement.textContent = computerScore

  // Disable all the buttons
  if (computerScore === 5 || playerScore === 5) {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
  }

  // display result
  let result;
  if (winner === "tie") {
    result = "It's a tie!";
  } else if (winner === "player") {
    result = "You win!";
  } else {
    result = "Computer wins!";
  }

  let message;
  if (computerScore === 5) {
    message = "The computer got 5. Reload the page to play again.";
  } else if (playerScore === 5) {
      message = "You got 5. Reload the page to play again.";
  } else {
    message = "";
  }

  // display result below score

  document.getElementById('result').innerHTML = result + ' ' + message
  return  
}

// Function that will randomly return a choice for the computer
function getComputerChoice() {
  let choices = [ROCK,PAPER,SCISSORS]
  return choices [Math.floor(Math.random() * 3)]
}


/*

// Function that plays 5 games with the playerSelection case-insensitive
function game() {
  const playerSelection = propt('rock, paper, scissors').toLowerCase()
  for (let i = 0; i < 5; i++) {
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
  }


  // Added this part to keep score, along with two variables at the top of the script and ++ in the playRound function

  if (playerScore < computerScore) {
    return 'You beat the computer! Hazzah!'
  } else if (playerScore > computerScore) {
    return 'The computer wins! Noooo!'
  } else {
    return 'You tied...boring!'
  }
}

*/
