let teslaSpacex =
  "Elon Musk recently got a new born baby. Probably, he has more than several kids now.";

//  caret ^ it starts with this pattern of letters
let regex = /^Elon/;

let result = regex.test(teslaSpacex);
console.log(result);
let result1 = teslaSpacex.replace(regex, "Steve");

console.log(result1);
