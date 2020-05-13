let quoteSample = "Hold Tight My Love"; //HTML

// checking all the alphabets
let regex = /[a-z]/g;
regex = /[a-z]/i;

let result = quoteSample.match(regex);
console.log(result);
console.log(typeof regex);
