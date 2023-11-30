"use strict";

function genererTableauNombreAlea() {
    let t = [];
    for (let i = 0; i < 500; i++) {
        t[i] = Math.floor(Math.random() * 10) + 1;
    }
    return t;
}

function compterNombre(t) {
    let tn = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let num in t) {
        tn[t[num] - 1] += 1;
    }
    return tn;
}

function init() {
    let t = genererTableauNombreAlea();
    let tn = compterNombre(t);
    let msg = "Le tableau contient les éléments suivants : \n";
    for (let i = 0; i < tn.length; i++) {
        msg += i + 1 + " : " + tn[i] + "\n";
    }
    alert(msg);
}

//lancement du programme
init();
