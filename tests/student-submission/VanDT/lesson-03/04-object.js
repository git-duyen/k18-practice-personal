//Bài 1
let car = {
   make: "Toyota",
   model: "Corolla",
   year: 2021
};
console.log(car.year);

// Bài 2
let person = {
   name: "Nguyen van A",
   address: {
      street: "Tran Phu",
      city: "Ha Noi",
      country: "Viet Nam"
   }
};
console.log(person.address.street);

//Bài 3
let student = {
   name: "Nguyen van A",
   grades: {
      math: 9,
      english: 7
   }
};
console.log(student.grades["math"]);

//Bài 4
let setting = {
   volume: 4,
   brightness: 5
};
setting.volume = 8;
console.log(setting);

//Bài 5
let bike = {};
bike.color = "Xanh";
console.log(bike);

//Bài 6
let employee = {
   name: "Nguyen van A",
   age: 33
}
delete employee.age;
console.log(employee);

//Bài 7
let school = {
   classA: ["An", "Bình", "Châu"],
   classB: ["Đào", "Hương", "Giang"]
}
console.log(school);