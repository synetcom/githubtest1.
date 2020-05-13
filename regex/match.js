let sentence = "SpaceX launched the second rocket The week.";

// regex doesn't need double quote or single quote

// g means global for multiple occurence
// i means case will be ignored
// i and g is called flags
let regex = /the/gi;

// test method or match method to find this regex pattern

// test
let result = regex.test(sentence);
let result1 = sentence.match(regex);
let result2 = sentence.replace(regex, "a");
console.log(result);
console.log(result1);
console.log(result2);
