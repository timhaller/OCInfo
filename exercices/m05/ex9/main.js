const essais = askForNumber("Entrez le nombre d'essais: ", "N");

const maxNumber = essais * 5;
const secretNumber = lancerDe(maxNumber);
let message = "Trouvez le nombre secret entre 1 et " + maxNumber + "\n";

for (let i = 1; i <= essais; i++) {
  const guess = askForNumber(message + "Essai " + i + ": ", "Z");
  if (guess === secretNumber) {
    alert("Vous avez gagné!");
    break;
  } else if (guess < secretNumber) {
    message = "Trop petit!\n";
  } else {
    message = "Trop grand!\n";
  }
}
