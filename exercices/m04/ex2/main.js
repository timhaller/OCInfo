"use strict";

let numeroTour = 1;
let position = 0;

function lancerDe() {
    return Math.floor(Math.random() * 6) + 1;
}

function unTour() {
    let de1 = lancerDe();
    let de2 = lancerDe();

    let sum = de1 == 3 || de2 == 3 ? (de1 + de2) * 2 : de1 + de2;
    sum = de1 == de2 ? -8 : sum;

    Math.max((position += sum), 0);
    alert(
        "Tour n°" +
        numeroTour +
        " : le dé a fait " +
        sum +
        ".\nVous êtes à la case n°" +
        position +
        ".",
    );
    numeroTour++;
}

function jeu() {
    while (numeroTour <= 3 && position < 21) {
        unTour();
    }
    position >= 21
        ? alert("Vous avez gagné en " + (numeroTour - 1) + " tours.")
        : alert("Vous avez perdu.");
    // alert("Vous avez gagné en " + (numeroTour - 1) + " tours.");
}

jeu();
