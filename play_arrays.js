// array

const et = [];
// arrays in javascript are objects

const cars = ['porshe', 'mercedes'];

console.log(et, et.length);
console.log(cars);

console.log(cars.length);

cars.push('i20', 'i10');
console.log(cars);

console.log(cars.pop());
console.log(cars);

cars.unshift('i20');
console.log(cars);

console.log(cars.shift());
console.log(cars);

cars.splice(1, 0, 'i20', 'bmw', 'audi');
console.log(cars);

cars.splice(1, 2);
console.log(cars);

// update element
cars[1] = 'Kia';
console.log(cars);

// access the element
console.log(cars[0]);
console.log(cars[cars.length - 1]);

console.log(cars.includes('bmw'));
console.log(cars.includes('i20'));


const copyCars = [...cars];
cars.reverse();
console.log(cars);
console.log(copyCars);

console.log(cars.slice(0, 3));

/* for(let i = 0; i < copyCars.length; i++) {
  console.log(copyCars[i].toUpperCase());
} */

// enhanced for loop
for (const car of copyCars) {
  console.log(car.toUpperCase());
}