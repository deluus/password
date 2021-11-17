// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// Declare variables to store values

var upperCase =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase =["a","b","c","d","e","f","g","h","i","j","k","l","m","m","o","p","q","r","s","t","u","v","w","x","y","z"];
var specialCharacters =["!","@","$","%","^","&","*"];
var numbers =["1","2","3","4","5","6","7","8","9","0"];


// what does my app need from the user?
// criteria : a password length 
           // b character types 
           // c confirm whether to include lowerCase, uppercase, numeric, and/or special characters

// generate password
// display the password


console.log (alert("A message"));

console.log (prompt("Give me more info"));

console.log (confirm("A yes / A no choice"));


// validate input





function generatePassword (){
  var password ="";
  var characters = [];



console.log ('generate a password')


var passwordLength =10;
var isUpperCase = true;
var isLowerCase = true;
var isNumbers = true;
var isSpecial = true;

// creating radomn selectors

// let randomValue = upperCase [Math.floor(Math.random()* upperCase.lenth)];
// let randomValue = lowerCase [Math.floor(Math.random()* lowerCase.lenth)];
// let randomValue = specialCharacters [Math.floor(Math.random()* specialCharacters.lenth)];
// let randomValue = numbers [Math.floor(Math.random()* numbers.lenth)];


return password;

}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
