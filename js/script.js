function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    if (choice === 1) {
        return "rock";
    } else if (choice == 2) {
        return "paper";
    } else return "scissors";
}

function getHumanChoice() {
    let userChoice = prompt("Rock, Paper, or Scissors?");
    userChoice = userChoice.toLowerCase();
    return userChoice;
}

function playRound(humanChoice, computerChoice) {

    if (humanChoice == computerChoice) {
        return "tie";
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        return "computer";
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        return "human";
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        return "human";
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        return "computer";
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        return "computer";
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        return "human";
    } else {
        return "invalid";
    }
}

function playGame() {

    /* for(let i = 1; i <= 5; i++){
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        let result = playRound(humanSelection, computerSelection);
        if(result === "human"){
            humanScore++;
        }else if(result === "computer"){
            computerScore++;
        }else if(result === "invalid"){
            i--;  // Replay this round
        }
    }
    */
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    let result = playRound(humanSelection, computerSelection);

    if (result === "tie") {
        console.log(`We have a tie!`);
    }
    else if (result === "human") {
        console.log(`Human wins this game!`);
    } else {
        console.log(`Computer wins this game!`);
    }

}

// START OF THE BUTTON UI IMPLEMENTATION 

//Function used to play a round per button input 
function buttonRound(buttonChoice) {
    let humanSelection = buttonChoice;
    let computerSelection = getComputerChoice();
    let result = playRound(humanSelection, computerSelection);

    const resultText = document.createElement('p');

    if (result === "tie") {
        resultText.textContent = `We have a tie! Current Score (H:C) => ${humanScore} : ${computerScore}`;
    }
    else if (result === "human") {
        humanScore++;
        resultText.textContent = `Human wins this round! Current Score (H:C) => ${humanScore} : ${computerScore}`;
    } else {
        computerScore++;
        resultText.textContent = `Computer wins this round! Current Score (H:C) => ${humanScore} : ${computerScore}`;
    }

    container.appendChild(resultText);
}

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const container = document.querySelector('.results');
let humanScore = 0;
let computerScore = 0;

rockBtn.addEventListener("click", (event) => {
    buttonRound("rock");
    if (computerScore === 5) {
        const winner = document.createElement("h1");
        winner.textContent = "Computer Wins the game!";
        container.appendChild(winner);
    } else if (humanScore === 5) {
        const winner = document.createElement("h1");
        winner.textContent = "Human Wins the game!";
        container.appendChild(winner);
    }
});

paperBtn.addEventListener("click", (event) => {
    buttonRound("paper");
    if (computerScore === 5) {
        const winner = document.createElement("h1");
        winner.textContent = "Computer Wins the game!";
        container.appendChild(winner);
    } else if (humanScore === 5) {
        const winner = document.createElement("h1");
        winner.textContent = "Human Wins the game!";
        container.appendChild(winner);
    }
});

scissorsBtn.addEventListener("click", (event) => {
    buttonRound("scissors");
    if (computerScore === 5) {
        const winner = document.createElement("h1");
        winner.textContent = "Computer Wins the game!";
        container.appendChild(winner);
    } else if (humanScore === 5) {
        const winner = document.createElement("h1");
        winner.textContent = "Human Wins the game!";
        container.appendChild(winner);
    }
});



