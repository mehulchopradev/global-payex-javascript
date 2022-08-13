var n = 7;

// branching statements
// if - else
/*
  if (condition) { // condition -> true, false, truthy, falsy
    //
    //
  } else {
    //
    //
  }
*/

/* if (n % 2 === 0) {
  console.log('Is even');
} else {
  console.log('Is odd');
} */

/* if (n % 2) {
  console.log('Is odd');
} else {
  console.log('Is even');
} */

// ternary operator
/* var ans = n % 2 ? 'Is odd' : 'Is even';
console.log(ans); */

function isEvenOdd(n) {
  var ans = n % 2 ? 'Is odd' : 'Is even';
  return ans;
}

console.log(isEvenOdd(n));
