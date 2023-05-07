const buttons = document.querySelectorAll("button");
const clearButton = document.querySelector("#clear");
const backspaceButton = document.querySelector("#backspace");
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
let equalPress = 0;
let backButton = 0;

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

function clickNumber() {
    if (answer === "nothing") {
        if ((backButton === "yes") && (calcDisplay.textContent === "0")) {
            finalNum = "";
            if ((finalNum.toString().length) <= 6) {
                finalNum += numClicked;
            } else {
                finalNum = finalNum;
            }
        } else {
            if ((finalNum.toString().length) <= 6) {
                finalNum += numClicked;
            } else {
                finalNum = finalNum;
            }
        };
    } else if ((answer !== "nothing") && (!operationButton)) {
        finalNum = "";
        if ((finalNum.toString().length) <= 6) {
            finalNum += numClicked;
        } else {
            finalNum = finalNum;
        }
        answer = "nothing";
    } else if (!!operationButton) {
        if (finalNum === "0") {
            finalNum = "";
            if ((finalNum.toString().length) <= 6) {
                finalNum += numClicked;
            } else {
                finalNum = finalNum;
            }
        } else {
            finalNum = finalNum;
            if ((backButton === "yes") && (calcDisplay.textContent === "0")) {
                finalNum = "";
                if ((finalNum.toString().length) <= 6) {
                    finalNum += numClicked;
                } else {
                    finalNum = finalNum;
                }
            } else {
                if ((finalNum.toString().length) <= 6) {
                    finalNum += numClicked;
                } else {
                    finalNum = finalNum;
                }
            };
        }
    }
    calcDisplay.textContent = (finalNum);
}

function clickClear() {
    calcDisplay.textContent = "";
    finalNum = "";
    answer = "nothing";
    operationButton = 0;
    lastAnswer = 0;
    zeroAnswer = 0;
    equalPress = 0;
    backButton = 0;
};

function backspace() {
    backButton = "yes";
    if (!finalNum) {
        finalNum = finalNum;
    } else {
        slicedNum = finalNum.slice(0, -1);
        finalNum = slicedNum;
        if (finalNum === "") {
            finalNum = 0;
        } else {
            finalNum = finalNum;
        }
    };
    calcDisplay.textContent = finalNum;
}

function clickDecimal() {
    if (!operationButton) {
        if ((finalNum.includes(".")) == true) {
            finalNum = finalNum || 0;
            display = finalNum || (calcDisplay.textContent);
            calcDisplay.textContent = display;
        } else if ((finalNum.includes(".")) == false) {
            calcDisplay.textContent = finalNum || 0;
            finalNum = finalNum || 0;
            finalNum += decimalClicked;
            calcDisplay.textContent += decimalClicked;
        }
    } else if (!!operationButton) {
        if (!!finalNum) {
            if ((finalNum.includes(".")) == true) {
                finalNum = finalNum;
                calcDisplay.textContent = finalNum;
            } else if ((finalNum.includes(".")) == false) {
                finalNum = finalNum || 0;
                finalNum += decimalClicked;
                calcDisplay.textContent += decimalClicked;
            }
        } else if (!finalNum) {
            calcDisplay.textContent = finalNum || 0;
            finalNum = finalNum || 0;
            finalNum += decimalClicked;
            calcDisplay.textContent += decimalClicked;
        }
    }
}

function clickOperator() {
    if (answer === "nothing") {
        firstNumber = finalNum;
        answer = Number(firstNumber) || lastAnswer;
        finalNum = "";
        calcDisplay.textContent = answer;
        firstOperation = operationButton;
    } else if (answer === "noAnswer") {
        answer = noAnswer;
        calcDisplay.textContent = answer;
        firstOperation = operationButton;
    } else {
        secondOperation = operationButton;
        if ((firstOperation === "/") && ((finalNum === "0") || (finalNum === ""))) {
            operateAnswer = "NO";
        } else {
            operateAnswer = operate(answer, firstOperation, finalNum);
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
        }
        calcDisplay.textContent = operateAnswer;
        answer = operateAnswer;
        firstOperation = secondOperation;
    };
};

function clickEqual() {
    equalPress = "yes";
    if (!operationButton) {
        answer = "noAnswer";
        noAnswer = finalNum || 0;
        calcDisplay.textContent = noAnswer;
        finalNum = "";
    } else {
        if ((operationButton === "/") && ((finalNum === "0") || (finalNum === ""))) {
            operateAnswer = "NO";
        } else {
            lastAnswer = operate(answer, operationButton, finalNum);
            if ((lastAnswer.toString().length) <= 6) {
                operateAnswer = lastAnswer;
            } else {
                slicedAnswer = parseFloat(lastAnswer);
                if ((slicedAnswer.toString().length) <= 6) {
                    operateAnswer = slicedAnswer;
                } else {
                    roundedAnswer = slicedAnswer.toExponential(1);
                    operateAnswer = roundedAnswer;
                }
            }
        };
        calcDisplay.textContent = operateAnswer;
        operationButton = 0;
    }
}

document.addEventListener(
    "keydown",
    (event) => {
        const keyName = event.key;
        if (keyName === "Backspace") {
            backspace();
        } else if ((keyName === "+") || (keyName === "-") || (keyName === "*") || (keyName === "/")) {
            operationButton = keyName;
            clickOperator();
        } else if ((keyName === "0") || (keyName === "1") || (keyName === "2") || (keyName === "3") || (keyName === "4") || (keyName === "5") || (keyName === "6") || (keyName === "7") || (keyName === "8") || (keyName === "9")) {
            numClicked = keyName;
            clickNumber();
        } else if ((keyName === ".")) {
            decimalClicked = keyName;
            clickDecimal();
        } else if ((keyName === "=")) {
            clickEqual();
        }
    }
)

buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        event.target.style.backgroundColor = "rgb(203, 203, 203)";
        setTimeout(() => {
            event.target.style.backgroundColor = "";
        }, 250)
    })
})

clearButton.addEventListener("click", clickClear)

numberButtons.forEach((numberButton) => {
    numberButton.addEventListener("click", () => {
        numClicked = (`${numberButton.textContent}`);
        clickNumber()
    });
})

backspaceButton.addEventListener("click", backspace());

decimalButton.addEventListener("click", () => {
    decimalClicked = `${decimalButton.textContent}`;
    clickDecimal();
});

operatorButtons.forEach((opButton) => {
    opButton.addEventListener("click", () => {
        operationButton = `${opButton.textContent}`;
        clickOperator();
    });
});

equalButton.addEventListener("click", clickEqual);