let num = askForNumber("Entrez un nombre: ", "N");
const multiples = askForNumber("Entrez le nombre de multiples: ", "N");

let msg = "";
for (let i = 1; i <= multiples; i++) {
  msg += num + " x " + i + " = " + num * i + "\n";
}

alert(msg);
