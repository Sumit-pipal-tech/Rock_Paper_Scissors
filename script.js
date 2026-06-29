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

console.log(getComputerChoice());