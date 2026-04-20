//1.
const car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2021
};
console.log(car.year);
//2.
const person = {
    name: Ivan,
    address: {
        street: 'Osola',
        city: 'Moscow',
        country: 'Russia'
    }
};
console.log(person.address.street);
//3.
const student = {
    name: 'Hoang',
    grades: {
        math: 9,
        english: 10
    }
};
console.log(student['grades']['math']);
//4.
const settings = {
    volume: 90,
    brightness: 100
};
settings.volume = 100;
console.log(settings);
//5.
const bike = {
    origin: 'Japan',
    price: 1000
};
bike.color = 'Red';
console.log(bike);
//6.
const employee = {
    name: "mai",
    age: 20
};
delete employee.age;
console.log(employee);
//7.
const school = {
    classA: ['An','Binh','Chau'],
    classB: ['Dao','Huong','Giang']
};
console.log(school);
