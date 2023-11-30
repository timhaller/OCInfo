"use strict";

var nb1 = 33;
var nb2 = 42;
var nb3 = -3;
var nb4 = 20986;
var nb5 = 89;

function verifierParite(x) {
    if (x % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

function afficherParite(x) {
    return (
        "Le nombre " + x + " est " + (verifierParite(x) ? "pair." : "impair.")
    );
}

alert(afficherParite(nb1));
alert(afficherParite(nb4));
