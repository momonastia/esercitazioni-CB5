const validation = (...num) => {
  for (let control of num) if (isNaN(control)) return false;
  return true;
};
const dividerValidation = (divider) => {
  if (divider == 0) return false;
  return true;
};
const sum = (...num) => {
  let i = 0;
  let sum = 0;
  if (num.length > 1) {
    while (i < num.length) {
      let numInt = parseInt(num[i]);
      sum += numInt;
      i++;
    }
    return sum;
    /// if (validation(...num.slice(1))) {}
    return `Sono valori numeri non validi`;
  }
  // return `Inserire almeno un valore in più`;
};

const sub = (a, b) => {
  if (validation(a, b)) return a - b;
  return `Sono presenti numeri non validi`;
};

const mult = (a, b) => {
  if (validation(a, b)) return a * b;
  return `Sono presenti numeri non validi`;
};

const div = (a, b) => {
  if (validation(a, b)) {
    if (dividerValidation(b)) {
      return a / b;
    } else return `Impossibile! Il divisore non può essere 0`;
  }
  return `Sono presenti numeri non validi`;
};

/// With infinite arguments

/* const mult = (...num) => {
  let i = 0;
  let mult = 1;
  if (num.length > 1) {
    while (i < num.length) {
      let numInt = parseInt(num[i]);
      mult *= numInt;
      i++;
      // if (validation(...num.slice(1))) { }
      return mult;
    }
    return `Sono valori numeri non validi`;
  }
  return `Inserire almeno un valore in più`;
};
 */
module.exports.sum = sum;
module.exports.sub = sub;
module.exports.mult = mult;
module.exports.div = div;
