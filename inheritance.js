class Parent{
    constructor(){
        this.fatherName = 'Schwerzneger';
    }
}

class Child extends Parent{  //inheritance
    constructor(name){
        super();    //call parent class constructor
        this.name = name;
    }
    getFullName(){
        return this.name + " " + this.fatherName;
    }
}

const baby = new Child('Arnold');
const baby2 = new Child('Tom');

console.log(baby,baby2);
console.log(baby.getFullName());