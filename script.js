//Capture the number of characters a user needs (length)

//Capture whether or not the user needs spcecial characters

//Capture whether or not the user needs numbers

//Capture whether the user wants to include lowercase characters

//Capture whether the user wants to include upper characters

//Based on the above criteria return a string 



var alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
var pwdLetters = alpha.split('');
var upperLetters = alpha.slice(0,26);
var lowerAlpha = pwdLetters.slice(26,52);
var symbols = '!@#$%^&*)?(';
var specChars = symbols.split('');
var userNeeds = prompt("How long should you password be?");
var userNeedsSpec = confirm("Would you like to include special characters?");
var includeNumber = confirm("Would you like to include numbers in your password?");
// var upperCase = confirm("Would you like to include uppercase letters in your password?");
// var lowerCase = confirm("Would you like to include lowercase letters in your password?");

var randomNumber = Math.floor(Math.random() * pwdLetters.length);
var passWord = "" 

for (i = 0; i < userNeeds; i++) {
  var randomNumber = Math.floor(Math.random() * pwdLetters.length);  
  var includeRandomNum = Math.floor(Math.random() * 10);
  var includeSpecChars = Math.floor(Math.random() * specChars.length);
  if (passWord.length >= userNeeds) {
    break;
  }
  if (userNeedsSpec == true) {
    passWord += specChars[includeSpecChars];
      } 
  if (includeNumber){
    passWord += includeRandomNum; 
  }  
  passWord += alpha[randomNumber];
  // the above line of code is shorthand for the below line of code
  // passWord = passWord + alpha[randomNumber];
   
}
console.log(passWord);



// for (i = 0; i < userNeeds; i++) {
//   console.log(alpha[randomNumber]);
// }
// The above for loop gives me a list of random index numbers from my array but I also need to randomly include the value of index numbers



// // console.log(alpha[0]);
// console.log(alpha[randomNumber]);

