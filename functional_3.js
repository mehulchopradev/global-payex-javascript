import Student from "./student.js";

const cars = ['audi', 'mercedes', 'bmw', 'i20'];
cars.sort();
console.log(cars);

const marks = [2, 3, 3, 3, 2, 7, 8, 10, 9, 2, 3];

// sort the elements of the marks array (ascending order)
marks.sort((a, b) => a - b);
console.log(marks);

const students = [
  new Student('mehul','m', 10, 90),
  new Student('jane','f', 15, 78),
  new Student('jill','f', 18, 67),
  new Student('rahul','m', 20, 80)
];

console.log(students);
students.sort((s1, s2) => s2.marks - s1.marks);
console.log(students)

// create a new array of names of all female students who have scored moe than 70 marks
const ar = students
  .filter(student => student.gender === 'f' && student.marks > 70)
  .map(student => student.name);
console.log(ar);

const roll = 1000;

// find a student from students array on the basis of roll number
// if student found, print the details of that student
// if not found, print student not found
const result = students.find(student => student.roll === roll);
if (result) {
  console.log(result.getDetails());
} else {
  console.log('Student not found');
}