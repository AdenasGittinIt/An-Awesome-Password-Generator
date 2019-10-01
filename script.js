var alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
var lettersArray = alpha.split('');
var upperAlpha = alpha.slice(0,26);
var lowerAlpha = lettersArray.slice(26,52);
var symbols = '!@#$%^&*)?(';
var specChars = symbols.split('');
var numbers = '123456789'
var numbersArray = numbers.split('');
var userOptions = [upperAlpha, numbersArray, specChars, lowerAlpha];


// The pormpts and confirms will be replaced by the users input into a form field or radio button
var userNeeds = prompt("How many characters would you like your password to be? (must be at least 8 characters)");

// I was trying to use this code block to make sure the user enters a number greater than 7 but it didn't quite get me 
// where I wanted to go

// if (userNeeds < 8 ) {
//   alert("Strong passwords must be at least 8 characters long.  Please enter a nubmer greater than seven.");
//   location.reload();
// }

var userNeedsSpec = confirm("Would you like to include special characters?");
var userNeedsNum = confirm("Would you like to include numbers in your password?");
var upperCase = confirm("Would you like to include uppercase letters in your password?");
var lowerCase = confirm("Would you like to include lowercase letters in your password?");
var passWord = "" 

function getRandom(arr) {
  var random1 = Math.floor((Math.random() * (arr.length)));
  return arr[random1][Math.floor((Math.random() * (arr[random1].length)))];
}

for (i = 0; i < userNeeds; i++) {
  // var randomNumber = Math.floor(Math.random() * lettersArray.length);  
  var includeRandomNum = Math.floor(Math.random() * numbersArray.length);
  var includeSpecChars = Math.floor(Math.random() * specChars.length);
  var includeUpperCase = Math.floor(Math.random() * upperAlpha.length);
  var includeLowerCase = Math.floor(Math.random() * lowerAlpha.length);


  if (passWord.length >= userNeeds) {
    break;
  }

if (userNeedsSpec && userNeedsNum && upperCase && lowerCase){
  passWord += getRandom(userOptions);
}

  // if (userNeedsSpec) {
  //   passWord += specChars[includeSpecChars];
  // } 
  // console.log(passWord);
  // if (passWord.length >= userNeeds) {
  //   break;
  // }
  
  // if (userNeedsNum){
  //   passWord += includeRandomNum; 
  // }  
  // console.log(passWord);
  // if (passWord.length >= userNeeds) {
  //   break;
  // }

  // if (upperCase) {
  //   passWord += upperAlpha[includeUpperCase];
  // }
  // console.log(passWord);
  // if (passWord.length >= userNeeds) {
  //   break;
  // }
 
  // if(lowerCase) {
  //   passWord += lowerAlpha[includeLowerCase];
  // }
 

  // if (passWord.length >= userNeeds) {
  //   break;
  // }

}

// This alert will be replaced by a method that copies the user's password to the clipboard
alert("Your password is " + passWord);


//  Pseudo Code

//  Capture the number of characters a user needs (length)

//  Capture whether or not the user needs spcecial characters

//  Capture whether or not the user needs numbers

//  Capture whether the user wants to include lowercase characters

//  Capture whether the user wants to include uppercase characters

//  Based on the above criteria creeate and return a string 

//  I don't want the user to work with prompts and alerts but I will use them initially as a tool to get my JS functioning properly.

//  Not all characters can sit in the same array since some are optional.  BUT I can have an arrary of arrays and then randomly select from there?

//  I need a method for randomly selecting these items from the array that they live in.

//  I need a means by which I can return the resulting password to the user.  

//  I need a button that the user can click that will save the password to their clipboard and a method for doing so.

//  What can I do to make this mundane task interesting and a little fun?

// My random notes...
  //passWord += alpha[randomNumber];
  // the above line of code is shorthand for the below line of code
  // passWord = passWord + alpha[randomNumber];