let twinkleStar = "Twinkle, twinkle, little star";

// we use 'g' flag- multiple instances
// we use 'i' flag- ignoring cases
let starRegex = /twinkle/ig;

let result = twinkleStar.match(starRegex);

console.log(result);
