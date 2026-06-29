console.log("Script loaded");
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return "rock";
    }

    if (randomNumber === 1) {
        return "paper";
    }

    return "scissors";
}

function getHumanChoice() {
    let choice = prompt("Enter rock, paper, or scissors:");
    return choice.toLowerCase();
}


function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log("It is a tie!");
    }
    else if (humanChoice === "rock") {

        if (computerChoice === "scissors") {
            humanScore++;
            console.log("You win! Rock beats Scissors");
        }

        else {
            computerScore++;
            console.log("You lose! Paper beats Rock");
        }

    }

    else if (humanChoice === "paper") {

        if (computerChoice === "rock") {
            humanScore++;
            console.log("You win! Paper beats Rock");
        }

        else {
            computerScore++;
            console.log("You lose! Scissors beats Paper");
        }

    }

    else if (humanChoice === "scissors") {

        if (computerChoice === "paper") {
            humanScore++;
            console.log("You win! Scissors beats Paper");
        }

        else {
            computerScore++;
            console.log("You lose! Rock beats Scissors");
        }

    }


    console.log("Human Score :", humanScore);
    console.log("Computer Score:", computerScore);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log("Human:", humanSelection);
console.log("Computer:", computerSelection);

playRound(humanSelection, computerSelection);