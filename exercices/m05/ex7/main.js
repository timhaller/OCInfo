const n = askForNumber("Enter a number: ", "N");

let table = ""
for (let y = 1; y <= n; y++) {
  let row = "";
  for (let x = 1; x <= n; x++) {
    row += (x + y) % 2 === 0 ? "X" : "O";
  }
  table += row + "\n";
}

alert(table);
