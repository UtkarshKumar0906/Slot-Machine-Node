const prompt = require("prompt-sync")();

const deposit = () => {

    while (true) {

        const depositAmount = prompt("Enter the amount you want to deposit: $")
        const numberDepositAmount = parseFloat(depositAmount);

        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
            console.log("Invalid deposit, Try Agian!!")
        } else {
            return numberDepositAmount
        }
    }
}

const getNumberOfLines = () => {

    while (true) {

        const lines = prompt("Enter the number of line you want to bet on: ")
        const numberLines = parseFloat(lines);

        if (isNaN(numberLines) || numberLines <= 0 || numberLines > 3) {
            console.log("Invalid number of lines(1-3) ")
        } else {
            return numberLines
        }
    }
}

const getBet = (balance, lines) => {
    while (true) {

        const bet = prompt("Enter the bet per line: ")
        const numberbet = parseFloat(bet);

        if (isNaN(numberbet) || numberbet <= 0 || numberbet > balance / lines) {
            console.log("Invalid bet ")
        } else {
            return numberbet
        }
    }
}

let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance, numberOfLines)