// function
// 1. You need to create function
// 2. You need to call this function

// Camelcase: first letter starts from small letter, and the first letter of the second word starts with Capital
// firstName

// PascalCase: first letter starts from capital letter, and the first letter of the second word starts with Capital
// FirstName

// {} means it's a code block = group
function fun() {
  alert("this is function");
}
// fun();

function greeting() {
  //   let name = prompt("What is your name?");
  //   Concatenation (string and variable)
  //   php using . as concatenation

  let result = "Hello, " + name;
  console.log(result);
}
// greeting();

// parameters / arguments in function

// when defined, the variables inside parenthesis are called parameters
function addNumbers(num1, num2) {
  let result = num1 + num2;
  console.log(result);
}
// This is called arguments, physically applied data are called arguments
addNumbers(90, 120);
addNumbers("25", "35");
