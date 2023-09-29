const diceAmount = 5
const rounds = 3

let userDice = []

function throwDice(amount) {
  return Array.from({length: amount}, () => Math.floor(Math.random() * 6 + 1));
}

for (let i = 0; i < rounds - 1; i++) {
    const dice = throwDice(diceAmount - userDice.length)

    alert("Tour : " + (i + 1) + "\n" + "Your dice: " + dice.join(", "))
    for (let i = 0; i < dice.length; i++) {
        confirm("Keep die" + (i + 1) + "?\n" + "(value " + dice[i] + ")") ? userDice.push(dice[i]) : null
    }
}

userDice += throwDice(diceAmount - userDice.length)

alert("Your dice: " + userDice.join(", "))
