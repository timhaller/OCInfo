class Game {
  constructor() {
    this.arbres = {
      pommes: 10,
      poires: 10,
      pruneaux: 10,
      cerises: 10,
    };
    this.tailleCorbeau = 3 * 3;
    this.de = ["pommes", "poires", "pruneaux", "cerises", "corbeau", "panier"];
    this.panier = {
      pommes: 0,
      poires: 0,
      pruneaux: 0,
      cerises: 0,
    };
    this.corbeau = 0;
    this.game = true;
  }
  move() {
    let lancer = this.de[Math.floor(Math.random() * this.de.length)];
    if (this.panier[lancer] !== undefined) {
      if (this.panier[lancer] < this.arbres[lancer]) {
        this.panier[lancer] += 1;
        this.arbres[lancer] -= 1;
      }
    } else {
      switch (lancer) {
        case "corbeau":
          this.corbeau += 1;
          break;
        case "panier":
          for (let i = 0; i < 2; i++) {
            let max = Math.max(...Object.values(this.arbres));
            let fruit = Object.keys(this.arbres).filter(
              (key) => this.arbres[key] === max,
            )[
              Math.floor(
                Math.random() *
                  Object.keys(this.arbres).filter(
                    (key) => this.arbres[key] === max,
                  ).length,
              )
            ];
            this.panier[fruit] += 1;
            this.arbres[fruit] -= 1;
          }
          break;
        default:
          console.error("Something went wrong!");
      }
    }
  }
  endGame() {
    this.game = !this.game;
    return this.game;
  }
}

function oneGame(number) {
  //on crée une nouvelle instance de la classe Game
  //ceci permet de réinitialiser les valeurs à chaque fois tout en gardant les mêmes méthodes
  //on pourrait donc créer une table de jeu et jouer plusieurs parties en même temps, ou même créer plusieurs tables de jeu, qui nous permetteraient de visualiser toutes les parties jouées
  //mais pour l'instant, on ne joue qu'une partie à la fois
  const thisGame = new Game();
  while (thisGame.game) {
    thisGame.move();
    //malhereusement, le JavaScript ne permet pas de comparer deux objets, il faut donc passer par du JSON
    if (JSON.stringify(thisGame.panier) === JSON.stringify(thisGame.arbres)) {
      thisGame.endGame();
      return "player";
    } else if (thisGame.corbeau >= thisGame.tailleCorbeau) {
      thisGame.endGame();
      return "corbeau";
    }
  }
}

async function simulate(gamesToSimulate = 100000) {
  return new Promise((resolve) => {
    console.log("simulation has begun");
    let wins = { player: 0, corbeau: 0 };

    for (let n = 0; n < gamesToSimulate; n++) {
      let winner = oneGame();
      console.log(winner);
      wins[winner] += 1;
    }

    resolve(wins);
  });
}

document.addEventListener("DOMContentLoaded", async function () {
  let gamesToSimulate = 10000;

  await simulate(gamesToSimulate)
    .then((wins) => {
      console.log(wins);
      let msg = `Le corbeau a une chance de ${(
        (wins["corbeau"] / gamesToSimulate) *
        100
      ).toFixed(2)}% de gagner`;
      console.log(wins["corbeau"]);
      return msg;
    })
    .then((msg) => alert(msg));
});
