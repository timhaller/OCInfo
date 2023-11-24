const n = askForNumber("Entrez un nombre: ", "N")

let grid = ""
for (let y = 1; y <= n; y++){
  for (let x = 1; x <= n; x++){
    grid += (x+y)%2 === 0 ? "X" : "O"
  }
  grid += "\n"
}
console.log(grid)

alert(grid)
