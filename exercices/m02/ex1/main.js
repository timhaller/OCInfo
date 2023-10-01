const name = prompt("Quel est votre nom ?").toUpperCase();
const firstName = prompt("Quel est votre prénom ?");
const job = prompt(
  "Cher Monsieur " + name + " " + firstName + ", quel est votre métier ?",
);

alert(
  "Bienvenue Cher Monsieur " +
    firstName +
    " " +
    name +
    ", vous qui travaillez chez " +
    job +
    ".",
);
