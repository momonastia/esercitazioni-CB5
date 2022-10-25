let userNum1 = prompt("Enter first number");
let userNum2 = prompt("Enter second number");
let userOper = prompt(
  "Enter one of the next operations: Addition, Substraction, Division, Multiplication, Modulo"
);

let userNum1parsed = parseInt(userNum1);
let userNum2parsed = parseInt(userNum2);
let userOperLow = userOper.toLowerCase();

if (userOperLow == "addition") {
  console.log(userNum1parsed + userNum2parsed);
} else if (userOperLow == "substraction") {
  console.log(userNum1parsed - userNum2parsed);
} else if (userOperLow == "division") {
  console.log(userNum1parsed / userNum2parsed);
} else if (userOperLow == "multiplication") {
  console.log(userNum1parsed * userNum2parsed);
} else if (userOperLow == "modulo") {
  console.log(userNum1parsed % userNum2parsed);
} else {
  console.log("Operation is invalid");
}
