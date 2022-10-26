const Arr = ["Bruce", "Willis", 67, "Bachelor's degree"];
Arr.splice(2, 1);
console.log(Arr);

Arr.splice(2, 0, "19.03.1955");
console.log(Arr);

Arr.splice(0, 2, Arr[0].toUpperCase(), Arr[1].toUpperCase());
console.log(Arr);

//AVANZATO

let str = "########";
for (let i = 1; i <= 7; i++) {
  str = str.slice(1);
  console.log(str);
}
