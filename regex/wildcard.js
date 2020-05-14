let exampleString = "Let's have fun with regular expression.";

// . is a wild card managing any one character

// let regex = /.un/;
// let result = regex.test(exampleString);

// console.log(result);

// let alphabetRegex=/\w/g; //w is a wild character

let alphabetRegex = /\W/g; //all characters(space, symbol, and period) except letters
let result = exampleString.match(alphabetRegex);

console.log(result);
