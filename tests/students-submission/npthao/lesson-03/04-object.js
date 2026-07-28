//1 
let car = {
    make : "Toyota",
    model: "Corolla",
    year : 2021
}

console.log(car.year);

//2

let person = {
    name : "John",
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "USA"
    }
}

console.log(person.address.street);

//3

let student = {
    name : "Joe",
    grades : {
        math : 10, 
        english: 8
    }
}

console.log(student.grades["math"]);

//4

let settings = {
    volume : 10,
    brightness : 50
}

settings.volume = 20;
console.log(settings.volume);

//5

let bike = {};
bike.color = "red";

let employee = {
    name : "Bin",
    age : 20

}
delete employee.age;

//6
const school = {
    classA: ["An", "Binh", "Chau"],
    classB: ["Dao", "Huong", "Giang"]
}