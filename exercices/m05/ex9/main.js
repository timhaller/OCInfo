const essais = Math.min(
  askForNumber("Entrez le nombre d'essais: (1 à 3)", "N"),
  3,
);

const maxNumber = essais * 5;
const secretNumber = lancerDe(maxNumber);
let message = "Trouvez le nombre secret entre 1 et " + maxNumber + "\n";

function guess() {
  for (let i = 1; i <= essais; i++) {
    const guess = askForNumber(message + "Essai " + i + ": ", "Z");
    if (guess === secretNumber) {
      return true;
    } else if (guess < secretNumber) {
      message = "Trop petit!\n";
    } else {
      message = "Trop grand!\n";
    }
  }
  return false;
}

if (guess()) {
  alert("Bravo!");
} else {
  alert("Perdu! Le nombre était " + secretNumber);
}
