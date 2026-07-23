// Cau 1
const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2021
};

console.log(car.year);

// Cau 2
const person = {
    name: "John",
    address: {
        street: "Duong truoc nha tui",
        city: "Thanh pho noi tui o",
        country: "Dat nuoc noi tui song"
    }
};

console.log(person.address.street);

// Cau 3
const student = {
    name: "Tui",
    grade:{
        math: 10,
        english: 10
    }
};

console.log(student["grade"]["math"]);

// Cau 4
const settings = {
    volume: 50,
    brightness: 75
};

settings.volume = 60;

console.log(settings);

// Cau 5
const bike = {
    brand: "Xe dap",
};

bike.color = "blue";

console.log(bike);

// Cau 6
const employee = {
    name: "Tui",
    age: 20
};

delete employee.age;

console.log(employee);

// Cau 7
const school = {
    classA: ["An", "Binh", "Chau"],
    classB: ["Dao", "Huong", "Giang"]
};

console.log(school);
