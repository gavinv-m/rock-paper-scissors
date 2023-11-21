let setComputerChoice;
let playerChoice;

const paragraphText = document.getElementById('decision');
const computerScoreBoardScore = document.getElementById('computerScore'); 
const playerScoreBoardScore = document.getElementById('playerScore');

let computerScore = 0;
let playerScore = 0;
let scores = [];

const buttons = document.querySelectorAll('button');
buttons.forEach(function(button) {
    
    button.addEventListener('click', function(e) {

        playerChoice = e.target.innerText; 
        playGame(playRound);
    });
});

function playGame(round) {

    scores = round(setComputerChoice, playerChoice);

    computerScore += scores[0];
    playerScore += scores[1];
    
    computerScoreBoardScore.textContent = computerScore;
    playerScoreBoardScore.textContent = playerScore;

    paragraphText.textContent = (playerScore === 5) ? 
    `You win ${playerScore} - ${computerScore}` :
    (computerScore === 5) ?  `You lose ${playerScore} - ${computerScore}` :
    paragraphText.textContent;

}

setComputerChoice = function() {
    let computerSelection;
    
    // Generate random number between 1 & 3 
    let min = 1, max = 3; 
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    // Set Selection 
    computerSelection = (randomNumber === 1) ? 'Rock' :
    (randomNumber === 2) ? 'Paper' : 'Scissors';

    return computerSelection;
}


function playRound(computer, playerChoice) {

    const computerChoice = computer();

    let computerPoints = 0; 
    let playerPoints = 0; 
    let points = []; 
    
    if (playerChoice === computerChoice) {
        paragraphText.textContent = `Draw! You both chose ${computerChoice}.`; 
    }

    else if (playerChoice === 'Rock') {

        computerChoice === 'Scissors' ? 
        (paragraphText.textContent = `You win ${playerChoice} beats ${computerChoice}.`, 
        playerPoints++) :
        (paragraphText.textContent = `You lose ${computerChoice} beats ${playerChoice}.`, 
        computerPoints++);
    }

    else if (playerChoice === 'Paper') {

        computerChoice === 'Rock' ? 
        (paragraphText.textContent = `You win ${playerChoice} beats ${computerChoice}.`, 
        playerPoints++) : 
        (paragraphText.textContent = `You lose ${computerChoice} beats ${playerChoice}.`, 
        computerPoints++);
    }

    // playerChoice equals Scissors
    else {
        
        computerChoice === 'Paper' ? 
        (paragraphText.textContent = `You win ${playerChoice} beats ${computerChoice}.`, 
        playerPoints++) : 
        (paragraphText.textContent = `You lose ${computerChoice} beats ${playerChoice}.`, 
        computerPoints++);

    }

    points = [computerPoints, playerPoints];
    return points;
}