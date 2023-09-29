const a = parseInt(prompt("A: "))
const b = parseInt(prompt("B: "))
const c = parseInt(prompt("C: "))

function findSolutions() {
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        console.log("Error: invalid input");
        return "Error: invalid input"
    }
    

    const delta = b ** 2 - 4 * a * c

    if (delta < 0) {
        return "No solutions"
    } else if (delta == 0) {
        return -b / (2 * a)
    }
    else {
        return [(-b + Math.sqrt(delta)) / (2 * a), (-b - Math.sqrt(delta)) / (2 * a)]
    }
}

alert(findSolutions())
