1. 
const car = {
    make: "Toyota",
    model: "Corrola",
    year: 2021
};

console.log(car.year);

2.
const person = {
    name: "Ngoc",
    address: {
        street: "Nguyen Van Cu",
        city: "Ha Noi",
        country: "Viet Nam"
    }
}

console.log(person.address.street);

3.
const student = {
    name: "An",
    grades: [
        { subject: "Math", score: 5 },
        { subject: "English", score: 8 }
    ]
};

console.log(student.grades[0].score);

4.
const settings = {
    volume: 50,
    brightness: 70,
};
settings.volume = 80;

console.log(settings.volume);

5.
const bike = {
    brand: "Giant",
    type: "Mountain"
};
bike.color = "Red";

console.log(bike);

6.
const employee = {
    name: "Hieu",
    age: 30
};
delete employee.age;

console.log(employee);

7.
const school = {
    classA: ["An", "Bình", "Châu"],
    classB: ["Đào", "Hương", "Giang"]
};

console.log(school.classA);
