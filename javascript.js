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
const clearButton = document.querySelector("#clear");
const equalButton = document.querySelector(".equal");
const decimalButton = document.querySelector(".decimal");
const numberButtons = document.querySelectorAll("#number");
const operatorButtons = document.querySelectorAll("#operator");
const displayContainer = document.querySelector(".display");
const calcDisplay = document.querySelector(".calcDisplay");
calcDisplay.textContent = 0;

let finalNum = "";
let answer = "nothing";
let lastAnswer = 0;
let operationButton = 0;
let zeroAnswer = 0;

clearButton.addEventListener("click", () => {
    calcDisplay.textContent = "";
    finalNum = "";
    answer = "nothing";
    operationButton = 0;
    lastAnswer = 0;
    zeroAnswer = 0;
})

numberButtons.forEach((numberButton) => {
    numberButton.addEventListener("click", () => {
        numClicked = (`${numberButton.textContent}`);
        if ((finalNum.toString().length) <= 6) {
            finalNum += numClicked;
        } else {
            finalNum = finalNum;
        }
        calcDisplay.textContent = (finalNum);
    })
})

decimalButton.addEventListener("click", () => {
    decimalClicked = `${decimalButton.textContent}`;
    if (!operationButton) {
        if ((finalNum.includes(".")) == true) {
            finalNum = finalNum || 0;
            display = finalNum || (calcDisplay.textContent);
            calcDisplay.textContent = display;
            console.log(calcDisplay.textContent);

        } else if ((finalNum.includes(".")) == false) {
            calcDisplay.textContent = finalNum || 0;
            finalNum = finalNum || 0;
            finalNum += decimalClicked;
            calcDisplay.textContent += decimalClicked;
            console.log(calcDisplay.textContent);
        }
    } else if (!!operationButton) {
        if (!!finalNum) {
            if ((finalNum.includes(".")) == true) {
                finalNum = finalNum;
                calcDisplay.textContent = finalNum;
                console.log(calcDisplay.textContent);

            } else if ((finalNum.includes(".")) == false) {
                finalNum = finalNum || 0;
                finalNum += decimalClicked;
                calcDisplay.textContent += decimalClicked;
                console.log(calcDisplay.textContent);

            }
        } else if (!finalNum) {
            calcDisplay.textContent = finalNum || 0;
            finalNum = finalNum || 0;
            finalNum += decimalClicked;
            calcDisplay.textContent += decimalClicked;
            console.log(calcDisplay.textContent);

        }
    }
});

operatorButtons.forEach((opButton) => {
    opButton.addEventListener("click", () => {
        operationButton = `${opButton.textContent}`;
        if (answer === "nothing") {
            firstNumber = finalNum;
            answer = lastAnswer || Number(firstNumber);
            finalNum = "";
            calcDisplay.textContent = answer;
            firstOperation = operationButton;
            console.log(firstOperation);
            console.log(answer);
        } else if (answer === "noAnswer") {
            answer = noAnswer;
            calcDisplay.textContent = answer;
            firstOperation = operationButton;
            console.log(answer);
        } else {
            secondOperation = operationButton;
            operateAnswer = operate(answer, firstOperation, finalNum);
            console.log(answer, firstOperation, finalNum);
            finalNum = "";
            if ((operateAnswer.toString().length) <= 6) {
                operateAnswer = operateAnswer;
            } else {
                slicedAnswer = parseFloat(operateAnswer);
                if ((slicedAnswer.toString().length) <= 6) {
                    operateAnswer = slicedAnswer;
                } else {
                    roundedAnswer = slicedAnswer.toExponential(1);
                    operateAnswer = roundedAnswer;
                }
                operateAnswer = roundedAnswer;
            }
            calcDisplay.textContent = operateAnswer;
            answer = operateAnswer;
            firstOperation = secondOperation;
        };
    });
});


equalButton.addEventListener("click", () => {
    if (!operationButton) {
        answer = "noAnswer";
        noAnswer = finalNum || 0;
        calcDisplay.textContent = noAnswer;
        console.log(answer);
        finalNum = "";
    } else {
        lastAnswer = operate(answer, operationButton, finalNum);
        console.log(answer, operationButton, finalNum);
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
    }
});