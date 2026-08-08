//Bài 1
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2021
}
console.log(`Năm sản xuất của xe ${car.year}`);

//Bài 2
const person = {
    name: "Chi",
    address: {
        street: "Hồ Tùng Mậu",
        city: "Hà Nội",
        country: " Việt Nam"
    }
}
console.log(`Tên đường ${person.address.street}`);

//Bài 3
const student = {
    name: ["Chi"],
    grades: {
        math: 9,
        english: 10
    }
}
console.log(`Điểm môn toán ${student["grades"]["math"]}`)

//Bài 4
const settings = {
    volume: 50,
    brightness: 60
}
settings.volume = 70;
console.log(settings);

//Bài 5
const bike = {
    brand: "Honda"
}
bike.color = "yellow";
console.log(bike);

//Bài 6
const employee = {
    name: "Chi",
    age: 27
}
delete employee.age;
console.log(employee);

//Bài 7
const school = {
    classA: ["An", "Bình", "Châu"],
    classB: ["Đào", "Hương", "Giang"]
}
console.log(school);