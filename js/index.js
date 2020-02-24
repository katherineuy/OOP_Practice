//how to define a class

class Student{
    constructor(name, course, section){ //argument
        this.name = name; //parameter
        this.course = course;
        this.section = section;
    }

    enroll(subject){
        console.log(`${this.name}, ${this.course} is enrolled in section ${this.sectionn} she is studying ${subject}`);
    }
}

//create an object
let stud1 = new Student("Katherine Uy", "IT", "2ITF");
stud1.enroll("ICS2609"); 