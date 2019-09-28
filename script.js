//Capture the number of characters a user needs (length)

//Capture whether or not the user needs spcecial characters

//Capture whether or not the user needs numbers

//Capture whether the user wants to include lowercase characters

//Capture whether the user wants to include upper characters










var alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
var pwdLetters = alpha.split('');
var userNeeds = prompt("How may characters do you need");


for (i = 0; i < userNeeds; i++) {
  console.log(Math.floor(Math.random() * pwdLetters.length));
}
