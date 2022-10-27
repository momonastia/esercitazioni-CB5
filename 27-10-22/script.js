// Esercizio 1
function calculator(num1, num2, operation) {
  if (operation == "addition") {
    return num1 + num2;
  } else if (operation == "substraction") {
    return num1 - num2;
  } else if (operation == "division") {
    return num1 / num2;
  } else if (operation == "multiplication") {
    return num1 * num2;
  } else if (operation == "modulo") {
    return num1 % num2;
  } else {
    return "Operation is invalid";
  }
}

let Exam = calculator(9, 4, "division");
console.log(Exam);

// Esercizio 2
let character = {
  name: "Sponge Bob",
  city: "Bikini Bottom",
  friend: "Partick",
  restaurant: "Krusty Krab",
  isUnderTheSea: true,
  whoIsFriend: function () {
    return this.name + " has a friend named " + this.friend;
  },
};

const ConNew = character.whoIsFriend();
console.log(ConNew);

let friendUpper = character.friend.toUpperCase(); // Convertire uno dei valore in maiuscolo
console.log(friendUpper);
character.surname = "Square Pants"; //Aggiungere una nuova proprierà
const SurName = character.surname;
console.log(SurName);
