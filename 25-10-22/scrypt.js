let userNum1 = prompt("Enter first number");
let userNum2 = prompt("Enter second number");
let userOper = prompt(
  "Enter one of the next operations: Addition, Substraction, Division, Multiplication, Modulo"
);

let userNum1parsed = parseInt(userNum1);
let userNum2parsed = parseInt(userNum2);

if (userOper == "Addition") {
  console.log(userNum1parsed + userNum2parsed);
} else if (userOper == "Substraction") {
  console.log(userNum1parsed - userNum2parsed);
} else if (userOper == "Division") {
  console.log(userNum1parsed / userNum2parsed);
} else if (userOper == "Multiplication") {
  console.log(userNum1parsed * userNum2parsed);
} else if (userOper == "Modulo") {
  console.log(userNum1parsed % userNum2parsed);
} else {
  console.log("Operation is invalid");
}
