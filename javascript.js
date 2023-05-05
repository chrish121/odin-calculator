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
        return (parseInt(total) + parseInt(num));
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
const numberButtons = document.querySelectorAll("#number");
const operatorButtons = document.querySelectorAll("#operator");
const displayContainer = document.querySelector(".display");
const calcDisplay = document.createElement("div");
calcDisplay.classList.add("calcDisplay");
displayContainer.appendChild(calcDisplay);

let finalNum = "";
let answer = "";
let lastAnswer = "";

numberButtons.forEach((numButton) => {
    numButton.addEventListener("click", () => {
        numClicked = parseInt(`${numButton.textContent}`);
        finalNum += numClicked;
        calcDisplay.textContent = parseInt(finalNum);
        calcDisplay.setAttribute = ("style", "font-family: 'Courier New', Courier, monospace, serif; color: black; font-size: 65px; display: flex; flex-shrink: -3");
    })
})

operatorButtons.forEach((opButton) => {
    opButton.addEventListener("click", () => {
        operationButton = `${opButton.textContent}`;
        if (!answer) {
            firstNumber = finalNum;
            answer = lastAnswer || parseInt(firstNumber);
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