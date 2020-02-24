// call function demo

let stud1 = {name:"juan dela cruz"};
let stud2 = {name:"pedro cruz"};

let study = function(subject){
    console.log(`${this.name} is enrolled in ${subject}`);
}

study.call(stud2, "Science");