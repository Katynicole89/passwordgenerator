// Assignment code here

//letter variables
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789";
let special = "!#$%&\()*+,-./:;<=>?@^[\\]^_`{|}~";

let randompw = "";




//ask for length of password between 8-128
function generatePassword(){
  let passwordlength = window.prompt("How many characters would you like, please select between 8-128.");

//if not between 8-128 start this function over
  while (passwordlength < 8 || passwordlength > 128) {
    passwordlenth = prompt("Please select between 8-128");

  }
  if  (!passwordlength) return;
//Ask questions on which variables they want.

 
let uppercaseConfirm = confirm("Would you like to use uppercase letters?");
let lowercaseConfirm = confirm("Would you like to use lowercase letters?");
let numbersConfirm = confirm("Would you like to include numbers?");
let specialConfirm = confirm("Would you like to use special characters?");
//empty variable for choices
let passwordchars = "";

if (uppercaseConfirm === true)
passwordchars = passwordchars.concat(uppercase);

if (lowercaseConfirm === true)
passwordchars = passwordchars.concat(lowercase);

if (numbersConfirm === true)
passwordchars = passwordchars.concat(numbers);

if (specialConfirm === true)
passwordchars = passwordchars.concat(special);


for(let i = 0; i < passwordlength; ++i) {
  randompw = Math.floor(Math.random() * Math.floor(passwordlength.length));}
  return randompw
}


;


// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)