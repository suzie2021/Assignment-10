let objPerson = new Object();
objPerson.name = "Cathryn"

class Person {
    name = "Cathryn"
    sayHello() {
        console.log("Hi ", this.name)
    }

    sayHi() {
        this.sayHello()
        // sayHello()
    }
}

// p1 = new Person()
// console.log(objPerson.name)
// console.log(Person.name, p1.name)

let p1 = new Person() // instantiate the Person class
// p1.sayHi()
// console.log(new Person())

class Person2 {
    constructor(firstName, lastName, age, profession) {
        this.firstName = firstName
        this.lastName =lastName
        this.age = age
        this.profession = profession
    };

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    getAge() {
        return this.age;
    }
    getProfession () {
        return this.profession;
    }
}

// create instance of the class
persons = []
cathryn = new Person2("Atukunda", "Cathryn", 22, "Software Engineer")
victoria = new Person2("Victoria", "Vicky", 20, "Photographer")

persons.push(cathryn)
persons.push(victoria)
// console.log(persons)

// console.log(cathryn.getProfession())
// console.log("My name is ", cathryn.getFullName())

// private, public and static

// class with static properties
class Bmw {
    // constructor(make) 
    static getModel() {
        return "BMW"
    }
}

console.log(Bmw.getModel())