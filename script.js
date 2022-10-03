// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// These are the arrays that will be selected for generating a password
var allCap = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var noCap = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var specChar = ["~","!","@","#","$","%","^","&","*","(",")","_","+","{","}","|","<",">","/",":",";","[","]","|","'","*","?"];
var numb = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26"];
var passwordArray = [];



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//This function takes the information from gatherInput function and uses it to create new arrays and transfer them down to the next prompt
function generatePassword() {

  var {length, lowers, uppers, numbers, specials} = gatherInput();
  console.log(`
    Length: ${length}
    Lowers: ${lowers}
    Uppers: ${uppers}
    Numbers: ${numbers}
    Specials: ${specials}
  `)

  if (lowers === true) {
    var p1Array = passwordArray.concat(noCap);
  }
  else var p1Array = passwordArray;

  if (uppers === true) {
    var p2Array = p1Array.concat(allCap);
  }
  else var p2Array = p1Array;

  if (numbers === true) {
    var p3Array = p2Array.concat(numb);
  }
  else var p3Array = p2Array;

  if (specials === true) {
    var p4Array = p3Array.concat(specChar);
  }
  else var p4Array = p3Array;

//This is a function to randomly select strings from the p4Array
  function randomizeArray(arr, num) {
    const jumble = [...arr].sort(() => 0.5 - Math.random());
  
    return jumble.slice(0, num);
  };

  
  var finalPassword = (randomizeArray(p4Array, length));

  //This is an array to remove the commas from the array for a cleaner look
  var sikePasswordFinal = (finalPassword.join(""))


 return sikePasswordFinal;
}

//This function is where the data from the prompts are stored
function gatherInput() {

    var chosenLength = parseInt(window.prompt("How many characters should your password include?"));
    console.log(typeof chosenLength)
    if (chosenLength < 8 || chosenLength > 128) {
      window.alert("Password must be greater than 8 and no more than 128 characters long!");
      gatherInput()
    }

    var hasLowers = window.confirm("Include lower-case characters?");
    var hasUppers = window.confirm("Include upper-case characters?");
    var hasNumbers = window.confirm("Include numbers?");
    var hasSpecials = window.confirm("Include special characters?");

    return {
      length: chosenLength,
      lowers: hasLowers,
      uppers: hasUppers,
      numbers: hasNumbers,
      specials: hasSpecials
    }
}