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

console.log(getComputerChoice());
console.log(getHumanChoice());