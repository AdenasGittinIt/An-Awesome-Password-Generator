//The code written below will generate a password based on the user's criteria but it is not truly random because
//I'm systematically choosing a random item from each of my individual arrays. 
//I will work on fixing this and hopefully update GitHub with the result before this is graded.  

var alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
var lettersArray = alpha.split('');
var upperAlpha = alpha.slice(0,26);
var lowerAlpha = lettersArray.slice(26,52);
var symbols = '!@#$%^&*)?(';
var specChars = symbols.split('');
var userNeeds = prompt("How many characters would you like your password to be?");
var userNeedsSpec = confirm("Would you like to include special characters?");
var userNeedsNum = confirm("Would you like to include numbers in your password?");
var upperCase = confirm("Would you like to include uppercase letters in your password?");
var lowerCase = confirm("Would you like to include lowercase letters in your password?");
var passWord = "" 

if (userNeeds < 8 ) {
  alert("Strong passwords must be at least 8 characters long");
  location.reload();
}


for (i = 0; i < userNeeds; i++) {
  var randomNumber = Math.floor(Math.random() * lettersArray.length);  
  var includeRandomNum = Math.floor(Math.random() * 10);
  var includeSpecChars = Math.floor(Math.random() * specChars.length);
  var includeUpperCase = Math.floor(Math.random() * upperAlpha.length);
  var includeLowerCase = Math.floor(Math.random() * lowerAlpha.length);

  if (passWord.length >= userNeeds) {
    break;
  }

  if (userNeedsSpec) {
    passWord += specChars[includeSpecChars];
  } 
  console.log(passWord);
  if (passWord.length >= userNeeds) {
    break;
  }
  
  if (userNeedsNum){
    passWord += includeRandomNum; 
  }  
  console.log(passWord);
  if (passWord.length >= userNeeds) {
    break;
  }

  if (upperCase) {
    passWord += upperAlpha[includeUpperCase];
  }
  console.log(passWord);
  if (passWord.length >= userNeeds) {
    break;
  }
 
 
  // if (passWord += alpha[randomNumber]){

  // };

  if (passWord.length >= userNeeds) {
    break;
  }
  
  //passWord += alpha[randomNumber];
  // the above line of code is shorthand for the below line of code
  // passWord = passWord + alpha[randomNumber];
}

alert("Your password is " + passWord);

// console.log(passWord);
// console.log(passWord.length);


// Pseudo Code

// Capture the number of characters a user needs (length)

// Capture whether or not the user needs spcecial characters

// Capture whether or not the user needs numbers

// Capture whether the user wants to include lowercase characters

// Capture whether the user wants to include upper characters

// Based on the above criteria return a string 

// I don't want the user to work with prompts and alerts but I will use them as a tool to get my JS functioning properly.


// Not all characters can sit in the same array since some are optional.  BUT I can have an arrary of arrays.

// I need a method for randomly selecting these items from the array that they live in.

// I need a means by which I can return the resulting password to the user.  

// I need a button that the user can click that will save the password to their clipboard and a method for doing so.

// What can I do to make this mundane task interesting and a little fun?