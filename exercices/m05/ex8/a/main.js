"use strict";

//déclaration des variables globales
let joueur1;
let joueur2;

let nbreCouleur1;
let carteCouleur1;
let nbreCouleur2;
let carteCouleur2;
let nbreCouleur3;
let carteCouleur3;
let nbreCouleur4;
let carteCouleur4;
let nbreCouleur5;
let carteCouleur5;
let nbreCouleur6;
let carteCouleur6;

let carteValeur1;
let carteValeur2;
let carteValeur3;
let carteValeur4;
let carteValeur5;
let carteValeur6;

let resultatJoueur1 = 0;
let resultatJoueur2 = 0;

//détermination du nom des joueurs

joueur1 = prompt("Ecrivez le prénom du joueur n°1");
joueur2 = prompt("Ecrivez le prénom du joueur n°2");

//premier tour

carteValeur1 = 6 + Math.floor(Math.random() * 9);
nbreCouleur1 = 1 + Math.floor(Math.random() * 4);

if (nbreCouleur1 == 1) {
  carteCouleur1 = "carreau";
} else if (nbreCouleur1 == 2) {
  carteCouleur1 = "trèfle";
} else if (nbreCouleur1 == 3) {
  carteCouleur1 = "pique";
} else if (nbreCouleur1 == 4) {
  carteCouleur1 = "coeur";
}

carteValeur2 = 6 + Math.floor(Math.random() * 9);
nbreCouleur2 = 1 + Math.floor(Math.random() * 4);

if (nbreCouleur2 == 1) {
  carteCouleur2 = "carreau";
} else if (nbreCouleur2 == 2) {
  carteCouleur2 = "trèfle";
} else if (nbreCouleur2 == 3) {
  carteCouleur2 = "pique";
} else if (nbreCouleur2 == 4) {
  carteCouleur2 = "coeur";
}

alert(
  "tour n°1: \n" +
    joueur1 +
    " a obtenu le " +
    carteValeur1 +
    " de " +
    carteCouleur1 +
    ".\n" +
    joueur2 +
    " a obtenu le " +
    carteValeur2 +
    " de " +
    carteCouleur2 +
    ".\n",
);

if (carteValeur1 != carteValeur2) {
  if (carteValeur1 > carteValeur2) {
    alert(joueur1 + " a gagné le tour n°1");
    resultatJoueur1++;
  } else {
    alert(joueur2 + " a gagné le tour n°1");
    resultatJoueur2++;
  }
} else {
  if (nbreCouleur1 != nbreCouleur2) {
    if (nbreCouleur1 > nbreCouleur2) {
      alert(joueur1 + " a gagné le tour n°1");
      resultatJoueur1++;
    } else {
      alert(joueur2 + " a gagné le tour n°1");
      resultatJoueur2++;
    }
  } else {
    alert("Les deux joueurs ont gagné le tour n°1");
    resultatJoueur1++;
    resultatJoueur2++;
  }
}

//deuxième tour

carteValeur3 = 6 + Math.floor(Math.random() * 9);
nbreCouleur3 = 1 + Math.floor(Math.random() * 4);

if (nbreCouleur3 == 1) {
  carteCouleur3 = "carreau";
} else if (nbreCouleur3 == 2) {
  carteCouleur3 = "trèfle";
} else if (nbreCouleur3 == 3) {
  carteCouleur3 = "pique";
} else if (nbreCouleur3 == 4) {
  carteCouleur3 = "coeur";
}

carteValeur4 = 6 + Math.floor(Math.random() * 9);
nbreCouleur4 = 1 + Math.floor(Math.random() * 4);

if (nbreCouleur4 == 1) {
  carteCouleur4 = "carreau";
} else if (nbreCouleur4 == 2) {
  carteCouleur4 = "trèfle";
} else if (nbreCouleur4 == 3) {
  carteCouleur4 = "pique";
} else if (nbreCouleur4 == 4) {
  carteCouleur4 = "coeur";
}

alert(
  "tour n°2: \n" +
    joueur1 +
    " a obtenu le " +
    carteValeur3 +
    " de " +
    carteCouleur3 +
    ".\n" +
    joueur2 +
    " a obtenu le " +
    carteValeur4 +
    " de " +
    carteCouleur4 +
    ".\n",
);

if (carteValeur3 != carteValeur4) {
  if (carteValeur3 > carteValeur4) {
    alert(joueur1 + " a gagné le tour n°2");
    resultatJoueur1++;
  } else {
    alert(joueur2 + " a gagné le tour n°2");
    resultatJoueur2++;
  }
} else {
  if (nbreCouleur3 != nbreCouleur4) {
    if (nbreCouleur3 > nbreCouleur4) {
      alert(joueur1 + " a gagné le tour n°2");
      resultatJoueur1++;
    } else {
      alert(joueur2 + " a gagné le tour n°2");
      resultatJoueur2++;
    }
  } else {
    alert("Les deux joueurs ont gagné le tour n°2");
    resultatJoueur1++;
    resultatJoueur2++;
  }
}

//troisième tour

carteValeur5 = 6 + Math.floor(Math.random() * 9);
nbreCouleur5 = 1 + Math.floor(Math.random() * 4);

if (nbreCouleur5 == 1) {
  carteCouleur5 = "carreau";
} else if (nbreCouleur5 == 2) {
  carteCouleur5 = "trèfle";
} else if (nbreCouleur5 == 3) {
  carteCouleur5 = "pique";
} else if (nbreCouleur5 == 4) {
  carteCouleur5 = "coeur";
}

carteValeur6 = 6 + Math.floor(Math.random() * 9);
nbreCouleur6 = 1 + Math.floor(Math.random() * 4);

if (nbreCouleur6 == 1) {
  carteCouleur6 = "carreau";
} else if (nbreCouleur6 == 2) {
  carteCouleur6 = "trèfle";
} else if (nbreCouleur6 == 3) {
  carteCouleur6 = "pique";
} else if (nbreCouleur6 == 4) {
  carteCouleur6 = "coeur";
}

alert(
  "tour n°3: \n" +
    joueur1 +
    " a obtenu le " +
    carteValeur5 +
    " de " +
    carteCouleur5 +
    ".\n" +
    joueur2 +
    " a obtenu le " +
    carteValeur6 +
    " de " +
    carteCouleur6 +
    ".\n",
);

if (carteValeur5 != carteValeur6) {
  if (carteValeur5 > carteValeur6) {
    alert(joueur1 + " a gagné le tour n°3");
    resultatJoueur1++;
  } else {
    alert(joueur2 + " a gagné le tour n°3");
    resultatJoueur2++;
  }
} else {
  if (nbreCouleur5 != nbreCouleur6) {
    if (nbreCouleur5 > nbreCouleur6) {
      alert(joueur1 + " a gagné le tour n°3");
      resultatJoueur1++;
    } else {
      alert(joueur2 + " a gagné le tour n°3");
      resultatJoueur2++;
    }
  } else {
    alert("Les deux joueurs ont gagné le tour n°3");
    resultatJoueur1++;
    resultatJoueur2++;
  }
}

//résultats

if (resultatJoueur1 == resultatJoueur2) {
  alert("Les deux joueurs ont gagné la partie!");
} else if (resultatJoueur1 > resultatJoueur2) {
  alert(joueur1 + " a gagné la partie!");
} else if (resultatJoueur1 < resultatJoueur2) {
  alert(joueur2 + " a gagné la partie!");
}
