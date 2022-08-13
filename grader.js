/*
* >= 70 - A
* >= 60 - B
* >= 40 - C
* < 40 - F
* > 100 or < 0 - I
*/

var marks = 45;

// if - else if - else if - ** - else
/*
* if (condition) {
   //
   //
 } else if (condition) {
   //
   //
 } else if (condition) {
   //
 } else {

 }
*/

/* if (marks > 100 || marks < 0) {
  console.log('I');
} else if (marks >= 70) {
  console.log('A');
} else if (marks >= 60) {
  console.log('B');
} else if (marks >= 40) {
  console.log('C');
} else {
  console.log('F');
} */

function getGrade(marks) {
  var grade;
  if (marks > 100 || marks < 0) {
    grade = 'I';
  } else if (marks >= 70) {
    grade = 'A';
  } else if (marks >= 60) {
    grade = 'B';
  } else if (marks >= 40) {
    grade = 'C';
  } else {
    grade = 'F';
  }

  return grade;
}

console.log(getGrade(marks));