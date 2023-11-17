document.addEventListener("DOMContentLoaded", async function () {
  const terminalOutput = document.getElementById("output");
  const inputField = document.getElementById("input");

  const pathField = document.getElementById("path");
  let path = "~";

  function writeToTerminal(text) {
    terminalOutput.innerHTML += `<p>${text}</p>`;
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
    }
  });
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Tab") {
    event.preventDefault();
  }
});
