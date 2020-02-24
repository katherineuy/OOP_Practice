//constructor function

function Student(name, course, section){
    this.name = name;
    this.course = course;
    this.section = section;
}

Student.prototype.study = function(subject){
    console.log(`${this.name} is enrolled in ${subject}`);
}

Student.prototype.school = "UST";

let stud1 = new Student("katherine uy", "IT", "2ITF");
let stud2 = new Student("zachary timmothy", "IT", "2ITF");

stud1.study("Biology");
stud2.study("Algebra");

console.log(stud1.school);