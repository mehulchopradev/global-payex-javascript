// a const variable cannot be reassigned at a later point in the program
// scope of a const variable is block scoped
const n = 56;

// Looping statements
// while loop
/*
  while (condition) { // condition true, false, truthy, falsy

    //
    //
    //
  }
*/

// n -> 5 : '024'
// n -> 10 : '0246810'
/* function evenNos(n) {
  var result = '';
  var i = 0;

  while(i <= n) {
    if (i % 2 === 0) {
      result = result + i;
    }

    i++;
  }

  return result;
} */

// for loop
/*
  for(initialization; condition; increment/decrement) {
    //
    //
    //
  }
*/

function evenNos(n) {
  // scope of a var variable is either the function or the entire file
  /* var result = '';
  for(var i = 0; i <= n; i++) {
    if (i % 2 === 0) {
      result = result + i;
    }
  }

  console.log(i); // this will work

  return result; */

  let result = '';
  // scope of a let variable is always block scoped!
  for(let i = 0; i <= n; i++) {
    if (i % 2 === 0) {
      result = result + i;
    }
  }

  // console.log(i); // this will not work

  return result;
}

console.log(evenNos(n));


// Priority
// const
// let
// var -- avoid