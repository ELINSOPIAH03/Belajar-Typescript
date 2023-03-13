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
}
const momo = new Human('elmon nur', 20);
console.log(momo);
