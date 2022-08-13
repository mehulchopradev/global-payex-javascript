import Professor from "./professor.js";
import Student from "./student.js";

const s1 = new Student('mehul', 'm', 10, 90);
// Internally
// new -> 4006 Student
// Student.constructor('mehul', 'm', 10, 90, 4006)

const p1 = new Professor('jane', 'f', ['Physics', 'Chemistry']);
// Internally
// new -> 5007 Professor
// Professor.constructor('jane', 'f', ['Physics', 'Chemistry'], 5007)

// console.log(s1);
// console.log(p1);

console.log(s1.getDetails());
console.log(p1.getDetails());
