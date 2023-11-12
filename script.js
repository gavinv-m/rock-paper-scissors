// Global Variables 
let getComputerChoice;
let playerSelection;

function game(round) {

    let computerScore = 0;
    let playerScore = 0;

    for (let i = 0; i < 5; i++) {

        let scores = round(getComputerChoice, playerSelection);
        
        computerScore += scores[0];
        playerScore += scores[1]; 
    }

    return decision = (computerScore === playerScore) ? `Its a Draw!` :
    (playerScore > computerScore) ? `You win ${playerScore} - ${computerScore}!` :
    (computerScore > playerScore) ? `You lose ${playerScore} - ${computerScore}` :
    null;
}

getComputerChoice = function() {
    let computerSelection;
    
    // Generate random number between 1 & 3 
    let min = 1, max = 3; 
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    // Set Selection 
    computerSelection = (randomNumber === 1) ? 'Rock' :
    (randomNumber === 2) ? 'Paper' : 'Scissors';

    return computerSelection;
}

playerSelection = function() {
    let playerChoice = prompt('Rock, Paper, or Scissors?');

    // Capitalize the first letter
    playerChoice = playerChoice.toLowerCase().charAt(0).toLocaleUpperCase() + playerChoice.toLowerCase().slice(1);

    // Check for spelling errors
    let referenceString = 'Rock',
    referenceString1 = 'Paper', 
    referenceString2 = 'Scissors';

    switch(playerChoice) {
        case referenceString:
            break; 
            
        case referenceString1:
            break;

        case referenceString2:
            break; 

        default:
            alert('Please enter a correctly spelled option')
            playerSelection();
    }

    return playerChoice;
}

function playRound(computer, player) {

    const computerChoice = computer();
    const playerChoice = player();

    let computerPoint = 0; 
    let playerPoint = 0; 
    let points = []; 
    
    if (playerChoice === computerChoice) {
        console.log(`Draw! You both chose ${computerChoice}.`); 
    }

    else if (playerChoice === 'Rock') {

        computerChoice === 'Scissors' ? 
        (console.log(`You win ${playerChoice} beats ${computerChoice}.`), 
        playerPoint++) :
        (console.log(`You lose ${computerChoice} beats ${playerChoice}.`), 
        computerPoint++);
    }

    else if (playerChoice === 'Paper') {

        computerChoice === 'Rock' ? 
        (console.log(`You win ${playerChoice} beats ${computerChoice}.`), 
        playerPoint++) : 
        (console.log(`You lose ${computerChoice} beats ${playerChoice}.`), 
        computerPoint++);
    }

    // playerChoice equals Scissors
    else {
        
        computerChoice === 'Paper' ? 
        (console.log(`You win ${playerChoice} beats ${computerChoice}.`), 
        playerPoint++) : 
        (console.log(`You lose ${computerChoice} beats ${playerChoice}.`), 
        computerPoint++);

    }

    points = [computerPoint, playerPoint];
    return points;
}

console.log(game(playRound)); 
