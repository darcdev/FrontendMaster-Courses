/********* template literals -> interpolated literals / interpoliterals */

//old form
var name = "diego andres";
var email = "diego@gmail.com";
var msg =
  "welcome to this class , your name is " +
  name +
  " and your email is " +
  email;
// new form

var msg = `welcome to this class , your name is ${name} and your email is ${email}`;
