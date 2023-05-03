function operate(firstNum, calcOp, secondNum) {
    if (calcOp === `plus`) {
        return (add(firstNum, secondNum));
    }
    if (calcOp === `minus`) {
        return (subtract(firstNum, secondNum));
    }
    if (calcOp === `multiply`) {
        return (multiply(firstNum, secondNum));
    }
    if (calcOp === `divide`) {
        return (divide(firstNum, secondNum));
    } else {
        return("Try again.");
    }
}

function add(...numbers) {
    const sum = numbers.reduce((total, num) => {
        return total + num;
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
const numberButtons = document.querySelectorAll("#number");
const operatorButtons = document.querySelectorAll("#operator");
const displayContainer = document.querySelector(".display");
const calcDisplay = document.createElement("div");
calcDisplay.classList.add("calcDisplay");
displayContainer.appendChild(calcDisplay);

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        calcDisplay.textContent += `${button.textContent}`;
        calcDisplay.setAttribute = ("style", "font-family: 'Courier New', Courier, monospace, serif; color: black; font-size: 65px; display: flex; flex-shrink: -3")
    });
})

numberButtons.forEach((numButton) => {
    numButton.addEventListener("click", () => {
        numClicked = parseInt(`${numButton.textContent}`);
    })
})

operatorButtons.forEach((opButton) => {
    opButton.addEventListener("click", () => {
        firstNumber = numClicked;
        firstOperation = `${opButton.textContent}`;
        firstOperationClass = `${opButton.className}`;
    })
})

const equalButton = document.querySelector("#equal");

equalButton.addEventListener("click", () => {
    secondNumber = numClicked;
    console.log(firstNumber);
    console.log(firstOperation);
    console.log(secondNumber);
    console.log(calcDisplay.textContent);
    let answer = operate(firstNumber, firstOperationClass, secondNumber);
    console.log(answer);
})