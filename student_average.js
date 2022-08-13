import Student from './student.js';

const students = [
  new Student('mehul','m', 10, 90),
  new Student('jane','f', 15, 78),
  new Student('jill','f', 18, 67),
  new Student('rahul','m', 20, 80)
];

let sum = 0;
for (const student of students) {
  sum += student.marks;
}

console.log(sum / students.length);