


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Variable Declaration
var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;
var charLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var charUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var charNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var charSpecial = ["`", "~", "!", "@", "#", "$", "%", "^", "*", "(", ")", "-", "_", "=", "+", "|", "[", "]", "{", "}", ";", ":", "'", ",", ".", "<", ">", "/", "?"];




function generatePassword() {
   var selectedChar = [];
   var tempPass = [];
   var newPassword = "";
// Prompt to confirm how many characters the user would like in their password
  confirmLength = (prompt("How many characters(between 8 - 128) would you like your password to contain"));
  // Ask again and let user know if answer is outside the parameters
  while (!(confirmLength >= 8 && confirmLength <= 128)) {
    alert("Password length must be between 8 - 128 characters Try again");
     confirmLength = (prompt("How many characters would you like your password to contain ?"));
  }
   do{ // Determine parameters of password
   confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase letters");
   confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase letters");
   confirmNumericCharacter = confirm("Click OK to confirm if you would like to include numebers");
   confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
  if (!confirmLowerCase && !confirmUpperCase && !confirmNumericCharacter &&!confirmSpecialCharacter ){
    alert("Need at least one condition")
  }} 
   while (!confirmLowerCase && !confirmUpperCase && !confirmNumericCharacter && !confirmSpecialCharacter)

   if(confirmLowerCase){
     tempPass.push(charLowerCase[Math.floor(Math.random()*charLowerCase.length)]);
     for(var i =0; i<charLowerCase.length; i++){
       selectedChar.push(charLowerCase[i]);
     }
   }
   if (confirmUpperCase) {
     tempPass.push(charUpperCase[Math.floor(Math.random() * charUpperCase.length)]);
    for (var k = 0; k < charUpperCase.length; k++) {
      selectedChar.push(charUpperCase[k]);
    }
  } 
   if (confirmNumericCharacter) {
     tempPass.push(charNumbers[Math.floor(Math.random() * charNumbers.length)]);
    for (var l = 0; l < charNumbers.length; l++) {
      selectedChar.push(charNumbers[l]);
    }
  } 
   if (confirmSpecialCharacter) {
     tempPass.push(charSpecial[Math.floor(Math.random() * charSpecial.length)]);
     for (var m = 0; m < charSpecial.length; m++) {
       selectedChar.push(charSpecial[m]);
    }
  }
  for(var j = 0; j < confirmLength; j++){
    tempPass.push(selectedChar[Math.floor(Math.random()*selectedChar.length)]);
  }
  tempPass.sort(function (a, b) { return 0.5 - Math.random() });
  for (var o = 0; o < confirmLength; o++){
    newPassword += tempPass[o];
  }
  return newPassword;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
