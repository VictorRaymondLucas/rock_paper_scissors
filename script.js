


// Function that will randomly return a choice for the computer

function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors']
    return choices [Math.floor(Math.random() * 3)]
}

console.log(getComputerChoice())