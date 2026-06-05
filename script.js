// Objectives:
// - Generate password button must work
// - Ability to set password length
// - Add "copy-on-click" button
// - Toggle symbols and numbers on/off

// prettier-ignore
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordEl1 = document.getElementById("password-1");
let passwordEl2 = document.getElementById("password-2");

let length = 10;

// Generate single character
function generate() {
  let randomIndex = Math.floor(Math.random() * characters.length);
  let randomCharacter = characters[randomIndex];
  return randomCharacter;
  generatePassword();
}

// Bring together the single characters
function generatePassword() {
  // length??
  for (let i = 0; i < length + 1; i++) {}
}

function displayPassword() {
  passwordEl1.textContent = randomCharacter;
}
