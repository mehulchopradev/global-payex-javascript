// generalized class
export default class CollegeUser {
  /*
    constructor(this) {
      // this -- 4006 (Student object), 5007 (Professor object), subclass object of CollegeUser
    }
  */

    constructor(name, gender) {
      // this - Student, Professor, subclass object of CollegeUser
      this.name = name;
      this.gender = gender;
    }

    getDetails() {
      // this -- Student, Professor, subclass object of CollegeUser
      return `Name: ${this.name}\nGender: ${this.gender}`;
    }
}