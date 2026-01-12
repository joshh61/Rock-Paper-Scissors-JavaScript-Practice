function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    if(choice === 1){
        return "rock";
    }else if(choice == 2){
        return "paper";
    }else return "scissors";
}

function getHumanChoice(){
    let userChoice = prompt("Rock, Paper, or Scissors?");
    userChoice = userChoice.toLowerCase();
    return userChoice;
}

function playRound(humanChoice, computerChoice){

    if(humanChoice == computerChoice){
        console.log("Tie!");
        return "tie";
    }else if(humanChoice == "rock" && computerChoice == "paper"){
        console.log("Computer Wins! Paper beats rock");
        return "computer";
    }else if(humanChoice == "rock" && computerChoice == "scissors"){
        console.log("Human Wins! Rock beats scissors");
        return "human";
    }else if(humanChoice == "paper" && computerChoice == "rock"){
        console.log("Human wins! Paper beats rock");
        return "human";
    }else if(humanChoice == "paper" && computerChoice == "scissors"){
        console.log("Computer Wins! Scissors beats paper");
        return "computer";
    }else if(humanChoice == "scissors" && computerChoice == "rock"){
        console.log("Computer Won! Rock beats scissors");
        return "computer";
    }else if(humanChoice == "scissors" && computerChoice =="paper"){
        console.log("Human Won! Scissors beats paper");
        return "human";
    }else{
        console.log("Invalid input! Please enter rock, paper, or scissors.");
        return "invalid";
    }
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    for(let i = 1; i <= 5; i++){
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

      if(humanScore > computerScore){
        console.log(`Human wins with a score of ${humanScore} : ${computerScore}`);
    }else{
        console.log(`Computer wins with a score of ${computerScore} : ${humanScore}`);
    }

}


playGame();