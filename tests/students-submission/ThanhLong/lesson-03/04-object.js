let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2021,
}
console.log(car.year);

let person = {
    name: "Long",
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "USA",
    }
}
console.log(person.address.city);

let student = {
    name: "Long",
    grades: {
        math: 90,
        english: 85,
    }
}
console.log(student["grades"]["math"]);

let settings = {
    volume: 50,
    brightness: 70
};
// thay đổi volume
settings.volume = 80;
console.log(settings);

let bike = {
    brand: "Honda",
    model: "CBR",
}
bike.color = "Red";
console.log(bike);

let employee = {
    name: "Long",
    age: 20,
}
delete employee.age;
console.log(employee);

let school = {
    classA : ["An", "Bình", "Châu"],
    classB : ["Đào", "Hương", "Giang"],
}

