import Student, { minMarksNeeded } from "./student.js";

console.log(minMarksNeeded);

//
console.log(Student.count);

const s1 = new Student('mehul', 'm', 10, 90);
// Internally
// 1. new --> 4005 RAM
// 2. Student.constructor(4005)
// 2. Student.constructor('mehul', 'm', 10, 90, 4005)

/* s1.name = 'mehul';
s1.gender = 'm';
s1.roll = 10;
s1.marks = 90; */

//
console.log(Student.count);

const s2 = new Student('jane', 'f', 14, 67);
s2.country = 'India';

/* s2.name = 'jane';
s2.gend = 'f';
s2.r = 14;
s2.marks = 67; */

// console.log(s1);
// console.log(s2);

console.log(s1.getDetails());
// Internally
// Student.getDetails(s1);


console.log(s2.getDetails());
// Internally
// Student.getDetails(s2);

console.log(s1.getGrade());
console.log(s2.getGrade());


//
console.log(Student.count);


// static methods
const s3 = Student.newInstance('jill', 'f', 18, 78);
console.log(s3.getDetails());