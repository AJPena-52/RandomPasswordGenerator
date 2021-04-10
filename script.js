

// Function for the special characters

var specialCharacters = ')(*&^%$#@!';

var  GenerateBtn = document.getElementById('generate')
GenerateBtn.addEventListener('click', writePassword)





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// prompts for the criteria after clicking generate btn

function generatePassword() {
  var characterLength = prompt("Please choose the number of characters for your password. Must be between 8 to 128 characters");

  var numbers = confirm("Do you want to include numbers in your password?")

  var lowerCase = confirm('Do you want to include lowercases in your password?')

  var uppercase = confirm('Do you want to include uppercases in you password?')

  var SpecialCharacters = confirm('What about special characters?')
//}

// minimum count
var minCount = 0;
// Empy minimums
var minNumbers = "";
var minSpercialCharacters ="";
var minUppercase ="";
var minLowercase ="";






// functions for generator
var generator = {
  getNumbers: function() {
    return String.fromCharcode(Math.floor(Math.random() * 10+ 48));
  },

  getLowercases: function() {
    return String.fromCharCode(Math.floor(Math.random()* 26 + 97));
  },
  getUpperCases: function() {
    return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
  },

  getSpecialCharacters: function() {
    return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
  }

};


// if user slecets all for empty minimums
if (numbers === true) {
  minNumbers = generator.getNumbers();
  minCount++;

}

if (lowerCase === true) {
  minLowerCases = generator.getLowerCases();
  minCount++;

}

if (uppercase === true) {
  minUpperCases = generator.getUpperCases();
  minCount++;

}

if (specialCharacters === true) {
  minSpecialCharacters = generator.getSpecialCharacters();
  minCount++;

}


var randomPassword = "";

// loop for random characters

for (let i = 0; i < (parseInt(characterLength) - minCount); i++){
  var randomNumber= Math.floor(Math.random() * 4);

  randomPassword += randomNumber;
}

randomPassword += minNumbers;
randomPassword += minLowerCases;
randomPassword += minUpperCases;
randomPassword += minSpercialCharacters;


return randomPassword;
}



