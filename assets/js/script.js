// wait for DOM to finish loading then run game
// get buttons elements and add event listeners to them
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        });
    }
});


/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame() {
    // create two random numbers between 1 and 25
    let operand1 = Math.floor(Math.random() * 25) + 1;
    let operand2 = Math.floor(Math.random() * 25) + 1;
}

function checkAnswer() {
}

function calculateCorrectAnswer() {
}

function incrementScore() {
}

function incrementWrongAnswer() {
}

function displayAdditionQuestion(operand1, operand2) {
}

function displaySubtractQuestion(operand1, operand2) {
}

function displayMultiplyQuestion(operand1, operand2) {
}

function displayDivisionQuestion(operand1, operand2) {
}