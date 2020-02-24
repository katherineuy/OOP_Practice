//apply function demo

let stud1 = {name:"juan dela cruz"};
let stud2 = {name:"pedro cruz"};

details = ["ICS2609", "2ITF"]

let study = function(subject, section){
    console.log(`${this.name} is enrolled in ${subject}, section ${section}`);
};

study.apply(stud2, details)