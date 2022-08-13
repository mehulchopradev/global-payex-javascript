const marks = [2, 3, 3, 3, 2, 7, 8, 10, 9, 2, 3];

// build up a new array consisting of marks more than 5 from the marks array
/* const moreThan5 = [];
marks.forEach(m => {
  if (m > 5) {
    moreThan5.push(m);
  }
});

console.log(moreThan5); */

const moreThan5 = marks.filter(m => m > 5);
console.log('******** array of more than 5 marks *********');
console.log(moreThan5);

// build a new array consisting of even marks more than 4 from the marks array
const moreThan4Evens = marks.filter(m => m % 2 === 0 && m > 4);
console.log('******** array of more 4 evens *********');
console.log(moreThan4Evens);

// build a new array consisting of marks deducted by 1 from the marks array
const ar = marks.map(m => m - 1);
console.log(ar);

// build a new array consisting of odd elements more than 5 from the marks array and then
// squared up in the new array

const br = marks
  .filter(m => m % 2 && m > 5)
  .map(m => m * m);

console.log(br);

// find out whether there is any student who has scored less than 2 marks
console.log(marks.some(m => m < 2));

// find out whether every student has score more than 5 marksin the test or no
console.log(marks.every((m, index) => {
  console.log(index);
  return m > 5;
}));