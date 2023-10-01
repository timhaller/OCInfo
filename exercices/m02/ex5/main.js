let x = 3;

let f_x = (x-1) * (x-1);
let h_x = (x-1) * (x-1) * (x-1);
let g_x = (x-1) * (x-1) / (x+ 4);

alert(
    'Résultats: \n' +
    'f(' + x + ') = ' + f_x + '\n' +
    'h(' + x + ') = ' + h_x + '\n' +
    'g(' + x + ') = ' + g_x + '\n'
);
