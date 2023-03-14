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

interface OrdinaryPerson{
    myName :  string,
    myAge : number,
    run : ()=>void,
    getBook : ()=>string | undefined
}
class Human implements OrdinaryPerson{
    public name : string
    public age : number
    public gander : string

    constructor(name: string, age: number, gander: string ) {
        this.name = name,
        this.age = age,
        this.gander= gander
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

    public run() {
        console.log('I\'m running...');
        
    }

    public getBook() : string | undefined{
        if (this.myAge>50) {
            return 'Programming'
        }
    }
}

class Programmer extends Human {
    public Programming() {
        console.log(`My gander : ${this.gander}`);
        console.log("I'm programmer...");
    }
}

const momo = new Human('elmon nur', 20, 'famale')
momo.myAge= 90;
console.log(momo.myAge);
console.log(momo.myName);

momo.run();
momo.myAge= 20;
console.log(this.getBook);

const mom = new Programmer('Ariani',20,'famale');
mom.Programming()