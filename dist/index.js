"use strict";
const person = {
    name: 'Elma',
    age: 20,
    gander: 'Female',
    books: [
        {
            title: 'Jago Ngoding Semalem',
            author: 'Diki Yusup'
        }
    ]
};
person.color = 'black';
person.isDead = true;
person.great = (name) => `Hawwo ${name}`;
console.log(person.great('Momon'));
console.log(person);
class Human {
    constructor(name, age, gander) {
        this.name = name,
            this.age = age,
            this.gander = gander;
    }
    get myName() {
        return `Name: ${this.name}`;
    }
    set myName(name) {
        this.name = name;
    }
    get myAge() {
        return this.age;
    }
    set myAge(age) {
        this.age = age;
    }
    run() {
        console.log('I\'m running...');
    }
    getBook() {
        if (this.myAge > 50) {
            return 'Programming';
        }
    }
}
class Programmer extends Human {
    Programming() {
        console.log(`My gander : ${this.gander}`);
        console.log("I'm programmer...");
    }
}
const momo = new Human('elmon nur', 20, 'famale');
momo.myAge = 90;
console.log(momo.myAge);
console.log(momo.myName);
momo.run();
momo.myAge = 20;
console.log(this.getBook);
const mom = new Programmer('Ariani', 20, 'famale');
mom.Programming();
