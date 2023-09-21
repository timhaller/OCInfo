const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

const randomChar = () => chars[Math.floor(Math.random() * (chars.length - 1))],
    randomString = length => Array.from(Array(length)).map(randomChar).join("");

const letters = document.getElementById("card-letters");

function loop() {
    document.getElementById("card-letters").innerHTML = randomString(3200)
}

window.onload = () => {
    setInterval(loop, 200);
}
