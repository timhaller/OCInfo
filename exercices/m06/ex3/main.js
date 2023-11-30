"use strict";

//déclaration de la fonction reunionTableaux(t1,t2,t3)
function reunionTableaux(t1, t2, t3) {
  let t = [];
  for (let i = 0; i < t1.length; i++) {
    t[i] = t1[i] + " " + t2[i] + " " + t3[i] + "\n";
  }
  return t;
}

//test de la fonction reunionTableaux(t1,t2,t3)
let tPrenoms = ["Niels", "Erwin", "Wolfgang", "Werner", "Enrico", "Richard"];
let tNoms = ["Bohr", "Schrödinger", "Pauli", "Heisenberg", "Fermi", "Feynman"];
let tAnneeNaissance = [1885, 1887, 1900, 1901, 1901, 1918];
alert(reunionTableaux(tPrenoms, tNoms, tAnneeNaissance).join("\n"));
