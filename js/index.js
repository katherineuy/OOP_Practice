//inheritance

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    speak(language){
        console.log(`${this.name} can speak ${language}`);
    }

class Employee extends Person{
    constructor(name, age, job){
        super(name, age);
        this.job = job;
    }

    work(duration){
        console.log(`${this.name} works ${duration} hours a day....`);
    }

}

let p = new Person("juan dela cruz", 30);
let e = new Employee("pedro cruz", 18, "Doctor");

p.speak("British"); 
e.speak("French");
e.work(10);