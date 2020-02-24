//prototype

let stud1 = {name:"katherine uy", course:"IT", section:"2ITF", 
    study:function(subject){
        console.log(`${this.name} is enrolled in ${subject}`);
    }};

let stud2 = {name:"zachary timmothy", course:"IT", section:"2ITF"};

stud1.study("ICS2609");