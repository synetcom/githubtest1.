// string
let fruit = "Banana";
fruit1 = "banana, mangp, orange";
// new line excape character
let moreFruit = "banana\n apple";
console.log(moreFruit);

console.log(fruit.length);

// index number of the first apperance of this cahracter
console.log(fruit.indexOf("n"));

// slice
// two arguments: first one included, second one excluided
console.log(fruit.slice(2, 5));

// replace
console.log(fruit.replace("ban", 123));

// upper and lower case
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());

console.log(fruit.charAt(2));
console.log(fruit[2]);

console.log(fruit.split("")); // split by character
console.log(fruit1.split(",")); //split by comma
