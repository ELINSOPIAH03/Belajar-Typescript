interface person {
    name : string,
    age : number,
    gander : string,
    color? : string,
    isDead? : boolean,
    y? : any,
    great? : ( name: string) => string,
    parent ?:{
        name : string,
        age : number,
        gander : string,
    },
    books?: {
        title : string,
        author : string,
    }[],
}

const person: person ={
    name : 'Elma',
    age : 20,
    gander : 'Female',
    books : [
        {
            title: 'Jago Ngoding Semalem',
            author: 'Diki Yusup'
        }
    ]
}

person.color = 'black'
person.isDead = true

person.great = (name) => `Hawwo ${name}`;

console.log(person.great('Momon'));


console.log(person );

class Human {
    public name : string
    public age : number

    constructor(name: string, age: number ) {
        this.name = name,
        this.age = age
    }

    get myName(){
        return `Name: ${this.name}`
    }

    set myName(name:string){
        this.name = name
    }

    get myAge(){
        return this.age
    }

    set myAge(age:number){
        this.age = age
    }
}

const momo = new Human('elmon nur', 20)
momo.myAge= 90;
console.log(momo.myAge);
console.log(momo.myName);