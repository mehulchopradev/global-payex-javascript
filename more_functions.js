const i = 10;
console.log(i);


console.log(area(5, 4)); // this will work!
// variable `area` (entire file) ----> function object
// Functions are treated like regular values in javascript, like a string, number, boolean, object, array, function
function area(length, breadth) {
  return length * breadth;
}
console.log(area);


// console.log(perimeterRectangle(5, 4)); // this will not work as created using expression syntax
const perimeterRectangle = function (length, breadth) {
  return 2 * (length + breadth);
};

console.log(perimeterRectangle(5, 4));
console.log(perimeterRectangle);

// create a alias (peri) for the perimeterRectangle function defined above and call the function using the alias
const peri = perimeterRectangle;
console.log(peri(4, 3));
console.log(perimeterRectangle(4, 3));