// in javascript a function can be defined inside another function definition

// abc (entire file) ---> function object
function abc() {
  // i (abc) --> number
  const i = 10;

  // xyz (abc) ---> function object
  function xyz() {
    // an inner function can access the enclosing function variables
    // j (xyz) --> number
    const j = 9;
    return j + i; // closure
    // when an inner function remembers its surrounding context (data) even when the outer function has already returned
  }

  return xyz;
}

const ans = abc();
console.log(ans);
console.log(ans()); // 19

// pqr (entire file) ----> function object
function pqr(f) {
  const i = 90;
  return f(90);
}

// mno (entire file) ---> function object
function mno(p) {
  return (p * 2) + 10;
}


// in javascript a function can be passed as a parameter to another function
// passing code to another code
// passing callback function to a function
const a = pqr(mno);

console.log(a);