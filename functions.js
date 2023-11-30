//recreating the three js popup windows (alert, prompt, confirm) for later use in the terminal (exercices.js)

//alert
function customAlert(text = "") {
    terminalOutput.innerHTML += `<p>${text}</p>`;
}

//since window.alert is a function, we can override it
window.alert = customAlert;

//prompt
function prompt(text = "") {
    return new Promise((resolve) => {
        terminalOutput.innerHTML += `<span id="promptLine"><span>${text} :</span> <input type="text" id="prompt" /></span>`;
        const promptInput = document.getElementById("prompt");
        promptInput.focus();
        let command = "";
        promptInput.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                command = promptInput.value.trim();
                writeToTerminal(`<span>${text} :</span> ${command}`);
                promptInput.value = "";
                const promptLine = document.getElementById("promptLine");
                promptLine.remove();
                inputField.focus();
                resolve(command);
            }
        });
    });
}

//confirm
async function customConfirm(text = "") {
    return new Promise((resolve) => {
        terminalOutput.innerHTML += `<span id="confirmLine"><span>${text} [Y/n]</span> <input type="text" id="confirm" /></span>`;
        const confirmInput = document.getElementById("confirm");
        confirmInput.focus();
        let command = "";
        confirmInput.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                command = confirmInput.value.trim().toLowerCase();
                const accepted = command === "y" || command === "";
                writeToTerminal(`<span>${text} :</span> ${command}`);
                confirmInput.value = "";
                const confirmLine = document.getElementById("confirmLine");
                confirmLine.remove();
                inputField.focus();
                resolve(accepted);
            }
        });
    });
}
