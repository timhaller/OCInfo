const tries = 3;
const maxNumber = 20;

const magicNumber = Math.floor(Math.random() * maxNumber + 1);
let won = false;
let lastNumber = { num: null, compare: null };

for (let i = 0; i < tries; i++) {
  const guess = parseInt(
    prompt(
      "Guess the number\n" +
        `${
          lastNumber.num != null
            ? "Last try: " +
              lastNumber.num +
              " was too " +
              lastNumber.compare +
              "\n"
            : ""
        }` +
        (tries - i) +
        " tries left",
    ),
  );

  if (isNaN(guess)) {
    alert("Invalid input");
    i--;
    continue;
  }

  lastNumber.num = guess;

  if (guess == magicNumber) {
    alert("You guessed it!");
    won = true;
    break;
  } else if (guess > magicNumber) {
    lastNumber.compare = "high";
  } else {
    lastNumber.compare = "low";
  }
}

if (!won) {
  alert("You lost!");
  alert("☹️");
  alert(`The number was ${magicNumber}`);
}
