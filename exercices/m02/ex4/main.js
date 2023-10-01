let x = parseInt(prompt("x = ?"));
let y = parseInt(prompt("y = ?"));

if (isNaN(x) || isNaN(y)) {
  alert("x et y doivent être des nombres !");
  x = 0;
  y = 0;
} else {
  alert("Valeurs Initiales : " + "\n" + "x = " + x + " et y = " + y);
  xp = x;
  yp = y;
  x = yp;
  y = xp;
  alert("Valeurs Finales : " + "\n" + "x = " + x + " et y = " + y + "\n");
}
