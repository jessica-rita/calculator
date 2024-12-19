const buttons = document.querySelectorAll("button");
const resultDisplay = document.getElementById("result");

let currentInput = "";
let operator = "";
let previousInput = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (!isNaN(value)) { // Number clicked
      currentInput += value;
      resultDisplay.value = currentInput;
    } else if (value === "+" || value === "-" || value === "*" || value === "/") { // Operator clicked
      operator = value;
      previousInput = currentInput;
      currentInput = "";
    } else if (value === "=") { // Equals clicked
      const result = eval(`${previousInput} ${operator} ${currentInput}`);
      resultDisplay.value = result;
      currentInput = result; // Allow chaining
    } else if (value === "C") { // Clear button
      currentInput = "";
      operator = "";
      previousInput = "";
      resultDisplay.value = "";
    }  else if (value === "AC") { // Clear button
        currentInput = "";
        operator = "";
        previousInput = "";
        resultDisplay.value = "";
    }
  });
});
