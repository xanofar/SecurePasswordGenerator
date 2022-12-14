// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
var charset = ``
  var length = prompt("How long would you like the password? Choose between 8 to 128 characters.")
  if(length <8 || length >128){
    return alert("Error! Password must be between 8 and 128 characters!")
  }
  var hasLowerCase = confirm("Do you want lower case letters? OK for yes, Cancel for no.")
  var hasUpperCase = confirm("Do you want upper case letters? OK for yes, Cancel for no.")
  var hasSpecialCharacters = confirm("Do you want special characters? OK for yes, Cancel for no.")
  var lowerCase = `abcdefghijklmnopqrstuvwxyz`
  var upperCase = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`
  var specialCharacters = `0123456789!#$%&"'()*+-./<=>?@[]\^_{}|~`
  if(hasLowerCase){
charset += lowerCase
  }
  else if(hasUpperCase){
charset += upperCase
  }
  else if(hasSpecialCharacters){
charset += specialCharacters
  }
  else{
    alert("Error! You must choose at least one character type!")
  }
      retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}