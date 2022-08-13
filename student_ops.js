// getDetails (name, gender, roll, marks)
  /*
    'Name: mehul\n
     Gender: m\n
     Roll: 10\n
     Marks: 90'
  */
function getDetails(name, gender, roll, marks) {
  // return 'Name: ' + name + '\nGender: ' + gender + '\nRoll: ' + roll + '\nMarks: ' + marks;
  // String interpolation
  return `Name: ${name}\nGender: ${gender}\nRoll: ${roll}\nMarks: ${marks}`;
}

// getGrade(marks)
  // return the grade

function getGrade(marks) {
  let grade;
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


// call the above two functions and print the output on the console
const name = 'mehul';
const gender = 'm';
const roll = 78;
const marks = 89;

console.log(getDetails(name, gender, roll, marks));
console.log(getGrade(marks));