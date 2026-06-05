// Objectives:
// - Generate password button must work
// - Ability to set password length
// - Add "copy-on-click" button
// - Toggle symbols and numbers on/off

// prettier-ignore
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let length = 15;

let generateEl = document.getElementById("generate-btn");
let passwordEl1 = document.getElementById("password-1");
let passwordEl2 = document.getElementById("password-2");

function getRandomCharacter() {
  let randomIndex = Math.floor(Math.random() * characters.length);
  return characters[randomIndex];
}

function updatePasswords() {
  generatePasswords();
}

function generatePasswords() {
  // ----------Password 1
  let characterArray1 = [];
  let passwordString1 = "";

  for (let i = 0; i < length; i++) {
    characterArray1.push(getRandomCharacter());
    passwordString1 += characterArray1[i];
  }
  passwordEl1.textContent = passwordString1;

  // ----------Password 2
  let characterArray2 = [];
  let passwordString2 = "";

  for (let i = 0; i < length; i++) {
    characterArray2.push(getRandomCharacter());
    passwordString2 += characterArray2[i];
  }
  passwordEl2.textContent = passwordString2;
}

generateEl.addEventListener("click", updatePasswords);
