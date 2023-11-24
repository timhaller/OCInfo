let num1 = Number(prompt("Numéro 1: "));

while (isNaN(num1) || num1 == null) {
  alert("Vous devez entrer un nombre!");
  num1 = Number(prompt("Numéro 1: "));
}

alert("Vous avez entré: " + num1);
