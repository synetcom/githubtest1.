let student = {
  first: "Autumn",
  last: "Fall",
  age: 45,
  height: 180,
  studentInfo: function () {
    // line 8 translates as show(return) student(student)'s first value("Autumn")
    // \n in string, it means next line
    return this.first + "\n" + this.last + "\n" + this.age;
  },
  //   weight: 90,
};
// line 13, 14 are identical
console.log(student.first);
console.log(student["first"]);

// cahnge the value of object
student.first = "James";
student["first"] = "Autumn";
console.log(student.studentInfo());
