let x = 0
let y = 0

x = parseInt(prompt('x = ?'));
y = parseInt(prompt('y = ?'));

if (isNaN(x) || isNaN(y)) {
    alert('x et y doivent être des nombres !');
    x = 0;
    y = 0;
}

alert('x = ' + x + ' et y = ' + y + '\n' + 'x + y = ' + (x + y) + '\n' + 'x - y = ' + (x - y) + '\n' + 'x * y = ' + (x * y) + '\n' + 'x / y = ' + (x / y) + '\n' + 'x % y = ' + (x % y) + '\n' + 'x ** y = ' + (x ** y));

