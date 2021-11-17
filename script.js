// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// Declare variables to store values

var upperCase =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase =["a","b","c","d","e","f","g","h","i","j","k","l","m","m","o","p","q","r","s","t","u","v","w","x","y","z"];
var specials =["!","@","$","%","^","&","*"];
var numbers =["1","2","3","4","5","6","7","8","9","0"];


// what does my app need from the user?
// criteria : a password length 
           // b character types 
           // c confirm whether to include lowerCase, uppercase, numeric, and/or special characters

  
           
var isMin = 8;
var isMax = 128;
var isUpperCase = true;
var isLowerCase = true;
var isNumbers = true;
var isSpecials = true;



console.log (alert("Your password must be between 8 and 128 characters"));

console.log (prompt("How many characters do you want in your password?"));

if( passwordLength < 8 && paswordLength >128){
  console.log ( alert("Your password must be between 8 and 128 characters"));

}

console.log (confirm("Must have Uppercase letters"));
console.log (confirm("Must have Lowercase letters"));
console.log (confirm("Must have Numbers"));
console.log (confirm("Must have special characters"));


// validate input
if (isMin)



// creating radomn selectors

// let randomValue = upperCase [Math.floor(Math.random()* upperCase.lenth)];
// let randomValue = lowerCase [Math.floor(Math.random()* lowerCase.lenth)];
// let randomValue = specialCharacters [Math.floor(Math.random()* specialCharacters.lenth)];
// let randomValue = numbers [Math.floor(Math.random()* numbers.lenth)];


// generate password
// display the password



function generatePassword (){
  var password ="";
  var characters = [];
  



console.log ('generate a password')



return password;

}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
