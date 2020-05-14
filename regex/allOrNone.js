let favWord = "favorite";

// with the 'u' or not without 'u' is fine with ?

let favRegex = /favou?rite/;

let result = favRegex.test(favWord);

console.log(result);
