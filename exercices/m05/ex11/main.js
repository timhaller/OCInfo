let capital = askForNumber("Enter the capital: ", "R");
const interest = (askForNumber("Enter the interest in percent: ", "R") / 100).toFixed(3);
const years = askForNumber("Enter the number of years: ", "N");
let total = capital;
let message = "Year\tCapital\tInterest\n";
console.log(capital, interest, years);
for (let i = 1; i <= years; i++) {
    capital += capital * interest;
  let row = i + "\t" + capital.toFixed(3) + "\t" + (total * interest).toFixed(3) + "\n";
  message += row;
  total = capital;
}
alert(message);
