//bai tap 1
const car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2021
}
console.log(car.year);

//bai tap 2
const person = {
    name: 'Nhung',
    address: {
        street: '123 Cau Giay',
        city: 'Hanoi',
        country: 'VNA'
    }
}
console.log(person.address.street);

//bai tap 3
const students =
    {
        name: 'Alice',
        grades: { math: 8, english: 10 }
    }
console.log(students["grades"]["math"]);

//bai tap 4
const settings = {
    volume: 50,
    brightness: 70
}
settings.volume = 80;
console.log(settings);

//bai tap 5
const bike = {
}
bike.color = 'red';
console.log(bike);

//bai tap 6
const employee = {
    name: 'Annn',
    age: 25
}
delete employee.age;
console.log(employee);

//bai tap 7
const school = {
    classA: ["An","Binh","Chau"],

    classB: ["Dao","Huong","Giang"]
}
console.log(school);
