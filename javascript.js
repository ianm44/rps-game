const rpsPossibilities = ['Rock', 'Paper', 'Scissors']

function getComputerChoice(rpsPossibilities) {
   const arrayRandomizer = Math.floor(Math.random() * rpsPossibilities.length);
   return rpsPossibilities[arrayRandomizer];
}

const computerSelection = getComputerChoice(rpsPossibilities);
console.log(computerSelection);

const playerSelection = prompt("Choose your weapon!");