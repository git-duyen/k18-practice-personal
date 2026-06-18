
/////////////////////////////////////////////////////////// bai tap 1
let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2021
};
console.log(`Năm sản xuất của xe là ${car.year}`);
let address = {
    street: "Ung Van Khiem",
    city : "HCM",   
    country: "Vietnam"
};
/////////////////////////////////////////////////////////// bai tap 2
let person = {
    name : "Bryan",
    address : address["street"]
}
console.log(`Tên đường của ${person.name} là ${person.address}`);
/////////////////////////////////////////////////////////// bai tap 3
let grades = {
    Math: 7.5,
    English: 8.0
}
let student = {
    name : "Bryan",
    grades : grades.Math
}
console.log('Điểm toán của ', student["name"], ' là', student["grades"]);
/////////////////////////////////////////////////////////// bai tap 4
let settings = {
    volume : 50,
    brightness : 70
}
settings.volume = 99;
console.log(`Âm lượng hiện tại là ${settings.volume}`);
/////////////////////////////////////////////////////////// bai tap 5
let bike = {
    brand : "Chali",
    type : "Bicycle",
};
bike["color"] = "Red";
console.log(`Màu sắc của xe ${bike.brand} là ${bike.color}`);

/////////////////////////////////////////////////////////// bai tap 6
let employee = {
    name : "Bryan",
    age : "30"
}
delete employee.age;
console.log(employee);
/////////////////////////////////////////////////////////// bai tap 7

const school = {
classA: ["Anh", "Bình", "Châu"],
classB: ["Đào", "Hương", "Giang"]
}
console.log(`Học sinh lớp A: ${school.classA}`);
console.log(`Học sinh lớp B: ${school.classB}`);
