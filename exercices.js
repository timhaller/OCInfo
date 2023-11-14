document.addEventListener('DOMContentLoaded', function () {
    const terminalOutput = document.getElementById('output');
    const inputField = document.getElementById('input');

    function writeToTerminal(text) {
        terminalOutput.innerHTML += `<p>${text}</p>`;
    }

    function processCommand(command) {
        // Add your command processing logic here
        if (command.toLowerCase() === 'hello') {
            writeToTerminal('Hello World!');
        } else if (command.toLowerCase() === 'ls') {
            writeToTerminal('index.html<br>exercices.js<br>style.css')
        } else {
            writeToTerminal(`Command not found: ${command}`);
        }
    }

    inputField.focus();

    inputField.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            const command = inputField.value.trim();
            writeToTerminal(`<span>$</span> ${command}`);
            processCommand(command);
            inputField.value = '';
        }
    });
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'Tab') {
        event.preventDefault();
    }
})
