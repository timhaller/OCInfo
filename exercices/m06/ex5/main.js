"use strict";

//déclaration de la fonction determinerNbresPairs(tN)
function determinerNbresPairs(tN) {
    let tP = [];
    for (let i = 0; i < tN.length; i++) {
        if (tN[i] % 2 === 0) {
            tP.push(tN[i]);
        }
    }
    alert("Les nombres pairs du tableau sont \n" + tP);
}

//test de la fonction determinerNbresPairs(tN)
determinerNbresPairs([6, 9, 1, 23, 45, 6, 2, 7, 0, 1246]);
