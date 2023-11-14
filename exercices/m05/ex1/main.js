do {
  var num1 = Number(prompt("Numéro 1: "));
} while (isNaN(num1) || num1 == null);

do {
  var num2 = Number(prompt("Numéro 2: "));
} while (isNaN(num2) || num2 == null || num2 < num1);

let numbers = [];
for (let i = num1; i <= num2 - num1; i++) {
  numbers.push(i);
}
numbers.push(num2);

alert(numbers.join(", "));
