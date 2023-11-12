// Global Variables 
let getComputerChoice;
let playerSelection;

function game(round) {

    let computerScore = 0;
    let playerScore = 0; 

    for (let i = 0; i < 5; i++) {

        scores = round(getComputerChoice, playerSelection);
        
        computerScore += scores[0];
        playerScore += scores[1]; 
    }
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
            playerSelection;
    }

    return playerChoice;
}

function playRound(computer, player) {

    const computerChoice = computer();
    const playerChoice = player();

    let computerPoint = 0; 
    let playerPoint = 0; 
    let points = [computerPoint, playerPoint]; 
    
    if (playerChoice === computerChoice) {
        console.log(`Draw! You both chose ${computerChoice}.`);
        return points; 
    }

    else if (playerChoice === 'Rock') {
        if (computerChoice === 'Scissors') {
            console.log(`You win ${playerChoice} beats ${computerChoice}.`);
            playerPoint++;
            return points;
        }
        
        else {
            console.log(`You lose ${computerChoice} beats ${playerChoice}.`);
            computerPoint++;
            return points;
        }
    }

    else if (playerChoice === 'Paper') {
        if (computerChoice === 'Rock') {
            console.log(`You win ${playerChoice} beats ${computerChoice}.`);
            playerPoint++;
            return points;
        }

        else {
            console.log( `You lose ${computerChoice} beats ${playerChoice}.`);
            computerPoint++;
            return points;
        }
    }

    // playerChoice equals Scissors
    else {
        if (computerChoice === 'Paper') {
            console.log(`You win ${playerChoice} beats ${computerChoice}.`);
            playerPoint++;
            return points;
        }

        else {
            console.log(`You lose ${computerChoice} beats ${playerChoice}.`);
            computerPoint++;
            return points;
        }
    }
}

game(playRound); 
