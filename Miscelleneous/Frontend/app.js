function personMaker(name,age){
    const person = {
        name : name,
        age : age,
        talk(){
            console.log(`Hello All, I'm ${this.name}`);
        }
    };

    return person;
}

let p1 = personMaker("Shiva",21);
let p2 = personMaker("Sushma",24);
p1.talk();
console.log(p1.age);
console.log(p1.name);
console.log()
p2.talk();
console.log(p2.age);
console.log(p2.name);