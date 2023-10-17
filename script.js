// Assignment code here
function generatePassword() {
  //prompt user for password length
  var passwordlength = prompt("How many characters"); //instruct user between 8-128
  var passwordcharacters = [];
  var possiblecharacters = [];
  console.log(passwordlength);
  //validate password length
if (passwordlength < 8 || passwordlength > 128 || isNaN(passwordlength)) {
  return "wrong amount please try again" 
}
  //confirm types of characters
  var passwordlower = confirm("Do you want lowercase letters?");
  var passwordupper = confirm("Do you want uppercase letters?");
  var passwordnumber = confirm("Do you want numbers?");
  var specialcharacter = confirm("Do you want special characters?");
  console.log(passwordlower, passwordupper, passwordnumber, specialcharacter);
  //validate user chose at least one character 
  
  var passwordlowerstring = "abcdefghijklmnopqrstuvwxyz"
  var passwordupperstring = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var passwordnumberstring = "0123456789"
  var specialcharacterstring = "!@#$%^&*()<>"

  var passwordlowerArr = passwordlowerstring.split("")
  if(passwordlower) {
possiblecharacters = possiblecharacters.concat(passwordlowerArr)
  }
  console.log(possiblecharacters);

  var passwordupperArr = passwordupperstring.split("")
  if(passwordupper) {
possiblecharacters = possiblecharacters.concat(passwordupperArr)
  }
  console.log(possiblecharacters);

  var passwordnumberArr = passwordnumberstring.split("")
  if(passwordnumber) {
possiblecharacters = possiblecharacters.concat(passwordnumberArr)
  }
  console.log(possiblecharacters);

  var specialcharacterArr = specialcharacterstring.split("")
  if(specialcharacter) {
possiblecharacters = possiblecharacters.concat(specialcharacterArr)
  }
  console.log(possiblecharacters);
  
  for(var i = 0; i < passwordlength; i++) {
var randomcharacter = getrandomElement(possiblecharacters);
passwordcharacters.push(randomcharacter);
  }
  return passwordcharacters.join("");
}
function getrandomElement(array) {
var randomindex = Math.floor(Math.random() * array.length);
var randomelement = array[randomindex];
return randomelement;
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
