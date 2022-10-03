// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
var allCap = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var noCap = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var specChar = ["~","!","@","#","$","%","^","&","*","(",")","_","+","{","}","|","<",">","/"];
var numb = ["1","2","3","4","5","6","7","8","9"];
var passwordArray = [];



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  /* 
    We can use object destructuring to unpack all of the values returned
    by the gatherInput function. 
    https://www.javascripttutorial.net/es6/javascript-object-destructuring/
  */ 
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
  };
  if (uppers === true) {
    var p2Array = p1Array.concat(allCap);
  };
  if (numbers === true) {
    var p3Array = p2Array.concat(numb);
  };
  if (specials === true) {
    var p4Array = p3Array.concat(specChar);
  };
  function getMultipleRandom(arr, num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
  
    return shuffled.slice(0, num);
  };
  console.log(getMultipleRandom(p4Array, length));
  /* 
    This way we can use the object keys as variable names directly,
    without having to point to the object name first like this:
    var inputs = gatherInput()
    inputs.length
    inputs.lowers
    inputs.uppers, etc.
  */
}

function gatherInput() {
  /* 
    The prompt, confirm, and alert methods on the window object
    function in a specific way that essentially pauses the execution
    of the rest of the code until a response is given.
  */
          // parseInt converts the prompt response from a string to a number
    var chosenLength = parseInt(window.prompt("How many characters should your password include?"));
    console.log(typeof chosenLength)
    if (chosenLength < 8 || chosenLength > 128) {
      window.alert("Password must be greater than 8 and no more than 128 characters long!");
      gatherInput()
    }
    /* 
      Execution pauses at each prompt until the value is resolved,
      so we can ask all of our questions at once to get the values
      we will be working with for the generate function
    */
    /* 
      The confirm methods lets us ask a yes-or-no question, returning
      true or false, respectively.  Then we can use those conditions in our generate
      function to determine which types of characters to include.
    */
    var hasLowers = window.confirm("Include lower-case characters?");
    var hasUppers = window.confirm("Include upper-case characters?");
    var hasNumbers = window.confirm("Include numbers?");
    var hasSpecials = window.confirm("Include special characters?");




    



    /* Package all of the user's choices into a single object to return */
    return {
      length: chosenLength,
      lowers: hasLowers,
      uppers: hasUppers,
      numbers: hasNumbers,
      specials: hasSpecials
    }
}