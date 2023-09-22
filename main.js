const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const mutedIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><path fill="white" d="M8 2.75v10.5a.751.751 0 0 1-1.238.57L3.473 11H1.75A1.75 1.75 0 0 1 0 9.25v-2.5C0 5.784.784 5 1.75 5h1.722l3.29-2.82A.75.75 0 0 1 8 2.75Zm3.28 2.47L13 6.94l1.72-1.72a.751.751 0 0 1 1.042.018a.751.751 0 0 1 .018 1.042L14.06 8l1.72 1.72a.749.749 0 0 1-.326 1.275a.749.749 0 0 1-.734-.215L13 9.06l-1.72 1.72a.749.749 0 0 1-1.275-.326a.749.749 0 0 1 .215-.734L11.94 8l-1.72-1.72a.749.749 0 0 1 .326-1.275a.749.749 0 0 1 .734.215Zm-7.042 1.1a.752.752 0 0 1-.488.18h-2a.25.25 0 0 0-.25.25v2.5c0 .138.112.25.25.25h2c.179 0 .352.064.488.18L6.5 11.62V4.38Z"/></svg>`;
const audioIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><path fill="white" d="M7.563 2.069A.75.75 0 0 1 8 2.75v10.5a.751.751 0 0 1-1.238.57L3.472 11H1.75A1.75 1.75 0 0 1 0 9.25v-2.5C0 5.784.784 5 1.75 5h1.723l3.289-2.82a.75.75 0 0 1 .801-.111ZM6.5 4.38L4.238 6.319a.748.748 0 0 1-.488.181h-2a.25.25 0 0 0-.25.25v2.5c0 .138.112.25.25.25h2c.179 0 .352.064.488.18L6.5 11.62Zm6.096-2.038a.75.75 0 0 1 1.06 0a8 8 0 0 1 0 11.314a.751.751 0 0 1-1.042-.018a.751.751 0 0 1-.018-1.042a6.5 6.5 0 0 0 0-9.193a.75.75 0 0 1 0-1.06Zm-1.06 2.121l-.001.001a5 5 0 0 1 0 7.07a.749.749 0 0 1-1.275-.326a.749.749 0 0 1 .215-.734a3.5 3.5 0 0 0 0-4.95a.75.75 0 1 1 1.061-1.061Z"/></svg>`;
const tick1 = new Audio("assets/tick1.mp3");

const randomChar = () => chars[Math.floor(Math.random() * (chars.length - 1))],
  randomString = (length) => Array.from(Array(length)).map(randomChar).join("");

const letters = document.getElementById("card-letters");
const card = document.getElementById("card");
// const sound = document.getElementById('sound-effect');
let muted = false;
let animate = true;

function loop() {
  animate
    ? (document.getElementById("card-letters").innerHTML = randomString(1500))
    : null;
  animate && !muted ? tick1.play() : null;
}

function newlines(amount) {
  let str = "";
  for (let i = 0; i < amount; i++) {
    let newline =
      "<span style='overflow: hidden; word-wrap: normal'>" +
      randomString(100) +
      "</span> ";
    str += newline;
  }
  return str;
}

function mute() {
  muted = !muted;
  // muted ? sound.pause() : sound.play();
  document.getElementById("audio-icon").innerHTML = muted
    ? mutedIcon
    : audioIcon;
}

letters.innerText = randomString(700);

window.onload = () => {
  setInterval(loop, 200);

  letters.onmouseenter = () => {
    animate = false;
    // sound.pause();
    letters.style.color = "grey";

    let startLines = Math.random() * (8 - 4) + 4;
    letters.innerHTML = `
            ${newlines(startLines)}
            <span style="width: fit-content; word-wrap: normal">
                ${randomString(
                  30,
                )}<span>&nbsp;<a href='exercices.html' style='color: white; display: inline'>Exercices</a>&nbsp;</span>${randomString(
                  30,
                )}
            </span>
            ${newlines(27 - startLines)}
        `;
  };

  letters.onmouseleave = () => {
    animate = true;
    letters.style.color = "white";
  };
};
