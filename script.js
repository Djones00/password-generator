// Assignment code here
function generatePassword() {
  //prompt user for password length
var passwordlength = prompt ("How many characters");
console.log (passwordlength);
  //confirm types of characters


}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
