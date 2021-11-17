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


function generatePassword (){
  var password ="";
  var characters = [];
  

//  alert for password length
console.log (alert("Your password must be between 8 and 128 characters"));

//  ask for desired length of password
var result =window.prompt ("How many characters do you want in your password");

// stores results
console.log (result);

// statements to validate criterias are met
// if nothing is entered, user will need to start over
if (result == ""){
alert ("you must enter a number")
return "";
}

// if less than 8 is entered, user will start over
else if(result < 8){
  alert ("you entered a number less than 8")
  return ""; 
}

// if more than 128 is entered, user will start over
else if (result >128){
  alert ("you entered a number more thanh 128")
  return "";
}


//  user to agree that following characters will be in the password

console.log (confirm("Must have Uppercase letters"));
console.log (confirm("Must have Lowercase letters"));
console.log (confirm("Must have Numbers"));
console.log (confirm("Must have special characters"));






// creating radomn selectors

let randomUpper = upperCase [Math.floor(Math.random()* upperCase.lenth)];
let randomLower = lowerCase [Math.floor(Math.random()* lowerCase.lenth)];
let randomSpecial = specials [Math.floor(Math.random()* specials.lenth)];
let randomNumber = numbers [Math.floor(Math.random()* numbers.lenth)];


// generate password
// display the password


}


console.log ('generate a password'); {
  
  
  // return password;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


