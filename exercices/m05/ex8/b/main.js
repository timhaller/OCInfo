"use strict";
class Carte {
    constructor(valeur, couleur) {
        this.valeur = valeur;
        this.couleur = couleur;
    }
}

class Joueur {
    constructor(nom) {
        this.nom = nom;
        this.score = 0;
    }
}

//déclaration des variables globales
const tours = 3;

const joueur1 = new Joueur(prompt("Ecrivez le prénom du joueur n°1"));
const joueur2 = new Joueur(prompt("Ecrivez le prénom du joueur n°2"));

const cartes = ["6", "7", "8", "9", "10", "valet", "dame", "roi", "as"];
const couleurs = ["carreau", "trèfle", "pique", "coeur"];

//déclaration des fonctions
function tirerCarte() {
    return new Carte(
        cartes[Math.floor(Math.random() * cartes.length)],
        couleurs[Math.floor(Math.random() * couleurs.length)],
    );
}

function infoCartes(carte) {
    return carte.valeur + " de " + carte.couleur;
}

//Programme principal

function jouerPartie() {
    //appel des fonctions
    for (let i = 0; i < tours; i++) {
        let carteJoueur1 = tirerCarte();
        let carteJoueur2 = tirerCarte();
        console.log(carteJoueur1);
        console.log(carteJoueur2);
        if (carteJoueur1.valeur > carteJoueur2.valeur) {
            joueur1.score++;
            alert(
                joueur1.nom +
                " a gagné la manche " +
                (i + 1) +
                " avec la carte " +
                infoCartes(carteJoueur1) +
                " contre " +
                infoCartes(carteJoueur2) +
                " de " +
                joueur2.nom,
            );
        } else if (carteJoueur1.valeur < carteJoueur2.valeur) {
            joueur2.score++;
            alert(
                joueur2.nom +
                " a gagné la manche " +
                (i + 1) +
                " avec la carte " +
                infoCartes(carteJoueur2) +
                " contre " +
                infoCartes(carteJoueur1) +
                " de " +
                joueur1.nom,
            );
        } else if (
            couleurs.indexOf(carteJoueur1.couleur) >
            couleurs.indexOf(carteJoueur2.couleur)
        ) {
            joueur1.score++;
            alert(
                joueur1.nom +
                " a gagné la manche " +
                (i + 1) +
                " avec la carte " +
                infoCartes(carteJoueur1) +
                " contre " +
                infoCartes(carteJoueur2) +
                " de " +
                joueur2.nom,
            );
        } else if (
            couleurs.indexOf(carteJoueur1.couleur) <
            couleurs.indexOf(carteJoueur2.couleur)
        ) {
            joueur2.score++;
            alert(
                joueur2.nom +
                " a gagné la manche " +
                (i + 1) +
                " avec la carte " +
                infoCartes(carteJoueur2) +
                " contre " +
                infoCartes(carteJoueur1) +
                " de " +
                joueur1.nom,
            );
        } else {
            joueur1.score++;
            joueur2.score++;
            alert(
                "Egalité entre " +
                joueur1.nom +
                " et " +
                joueur2.nom +
                " avec la carte " +
                infoCartes(carteJoueur1),
            );
        }
        alert(
            "Score : " +
            joueur1.nom +
            " : " +
            joueur1.score +
            " - " +
            joueur2.nom +
            " : " +
            joueur2.score,
        );
    }
    if (joueur1.score > joueur2.score) {
        alert(
            joueur1.nom +
            " a gagné la partie avec " +
            joueur1.score +
            " manches gagnées contre " +
            joueur2.score +
            " pour " +
            joueur2.nom,
        );
    } else if (joueur1.score < joueur2.score) {
        alert(
            joueur2.nom +
            " a gagné la partie avec " +
            joueur2.score +
            " manches gagnées contre " +
            joueur1.score +
            " pour " +
            joueur1.nom,
        );
    } else {
        alert(
            "Egalité entre " +
            joueur1.nom +
            " et " +
            joueur2.nom +
            " avec " +
            joueur1.score +
            " manches gagnées",
        );
    }
}

//lancer le programme principal
jouerPartie();
