// in a es6 module, u can have only 1 default export, but multiple non default exports
// specialized class
import CollegeUser from "./college_user.js";
export default class Student extends CollegeUser {

  static count = 0;
  // Access using class name
  /*
  // only during the construction of the object
    constructor(this) {
      // this --> current object
      // implicitly
      return this;
    }
  */

    constructor(name, gender, roll, marks) {
      // this -- current object (4006)
      // it is compulsory to call the parent class constructor from the child class constructor
      // and must be the first statement in the child class constructor
      super(name, gender);
      // Internally
      // CollegeUser.constructor(this)

      this.roll = roll;
      this.marks = marks;
      Student.count++;
    }

    /* getDetails() {
      // this --> current object
      return `Name: ${this.name}\nGender: ${this.gender}\nRoll: ${this.roll}\nMarks: ${this.marks}`;
    } */

    getGrade() {
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

    static newInstance(name, gender, roll, marks) {
      // console.log(this); // class object
      return new Student(name, gender, roll, marks);
    }

    // method overriding
    getDetails() {
      return `${super.getDetails()}\nRoll: ${this.roll}`;
    }
}

export const minMarksNeeded = 40;