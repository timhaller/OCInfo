let x = 3

let f_x = Math.pow(x-1, 2);
let h_x = Math.pow(x-1, 3);
let g_x = Math.pow(x-1, 2) / (x+4);

alert(
    'Résultats: \n' +
    'f(' + x + ') = ' + f_x + '\n' +
    'h(' + x + ') = ' + h_x + '\n' +
    'g(' + x + ') = ' + g_x + '\n'
)
