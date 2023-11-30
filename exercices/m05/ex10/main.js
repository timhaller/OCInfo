"use strict";

//Il n'y a pas de variables globales.

//déclaration des fonctions

//Cette fonction retourne true si n est un nombre et qu'il est entier.
//L'instruction est écrite de manière compacte (une seule ligne)!

function validerNombre(n) {
    return !isNaN(n) && n % 1 === 0;
}

//Cette fonction retourne true si n est compris entre
//la borne inférieure (borne inférieure comprise) et
//la borne supérieure (borne supérieure comprise).
//L'instruction est écrite de manière compacte (une seule ligne)!

function testerNombre(n,nInf,nSup) {
    return n >= nInf && n <= nSup;
}

//Cette fonction construit et retourne le texte donnant le résultat
//(exemple en annexe).

function preparerAffichageNombres(n1,n2) {
    let texte = "Les nombres entre " + n1 + " et " + n2 + " sont:\n[";
    for (var i = n1; i < n2; i++) {
        texte += i + ", "
    }
    texte += n2 + "]";
    return texte;
}

//programme principal

function princ() {

    let nombre_1 = 0;
    let nombre_2 = 0;
    let nbNombre = 0;

    //1. Saisir le premier nombre entier (qui doit se situer entre 1 et 100)
    //et contrôler sa validité.
    do {
        nombre_1 = Number(prompt("Entrez un nombre entier entre 1 et 100: "));
        if (validerNombre(nombre_1) && testerNombre(nombre_1, 1, 100)) {
            nbNombre++;
        } else {
            alert("Le nombre doit être entier et entre 1 et 100");
        }
    } while (nbNombre === 0);



    //2. Saisir le second nombre entier (qui doit se situer entre 101 et 200)
    //et contrôler sa validité.

    do {
        nombre_2 = Number(prompt("Entrez un nombre entier entre 101 et 200: "));
        if (validerNombre(nombre_2) && testerNombre(nombre_2, 101, 200)) {
            nbNombre++;
        } else {
            alert("Le nombre doit être entier et entre 101 et 200");
        }
    } while (nbNombre === 1);



    //3. préparer la liste des nombres entre nombre1 et nombre2 et l'afficher
    //via une fenêtre alert
    let txt = preparerAffichageNombres(nombre_1, nombre_2);
    alert(txt);
}

//lancement du programme principal
princ()
