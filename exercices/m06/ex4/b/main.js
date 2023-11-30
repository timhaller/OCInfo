"use strict";

//déclaration de la fonction recueillirValeur(x)
function recueillirValeur(x) {
    let valeur = Number(
        prompt("Entrez un nombre entier entre 1 et " + x + " :"),
    );
    while (valeur < 1 || valeur > x || isNaN(valeur)) {
        valeur = Number(
            prompt("Entrez un nombre entier entre 1 et " + x + " :"),
        );
    }
    return valeur;
}

//déclaration de la fonction afficherResultat(t)

function afficherResultat(t) {
    let n = recueillirValeur(t.length) - 1;
    let s = recueillirValeur(t[n].length) - 1;
    let st = t[n][s];
    let msg = "L'élément " + s + " du sous-tableau " + n + " est : " + st;
    alert(msg);
}

//test du programme
let tPhysiciens = [
    ["Niels", "Erwin", "Wolfgang", "Werner", "Enrico", "Richard"],
    ["Bohr", "Schrödinger", "Pauli", "Heisenberg", "Fermi", "Feynman"],
    [1885, 1887, 1900, 1901, 1901, 1918],
];
afficherResultat(tPhysiciens);
