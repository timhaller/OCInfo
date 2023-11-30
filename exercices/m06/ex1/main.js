"use strict";

//déclaration de la fonction afficherElement(t,x)
function afficherElement(t, x) {
    if (x < 0 || x >= t.length) {
        alert("Il n'y pas d'élément n°" + x + " dans ce tableau.");
    } else {
        alert("t[" + x + "] = " + t[x]);
    }
}

//test de la fonction afficherElement(t,x)
afficherElement(["3M1", "3M2", "3M3", "3M4", "3M5"], 3);
