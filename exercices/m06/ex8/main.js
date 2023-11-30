function cesarCipher() {
  const str =  prompt("Enter a message to encrypt: ");
  const num = askForNumber("Enter a number: ", "N")
  const allLetters = [..."abcdefghijklmnopqrstuvwxyz", " "];
  let message = "";
  for (let letter of str) {
    if (!allLetters.includes(letter)) {
      console.error("Invalid character");
      return;
    }
    const index = allLetters.indexOf(letter);
    const newIndex = (index + num) % allLetters.length;
    message += allLetters[newIndex];
  }
  alert(message);
}

function cesarDecipher() {
  const str =  prompt("Enter a message to decrypt: ");
  const num = askForNumber("Enter the key: ", "N")
  const allLetters = [..."abcdefghijklmnopqrstuvwxyz", " "];
  let message = "";
  for (let letter of str) {
      if (!allLetters.includes(letter)) {
      console.error("Invalid character");
      return;
      }
      const index = allLetters.indexOf(letter);
      const newIndex = (index - num + allLetters.length) % allLetters.length;
      message += allLetters[newIndex];
  }
  alert(message);
}

