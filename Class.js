//when function in class its called constructor.

class Student {  //class
    constructor(id,name) {  
        this.id = id;
        this.name = name;
        this.school = "NPA";
    }

}

const student1 = new Student(10,'Alamin'); //object
const student2 = new Student(20, 'Munna');

console.log(student1, student2);
console.log(student1.name, student2.name);