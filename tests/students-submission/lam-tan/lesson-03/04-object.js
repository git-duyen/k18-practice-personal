const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2021,
};
console.log(car.year);

const person = {
  name: "Tan",
  address: {
    street: "Nguyen Dang Giai",
    city: "Da Nang",
    country: "Viet Nam",
  },
};
console.log(person.address.street);

const student = {
  name: "Tan",
  grades: {
    math: 9,
    english: 10,
  },
};
console.log(student["grades"]["math"]);

const setting = {
  volume: 70,
  brightness: 80,
};
setting.volume = 80;

const bike = {};
bike["color"] = "blue";

const employee = {
  name: "Trang",
  age: 22,
};
delete employee.age;

const school = {
  classA: ["An", "Bình", "Châu"],
  classB: ["Đào", "Hương", "Giang"],
};