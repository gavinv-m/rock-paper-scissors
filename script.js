playRound(getComputerChoice, playerSelection);

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
    
    if (playerChoice === computerChoice) {
        console.log(`Draw! You both chose ${computerChoice}.`);
    }

    else if (playerChoice === 'Rock') {
        if (computerChoice === 'Scissors') {
            console.log(`You win ${playerChoice} beats ${computerChoice}.`);
        }
        
        else {
            console.log(`You lose ${computerChoice} beats ${playerChoice}.`);
        }
    }

    else if (playerChoice === 'Paper') {
        if (computerChoice === 'Rock') {
            console.log(`You win ${playerChoice} beats ${computerChoice}.`);
        }

        else {
            console.log( `You lose ${computerChoice} beats ${playerChoice}.`);
        }
    }

    // playerChoice equals Scissors
    else {
        if (computerChoice === 'Paper') {
            console.log(`You win ${playerChoice} beats ${computerChoice}.`); 
        }

        else {
            console.log(`You lose ${computerChoice} beats ${playerChoice}.`);
        }
    }
}

