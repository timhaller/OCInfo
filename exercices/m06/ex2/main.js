"use strict";

//déclaration de la fonction racineCubique(tN)
function racineCubique(tN) {
    let tR = [];
    for (let i = 0; i < tN.length; i++) {
        tR[i] = Math.cbrt(tN[i]).toFixed(1);
    }
    return tR;
}

//test de la fonction racineCubique(tN)
let tN = [1, 8, 27, 64, 125, 216, 343, 512, 729, 1000];
let tR = racineCubique(tN);
alert(tR);
