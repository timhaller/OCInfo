"use strict";

function genererNbreAleatoire(x, y) {
  var min = Math.min(x, y);
  var max = Math.max(x, y);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function controlerNbresEtAfficher() {
  var nb1 = prompt("Entrez un nombre entier.");
  var nb2 = prompt("Entrez un autre nombre entier.");
  if (isNaN(nb1) || isNaN(nb2)) {
    alert("Vous n'avez pas entré de nombre.");
  } else if (!Number.isInteger(Number(nb1)) || !Number.isInteger(Number(nb2))) {
    alert("Vous n'avez pas entré de nombre entier.");
  } else {
    alert(
      "Le nombre généré aléatoirement entre " +
        nb1 +
        " et " +
        nb2 +
        " est " +
        genererNbreAleatoire(nb1, nb2) +
        ".",
    );
  }
}

controlerNbresEtAfficher();
