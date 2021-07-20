// define an 'operate' function to apply an operator to two numbers
function operate(operator, num1, num2) {
    return operator(num1, num2);
}

// define the 'add' function
function add(num1, num2) {
    return num1 + num2;
};

// define the 'subtract' function
function subtract(num1, num2) {
    return num1 - num2;
};

// define the 'multiply' function
function multiply(num1, num2) {
    return num1 * num2;
};

// define the 'divide' function
function divide(num1, num2) {
    return num1 / num2;
};

//create a function to update the display if a number is pressed
//attach event listeners to buttons
function updateDisplay() {
    const wrapper = document.getElementById('wrapper');
    
    wrapper.addEventListener('click', (event) => {
        const isButton = event.target.nodeName === 'BUTTON';
        if (!isButton) {
            return;
        }

        console.log(event.target.className);

        // if the class name is number, display the number in the results box
        if(event.target.className === 'numbers') {
            inputNumber = document.getElementById('result').value += event.target.value;
            console.log(inputNumber);
        };
    });
};

updateDisplay();

