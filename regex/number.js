let numString = "this computer's price is $500.00";
// it's digit(number)
let regex = /\d/g;

// it's not digit
let regex1 = /\D/g;

let result = numString.match(regex);
let result1 = numString.match(regex1);
console.log(result);
console.log(result1);

let result3 = numString.replace(regex1, '');
console.log(result3);
