function operate(firstNum, calcOp, secondNum) {
    if (calcOp === `+`) {
        return (add(firstNum, secondNum));
    }
    if (calcOp === `-`) {
        return (subtract(firstNum, secondNum));
    }
    if (calcOp === `*`) {
        return (multiply(firstNum, secondNum));
    }
    if (calcOp === `/`) {
        return (divide(firstNum, secondNum));
    } else {
        return("Try again.");
    }
}

function add(...numbers) {
    const sum = numbers.reduce((total, num) => {
        return (Number(total) + Number(num));
    }, 0);
    return sum;
}

function subtract(...numbers) {
    const minus = numbers.reduce((total, num) => {
        return total - num;
    });
    return minus;
}

function multiply(...numbers) {
    const times = numbers.reduce((total, num) => {
        return total * num;
    });
    return times;
}

function divide(...numbers) {
    const division = numbers.reduce((total, num) => {
        return total/num;
    });
    return division;
}

const buttons = document.querySelectorAll("button");
const equalButton = document.querySelector(".equal");
const decimalButton = document.querySelector(".decimal");
const numberButtons = document.querySelectorAll("#number");
const operatorButtons = document.querySelectorAll("#operator");
const displayContainer = document.querySelector(".display");
const calcDisplay = document.querySelector(".calcDisplay");
calcDisplay.textContent = 0;

let finalNum = 0;
let answer = 0;
let lastAnswer = 0;

numberButtons.forEach((numberButton) => {
    numberButton.addEventListener("click", () => {
        numClicked = (`${numberButton.textContent}`);
        if ((finalNum.toString().length) <= 6) {
            finalNum += numClicked;
        } else {
            finalNum = finalNum;
        }
        calcDisplay.textContent = Number(finalNum);
    })
})

decimalButton.addEventListener("click", () => {
    decimalClicked = `${decimalButton.textContent}`;
    if ((finalNum.includes(".")) == true) {
        finalNum = finalNum;
    } else {
        finalNum += decimalClicked;
        calcDisplay.textContent += decimalClicked;
    }
})

operatorButtons.forEach((opButton) => {
    opButton.addEventListener("click", () => {
        operationButton = `${opButton.textContent}`;
        if (!answer) {
            firstNumber = finalNum;
            answer = lastAnswer || Number(firstNumber);
            finalNum = "";
            calcDisplay.textContent = answer;
            firstOperation = operationButton;
        } else {
            secondOperation = operationButton;
            operateAnswer = operate(answer, firstOperation, finalNum);
            finalNum = "";
            if ((operateAnswer.toString().length) <= 6) {
                operateAnswer = operateAnswer;
            } else {
                roundedAnswer = parseFloat(operateAnswer);
                operateAnswer = roundedAnswer;
            }
            calcDisplay.textContent = operateAnswer;
            answer = operateAnswer;
            firstOperation = secondOperation;
        };
    });
});


equalButton.addEventListener("click", () => {
    lastAnswer = operate(answer, operationButton, finalNum);
    if ((lastAnswer.toString().length) <= 6) {
        operateAnswer = lastAnswer;
    } else {
        slicedAnswer = parseFloat(lastAnswer);
        console.log(slicedAnswer);
        if ((slicedAnswer.toString().length) <= 6) {
            operateAnswer = slicedAnswer;
        } else {
            roundedAnswer = slicedAnswer.toExponential(1);
            operateAnswer = roundedAnswer;
        }
    }
    calcDisplay.textContent = operateAnswer;
});