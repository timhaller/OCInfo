document.addEventListener("DOMContentLoaded", async function () {
  const terminalOutput = document.getElementById("output");
  const inputField = document.getElementById("input");

  const pathField = document.getElementById("path");
  let path = "~";

  function writeToTerminal(text) {
    terminalOutput.innerHTML += `<p>${text}</p>`;
  }

  //recreating the three js popup windows (alert, prompt, confirm)

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
    })
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
    })
  }

  function writePath(text) {
    pathField.innerHTML = `${text}`;
  }

  const files = await fetch("./paths.json")
    .then((response) => response.json())
    .then((data) => {
      return data.modules;
    });

  function checkPath(list, path) {
    return list.find((element) => element.name === path) !== undefined;
  }

  const commands = ['hello', 'ls', 'cd', 'open']; // Predefined commands for autocompletion
  const paths = ['module', 'exercice']; // Predefined paths for autocompletion

  async function processCommand(command) {
    // Add your command processing logic here
    switch (command[0]) {
      case "hello":
        writeToTerminal("Hello World!");
        break;
      case "ls":
        let dirToList = command[1] || path;
        console.log(checkPath(files, dirToList));
        let module = checkPath(files, dirToList)
          ? files
              .find((element) => element.name === dirToList)
              .exercices.map((element) => element.name)
          : files.map((element) => element.name);
        console.log(module);
        writeToTerminal(module.join(" "));
        break;
      case "cd":
        let dirToGo = command[1] || "~";
        console.log(dirToGo);
        checkPath(files, dirToGo) || dirToGo === "~"
          ? ((path = dirToGo), (pathField.innerHTML = `${path}`))
          : writeToTerminal(`Directory not found: ${dirToGo}`);
        break;
      case "clear":
        terminalOutput.innerHTML = "";
        break;
      case "open":
        let fileToOpen = command[1];
        if (fileToOpen === undefined) {
          writeToTerminal(`No file specified`);
          break;
        }
        let basePath = path;
        if (fileToOpen.split("/").length > 1) {
          basePath = fileToOpen.split("/")[0];
          fileToOpen = fileToOpen.split("/")[1];
        }
        let exercice = {};
        if (checkPath(files, basePath)) {
          exercice = files
            .find((element) => element.name === basePath)
            .exercices.find((exercice) => exercice.name === fileToOpen);
        } else {
          writeToTerminal(`Directory not found: ${basePath}`);
          break;
        }
        console.log(exercice);
        open(exercice.path);
        break;
      case "prompt":
        console.log(await prompt("Enter your name: "));
        break;
      case "confirm":
        const accepted = await customConfirm("Are you sure?").then((res) => console.log(res));
        break;
      case "run":
        let newScript = document.createElement('script');
        newScript.type = 'text/javascript';
        newScript.src = './alert.js';
        document.getElementsByTagName('head')[0].appendChild(newScript);
        break;
      case "rm":
        if (command[1] === "-rf") {
          const confirmed = await customConfirm("Are you sure?").then((res) => res);
          if (confirmed) {
            writeToTerminal("Deleted");
            document.cookie = "deleted=true";
            document.getElementById("terminal").remove();
          } else {
            writeToTerminal("Cancelled");
          }
        }
        break;
      default:
        writeToTerminal(`Command not found: ${command}`);
    }
  }

  inputField.focus();

  await inputField.addEventListener("keydown", async function (event) {
    if (event.key === "Enter") {
      let command = inputField.value.trim();
      writeToTerminal(`<span>$</span> ${command}`);
      let fullCommand = command.split(" ");
      await processCommand(fullCommand);
      inputField.value = "";
    } else if (event.key === "Tab") {
      event.preventDefault()
      let currentInput = inputField.value.toLowerCase();
      const matchingCommands = commands.filter(cmd => cmd.startsWith(currentInput));

      if (matchingCommands.length === 1) {
        inputField.value = matchingCommands[0] + " ";
      }

      currentInput = currentInput.split(' ')
      console.log(currentInput)
      const matchingPaths = paths.filter(p => p.startsWith(currentInput[1]));

      if (matchingPaths.length === 1) {
        inputField.value = currentInput[0] + ' ' + matchingPaths[0];
      }
    }
  });
});
