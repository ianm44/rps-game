rpsPossibilities = ['Rock', 'Paper', 'Scissors']

function getComputerChoice() {
    Math.floor(Math.random() * rpsPossibilities.length);
}

const computerSelection = getComputerChoice();

console.log(computerSelection)

