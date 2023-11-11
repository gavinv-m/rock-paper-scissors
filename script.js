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

function playerSelection() {
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
    let decision;
    
    if (playerChoice === computerChoice) {
        return decision = `Draw! You both chose ${computerChoice}.`;
    }

    else if (playerChoice === 'Rock') {
        return decision = 
        (computerChoice === 'Scissors') ? `You win ${playerChoice} beats ${computerChoice}.` :
        (computerChoice === 'Paper') ? `You lose ${computerChoice} beats ${playerChoice}.` : 
        null; 
    }

    else if (playerChoice === 'Paper') {
        return decision = 
        (computerChoice === 'Rock') ? `You win ${playerChoice} beats ${computerChoice}.` :
        (computerChoice === 'Scissors') ? `You lose ${computerChoice} beats ${playerChoice}.` : 
        null;
    }

    else (playerChoice === 'Scissors') {
        return decision = 
        (computerChoice === 'Paper') ? `You win ${playerChoice} beats ${computerChoice}.` :
        (computerChoice === 'Rock') ? `You lose ${computerChoice} beats ${playerChoice}.` :
        null;
    }
}

console.log(playRound(getComputerChoice, playerSelection));