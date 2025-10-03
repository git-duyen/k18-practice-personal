// Bai 1
const car = {
    make: "Toyota",
    model: "corolla",
    year: 2021,
};

console.log(car.year);


// Bai 2
const person = {
    name: "Ngan",
    address: {
        street: "1 Bạch Đằng",
        city: "HCM",
        country: "Việt Nam",
    }
};

console.log(person['address']['street']);


// Bai 3
const student = {
    name: "Ngan",
    grades: {
        math: 10,
        english: 5,
    }
};

console.log(student['grades']['math']);


// Bai 4
const settings = {
    volume: "max",
    brightness: "medium",
};

settings.volume = "min";

console.log(settings);


// Bai 5
const bike = {};
bike.color = "Blue";


// Bai 6
const employee = {
    name: 'Ngan',
    age: 18,
};

delete employee.age;


// Bai 7
const school = {
    classA: ["An", "Bình", "Châu"],
    classB: ["Đào", "Hương", "Giang"],
};
