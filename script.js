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
  var finalPassword ="";
  var finalVar ="";
  var characters = [];
  

//  alert for password length

alert("Your password must be between 8 and 128 characters");

//  ask for desired length of password

var passwordLength = prompt("Enter your desired password length");

// statements to validate criterias are met

// if nothing is entered, user will need to start over
if (passwordLength == "") {
alert ("you must enter a number")
return "";
}

// if less than 8 is entered, user will start over
else if(passwordLength < 8){
  alert ("you entered a number less than 8")
  return ""; 
}

// if more than 128 is entered, user will start over
else if (passwordLength >128){
  alert ("you entered a number more than 128")
  return "";
}


//  user to agree that following characters will be in the password and must select one of each

var hasUppers = confirm("Must have Uppercase letters");
var hasLowers = confirm("Must have Lowercase letters");
var hasNumbers = confirm("Must have Numbers");
var hasSpecials = confirm("Must have special characters");

if (!hasUppers && !hasLowers && !hasNumbers && !hasSpecials){
  alert( "please select to meet all criteria")
  
}
//  verifying that all criteria was met 
if (hasUppers){
  
  characters = characters.concat(upperCase);
}

if(hasLowers){
  characters = characters.concat(lowerCase);
}

if (hasNumbers){
  characters = characters.concat(numbers);
}

if(hasSpecials){
  characters = characters.concat(specials)
}

//  where the password is generated
for (i = 0; i < passwordLength; i ++ ){
  var randomIndexValue = characters [Math.floor(Math.random() * characters.length)];
  finalVar  += randomIndexValue;

}
return finalVar;

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

}