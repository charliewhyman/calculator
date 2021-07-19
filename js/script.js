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