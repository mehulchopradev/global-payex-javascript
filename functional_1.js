const marks = [2, 3, 5, 3, 2, 7, 8, 10, 1, 2, 3];

// print all the marks greater than 5
console.log('******** All marks more than 5 ****************');

// functional programming
marks.forEach(m => {
  if (m > 5) {
    console.log(m);
  }
});


/* marks.forEach(function(m) {
  if (m > 5) {
    console.log(m);
  }
}); */
/* for(const m of marks) {
  if (m > 5) {
    console.log(m);
  }
} */

// print all the odd marks more than 3
console.log('******** All odd more than 3 ****************');
/* for(const m of marks) {
  if (m % 2 !== 0 && m > 3) {
    console.log(m);
  }
} */
/* marks.forEach(function(m) {
  if (m % 2 !== 0 && m > 3) {
    console.log(m);
  }
}); */

marks.forEach(m => {
  if (m % 2 !== 0 && m > 3) {
    console.log(m);
  }
})

// print all the marks which is 10 or less than 2
marks.forEach(function (m) {
  if (m === 10 || m < 2) {
    console.log(m);
  }
});

