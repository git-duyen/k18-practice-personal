// dfđfdfdfdfdff
// fhd
// //object 
// const test1 = {
//     name: "thao",
//     role : "developer"
// };
//class
class ThaoTest {
    name;
    role;
    constructor (name, role) {
        this.name = name;
        this.role = role;
    }
};
const test2 = new ThaoTest("thao","developer");
console.log(test2);
class ThaoTest2 {
    id;
    classroom;
    name;
    constructor (id,classroom,name) {
        this.id= id;
        this.classroom= classroom;
        this.name= name;
    }
};
const test3 = new ThaoTest2(1,"js","thao");
console.log(test3);
 class person {
        constructor(name,age) {
            this.name = name;
            this.age = age;
        }   
        sayHi() {
            console.log(`hi, my name is ${this.name} and i am ${this.age} years old`);
        }
        saymessage(message) {
            console.log(`${message}`);
        }
 }
 const thao= new person ("thao","20");

thao.sayHi();
thao.saymessage("hello everyone");