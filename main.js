const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

const randomChar = () => chars[Math.floor(Math.random() * (chars.length - 1))],
    randomString = length => Array.from(Array(length)).map(randomChar).join("");

const letters = document.getElementById("letters");

function MyFunction() {
    letters.innerHTML = randomString(1500)
}

letters.onmousemove = function (e) {
    letters.style.setProperty("--x", e.clientX + "px");
    letters.style.setProperty("--y", e.clientY + "px");
    letters.innerText = randomString(1500)
}

