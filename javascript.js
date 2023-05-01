function operate(firstNum, calcOp, secondNum) {
    if (calcOp = `+`) {
        return (add(firstNum, secondNum));
    }
    if (calcOp = `-`) {
        return (subtract(firstNum, secondNum));
    }
    if (calcOp = `*`) {
        return (multiply(firstNum, secondNum));
    }
    if (calcOp = `/`) {
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
const calcDisplay = document.getElementsByClassName("display");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        console.log(button.className);
    });
})