// Bai 1: 
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2021
}
console.log(car.year)

//Bai 2:
const person = {
    name: "Hanh",
    address: {
        street: "Hoa Binh",
        city: "Can Tho",
        country: "Viet Nam"
    }
}
console.log(person.address.street)

//Bai 3:
const student = {
    name: "Hanh",
    grades: {
        math: 9.5,
        english: 5.5
    }
}
console.log(student["grades"]["math"])

//Bai 4:
const settings = {
    volumn: 100,
    brightness: 0 
}
settings.volumn = 0
console.log(settings.volumn)

//Bai 5:
const bike = {}
bike.color = "grey"

//Bai 6:
const employee = {
    name: "Hanh",
    age: 20
}
delete employee.age

//Bai 7:
const school = {
    classA: ["An", "Binh", "Chau"],
    classB: ["Dao", "Huong", "Giang"]
}