// Assignment code here
function generatePassword() {
  //prompt user for password length
var passwordlength = prompt ("How many characters"); //instruct user between 8-128
console.log (passwordlength);
//validate password length
  //confirm types of characters
var passwordlower = confirm ("Do you want lowercase letters?");
var passwordupper = confirm ("Do you want uppercase letters?");
var passwordnumber = confirm ("Do you want numbers?");
var passwordcharacters = confirm ("Do you want special characters?");
console.log(passwordlower, passwordupper, passwordnumber, passwordcharacters);

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
