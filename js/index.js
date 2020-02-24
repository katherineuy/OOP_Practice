//static

class School{
    constructor(name, population, location){
        this.name = name;
        this.population = population;
        this.location = location;
    }

    static offer(course){ // belongs to the class
        console.log(`${this.name} located in ${this.location} has a population of ${this.population}`
        );
    }
}

let ust = new School("UST", 40156, "Manila");
School.offer("Information Technology");