// Exercise 1
const car = {
    make: "Toyota",
    model: "Corrolla",
    year: 2021,
};
console.log(car.year);

// Exercise 2
const person = {
    name: "Tam vo",
    address: {
        street: "Vo Van Ngan",
        city: "HCM",
        country: "VN",
    }
};
console.log(person.address.street);

// Exercise 3
const student = {
    name: "Tam vo",
    grades: {
        math: 8.5,
        english: 9.0,
    }
};
console.log(student["grades"]["math"]);

// Exercise 4
const setting = {
    volume: 80,
    brightness: 60,
};
setting.volume = 50;
console.log(setting.volume);

// Exercise 5
const bike = {
};
bike.color = "Yellow";
console.log(bike);

// Exercise 6
const employee = {
    name: "Tam vo",
    age: 30,
};
delete employee.age;
console.log(employee);

// Exercise 7
const school = {
    classA: ["An", "Binh", "Châu"],
    classB: ["Đào", "Hương", "Giang"],
};
console.log(school);
console.log(school.classA[0]);
console.log(school.classB[2]);