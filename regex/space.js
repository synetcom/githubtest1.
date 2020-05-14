let sample = "Check white space inside this sentence";

let countWhiteSpace = /\s/g;

let result = sample.match(countWhiteSpace);
let result1 = sample.replace(countWhiteSpace, "-");
console.log(result);
console.log(result1);
