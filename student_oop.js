// create an object
// data type --- object
const s1 = {
  fullName: 'mehul chopra',
  roll: 10,
  gender: 'm',
  marks: 90,
  getDetails: function() {
    // console.log(this); // implict parameter which represents the current object
    return `Name: ${this.fullName}\nGender: ${this.gender}\nRoll: ${this.roll}\nMarks: ${this.marks}`;
  },
  getGrade: function() {
    const marks = this.marks;

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
};
// Internally
// 4005 -> RAM
// s1 -> 4005

const s2 = {
  fullName: 'jane',
  roll: 13,
  gender: 'f',
  marks: 56,
};
// Internally
// 5006 -> RAM
// s2 -> 5006

// console.log(s1);
// console.log(s2);

// getting the object attributes
console.log(s1.fullName);
console.log(s1.roll);

console.log(s2.fullName);
console.log(s2.roll);

// set the object attributes
s1.marks = 95;
s2.roll = 15;

s2.country = 'India'; // end up adding a new attribute country to s2 object
// console.log(s2);

// delete an attribute from the object
delete s2.country;
// console.log(s2);

console.log(s1.getDetails());
// Internally
// s1.getDetails(s1)

console.log(s1.getGrade());

console.log(s2.getDetails());
console.log(s2.getGrade());