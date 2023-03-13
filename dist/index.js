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
    constructor(name, age) {
        this.name = name,
            this.age = age;
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
}
const momo = new Human('elmon nur', 20);
momo.myAge = 90;
console.log(momo.myAge);
console.log(momo.myName);
