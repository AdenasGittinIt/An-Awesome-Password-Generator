# An-Awesome-Password-Generator
Instructions
Create an application that generates a random password based on user-selected criteria. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code.
The user will be prompted to choose from the following password criteria:


Length (must be between 8 and 128 characters)


Character type: Special characters, Numeric characters, Lowercase characters, Uppercase characters

The application should validate user input and ensure that at least one character type is selected.
The user will also have the option to click a button to copy the password to their clipboard.
Your application should also be responsive, ensuring that it adapts to multiple screen sizes.


User Story
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security

Business Context
For companies that handle large amounts of sensitive data, weak passwords can pose a real security threat. An application that can generate strong passwords quickly and effortlessly saves employees time and ensures secure access to data.

Acceptance Criteria
GIVEN that a user needs a new, secure password
WHEN prompted for password criteria
THEN a password is generated



Here's my psuedo code....
I need a means by which the user can input their password criteria

- Password length (8-128 characters)
- I don’t want repeated characters
- Whether or not special characters are allowed (yes, no)
- Whether or not certain special character should be excluded (yes, no and which)
- Should upper case letters be included (yes, no)
- Should lower case letters be included (yes, no)

Not all characters can sit in the same array since some are optional.

I can have an object with multiple arrays in it or an array with multiple arrays in it.

I need a method for randomly selecting these items from the array that they live in.

I need a means by which I can return the resulting password to the user.  

I need a button that the user can click that will save the password to their clipboard

I want to include some sort of unexpected animation to challenge myself, distinguish myself and make a mundane task interesting and perhaps a little fun.

I need to style the app so that it looks good on multiple screen sizes.