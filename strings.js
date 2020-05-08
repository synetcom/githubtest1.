// string
let fruit = "banana";
let fruit1 = "banana, orange, mango";
let moreFruit = "banana \n apple"; //new line-escape character
document.getElementById("someText").innerHTML = moreFruit;
console.log(moreFruit);

console.log(fruit.length);

// find characters
console.log(fruit.indexOf("a"));

// slice
// first argument-include, second argument-excluded
console.log(fruit.slice(2, 5));

// replae
console.log(fruit.replace("ban", 123));
// that is remembered only inside the method
console.log(fruit);

console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
let number1 = 123;
let number2 = "345";
let number3 = number1 + number2;
let answer = number3;
console.log(answer);

// same notation
console.log(fruit.charAt(2));
console.log(fruit[2]);

// var: before ES6, we used var and const, we started let. Just use let or const

// scope: global or local variable
console.log(fruit1.split(""));
//separate by character
console.log(fruit1.split(","));
// separate by comma
