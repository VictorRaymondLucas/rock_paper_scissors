


// Function that will randomly return a choice for the computer

function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors']
    return choices [Math.floor(Math.random() * 3)]
}

// A function that plays a single round of Rock Paper Scissors

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'You tied!'
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You won! Rock beats scissors!'
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You lose! Paper beats rock!'
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You win! Paper beats rock!'
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You lose! Scissors beats paper!'
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You win! Scissors beats paper!'
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You lose! Rock beats scissors!'
    } 
}

// Function that plays 5 games with the playerSelection case-insensitive

function game() {
  const playerSelection = prompt('rock, paper, scissors').toLowerCase()
  for (let i = 0; i < 5; i++) {
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
  }
}

