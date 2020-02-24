//encapsulation
class School{
    setName(name){
        this.name = name;
    }

    getName(){
        return this.name;
    }

    setLocation(location){
        this.location = location;
    }

    getLocation(){
        return this.location;
    }

    setPopulation(population){
        this.population = population;
        this.location = location;
    }

    getPopulation(){
        return this.population;
    }
}

let ust = new School();
ust.setName("UST");
ust.setLocation("Manila");
ust.setPopulation(490561);

console.log(`${ust.getName()} ${ust.getLocation()} has a population of ${ust.getPopulation()}`);