// define an 'operate' function to apply an operator to two numbers
function operate(operator, num1, num2) {
    if (operator === "add") {
        return num1 + num2;
    } else if (operator === "subtract") {
        return num1 - num2;
    } else if (operator === "multiply") {
        return num1 * num2;
    } else if (operator ==="divide") {
        return num1 / num2;
    }
}

//create a function to clear the display
function clearDisplay() {
    document.getElementById('result').value = "";
    let inputNumber = 0;
}

//create a function to update the display if a number is pressed
//attach event listeners to buttons
function updateDisplay() {
    const wrapper = document.getElementById('wrapper');
    let inputNumber = 0;

    wrapper.addEventListener('click', (event) => {
        const isButton = event.target.nodeName === 'BUTTON';
        if (!isButton) {
            return;
        }

// firstly, if a series of numbers are pressed, store and display it/them
        if (event.target.className === 'numbers') {
            inputNumber = parseInt(document.getElementById('result').value += event.target.value);
//then, if the user presses an operator, save the operator type in a variable
        } else if (event.target.className === 'operators') {
            operatorClick = event.target.id.toString();
            //Store the new number(s) in a different variable and clear the display
            storedNumber = inputNumber;
            clearDisplay();
//otherwise if the user presses equals, run the operate function using the two numbers and operator        
        } else if (event.target.className === 'equals') {
            console.log(operatorClick);
            console.log(inputNumber);
            console.log(storedNumber);

            resultNumber = operate(operatorClick, inputNumber, storedNumber);
            document.getElementById('result').value = resultNumber;
        }
    });
};

updateDisplay();

