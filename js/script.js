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
};

//create a function to clear the display
function clearAll() {
    document.getElementById('result').value = "";
    let inputNumber = null;
    let storedNumber = null;
    let operatorClick = null;
    console.log('inputNumber: ' + inputNumber);
    console.log('storedNumber: ' + storedNumber);
    console.log('operatorClick: ' + operatorClick);
    updateDisplay();

};

//create a function to clear the display
function clearDisplay() {
    let inputNumber = null;
    document.getElementById('result').value = "";
};

//create a function to update the display if a number is pressed
//attach event listeners to buttons
function updateDisplay() {
    const wrapper = document.getElementById('wrapper');
    let inputNumber = null;
    let storedNumber = null;
    let operatorClick = null;

// define a nested function to display the results on the calculator screen

    function displayResults() {
        return document.getElementById('result').value = storedNumber;
    };

    wrapper.addEventListener('click', (event) => {
        const isButton = event.target.nodeName === 'BUTTON';
        if (!isButton) {
            return;
        };

// firstly, if a series of numbers are pressed before an operator, store and display the number(s)
        if (event.target.className === 'numbers' && operatorClick === null) {
            inputNumber = parseInt(document.getElementById('result').value += event.target.value);
            storedNumber = inputNumber;
            displayResults();

// if a number is pressed after an operator, store the new input number, then operate on the stored and input numbers to calculate the new stored number
        } else if (event.target.className === 'numbers' && operatorClick !== null) {
            inputNumber = parseInt(document.getElementById('result').value += event.target.value);
            storedNumber = operate(operatorClick, storedNumber, inputNumber);
            displayResults();

// if an operator is pressed, record the operator id and clear the display
        } else if (event.target.className === 'operators') {
            operatorClick = event.target.id.toString();
            clearDisplay();

// if the equals button is pressed, show the latest calculation results
        } else if (event.target.className === 'equals' && operatorClick !== null) {
            displayResults();
        }
    });
};

updateDisplay();

