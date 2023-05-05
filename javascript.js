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

let finalNum = "";
let answer = "";
let lastAnswer = "";

numberButtons.forEach((numberButton) => {
    numberButton.addEventListener("click", () => {
        numClicked = (`${numberButton.textContent}`);
        finalNum += numClicked;
        stringNum = " " + finalNum;
        calcDisplay.textContent = Number(stringNum);
    })
})

decimalButton.addEventListener("click", () => {
    decimalClicked = `${decimalButton.textContent}`;
    if ((stringNum.includes(".")) == true) {
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
            calcDisplay.textContent = operateAnswer;
            answer = operateAnswer;
            firstOperation = secondOperation;
        };
    });
});


equalButton.addEventListener("click", () => {
    lastAnswer = operate(answer, operationButton, finalNum);
    calcDisplay.textContent = lastAnswer;
});