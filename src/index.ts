type person = {
    name : string,
    age : number,
    gander : string,
    color? : string,
    isDead? : boolean,
}

const person: person ={
    name : 'Elma',
    age : 20,
    gander : 'Female'
}

person.color = 'black'
person.isDead = true
console.log(person );
