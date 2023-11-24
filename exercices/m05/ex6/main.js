const n = askForNumber("Veuillez entrer un nombre entier positif", "N");

function factorialize(num) {
  if (num < 0) return -1;
  else if (num == 0) return 1;
  else {
    return num * factorialize(num - 1);
  }
}
alert(factorialize(n));
