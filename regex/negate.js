let quoteSample = "12 brave people lived here, long time ago.";

// To negate, use caret

// checking only numbers, vowels
// It will show space, consonants, and period(Comma)
let myRegex = /[^0-9aeiou]/gi;

let result = quoteSample.match(myRegex);

console.log(result);
