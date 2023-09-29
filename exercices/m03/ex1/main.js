const a = parseInt(prompt("Numéro 1: "));
const b = parseInt(prompt("Numéro 2: "));

if (isNaN(a) || isNaN(b)) {
  console.log("Error: invalid input");
} else {
  if (a > b) {
    alert("Le numéro 1 est plus grand");
  } else if (a < b) {
    alert("Le numéro 2 est plus grand");
  } else {
    alert("Les deux numéros sont égaux");
  }
}
