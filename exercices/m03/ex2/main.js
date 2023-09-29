const a = parseInt(prompt("Introduce un number"));
const b = parseInt(prompt("Introduce other number"));
const c = parseInt(prompt("Introduce other number"));

if (isNaN(a) || isNaN(b) || isNaN(c)) {
  alert("Invalid input");
} else if (a < b && a < c) {
  alert("The smallest number is " + a);
} else if (b < a && b < c) {
  alert("The smallest number is " + b);
} else if (c < a && c < b) {
  alert("The smallest number is " + c);
} else {
  alert("There is no smallest number");
}
