function lancerDe(sides = 6) {
  return Math.floor(Math.random() * sides) + 1;
}

// types = ["N", "Z", "R"]
function askForNumber(message = "Entrez un nombre: ", type = "N") {
  let num = Number(prompt(message + "(dans " + type + ")"));
  while (
    isNaN(num) ||
    (type === "N" && num < 0) ||
    (type === "N" && num % 1 !== 0) ||
    (type === "Z" && num % 1 !== 0)
  ) {
    alert("Vous devez entrer un nombre dans " + type);
    num = Number(prompt(message));
  }
  return num;
}
