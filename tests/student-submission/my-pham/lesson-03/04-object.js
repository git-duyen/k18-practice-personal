// Câu 1:
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2021
}
console.log(car.year)

// Câu 2: 
const person = {
    name: "My",
    address: {
        street: "Cau Giay",
        city: "Ha Noi",
        country: "Viet Nam"
    }
};
console.log(person.address.street);

// Câu 3:
const student = {
    name: "My",
    grades: {
        math: 10,
        english: 9
    }
};
console.log(student["grades"]["math"]);

// Câu 4:
const settings = {
    volume: 100,
    brightness: 50
};
settings.volume = 80;
console.log(settings);

// Câu 5:
let bike = {
    name: "Koroo",
    year: 2010
};
bike.color = "red";
console.log(bike);

// Câu 6:
let employee = {
    name: "My",
    age: 35
};
delete employee.age;
console.log(employee);

// Câu 7:
const school = {
    classA: ["An", "Binh", "Chau"],
    classB: ["Dap", "Huong", "Gian"]
};
console.log(school);