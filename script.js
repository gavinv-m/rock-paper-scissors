function getComputerChoice() {
    let computerSelection;
    
    // Generate random number between 1 & 3 
    let min = 1, max = 3; 
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    // Set Selection 
    computerSelection = (randomNumber === 1) ? 'Rock' :
    (randomNumber === 2) ? 'Paper' : 'Scissors';

    return computerSelection;
}
