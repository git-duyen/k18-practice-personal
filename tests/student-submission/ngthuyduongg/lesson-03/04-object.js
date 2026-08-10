// bt object 1

let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2021,
}
console.log(car.year);

// bt object 2

let person = {
    name: "Duong",
    address: {
        street: "Pham Hung",
        city: "Hanoi",
        country: "VietNam",

    }

}
console.log(person.address.street);

// bt object 3

let student = {
    name: "Duong",
    grades: {
        math: 10,
        english: 9,

    }
}
console.log(student["grades"]["math"]);

// bt object 4

let settings = {
    volume: 100,
    brightness: 50,

}
settings.volume = 80;
console.log(settings);

// bt object 5

let bike = {}
bike.color = "pink";
console.log(bike);

// bt object 6
 const employee = {
    name: "Duong",
    age: 26
 };
 delete employee.age;
 console.log(employee);

 // bt object 7

 const school = {
    classA:["An","Binh", "Chau"],
    classB:["Dao","Huong","Giang"],


 }
 console.log(school);
