//Capture the number of characters a user needs (length)

//Capture whether or not the user needs spcecial characters

//Capture whether or not the user needs numbers

//Capture whether the user wants to include lowercase characters

//Capture whether the user wants to include upper characters

//Return a string based on the above criteria return a string 





var alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
var pwdLetters = alpha.split('');
var specialChars = '!@#$%^&*)?(';
var pwdChars = specialChars.split('');
var userNeeds = prompt("How long should you password be?");
var userNeedsSpec = confirm("Would you like to include special characters?");
var includeNumber = confirm("Would you like to include numbers in your password?");

var randomNumber = Math.floor(Math.random() * pwdLetters.length);
var passWord = "" 
for (i = 0; i < userNeeds; i++) {
  var randomNumber = Math.floor(Math.random() * pwdLetters.length);  
  var includeRandomNum = Math.floor(Math.random() * 10);
  var includeSpecChars = Math.floor(Math.random() * pwdChars.length);
  if (passWord.length >= userNeeds) {
    break;
  }
  if (userNeedsSpec == true) {
    passWord += pwdChars[includeSpecChars];
      } 
  if (includeNumber){
    passWord += includeRandomNum; 
  }  
  
  passWord += alpha[randomNumber];
  passWord = passWord + alpha[randomNumber];
   
}
console.log(passWord);
// for (i = 0; i < userNeeds; i++) {
//   console.log(alpha[randomNumber]);
// }
// The above for loop gives me a list of random index numbers from my array but I also need to randomly include the value of index numbers



// // console.log(alpha[0]);
// console.log(alpha[randomNumber]);

