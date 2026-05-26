//Bài tập 1
const car = {
  make: 'Toyota',
  model: 'Corolla',
  year: 2021,
};
console.log(car.year);

//Bài tập 2
const person = {
  name: 'KimAnh',
  address: {
    street: 'Lê Quang Đạo',
    city: 'Hanoi',
    country: 'Vietnam',
  },
};
console.log(person.address.street);

//Bài tập 3
const student = {
  name: 'KimAnh',
  grades: {
    math: 85,
    english: 90,
  },
};
console.log(student["grades"]["math"]);

//Bài tập 4
const settings = { "volume": "medium", "brightness": true };
settings.volume = "high";
console.log(settings.volume);

//Bài tập 5
let bike = {
  make: 'Yamaha',
  model: 'YZF-R3',
};
bike.color = 'red';
console.log(bike);

//Bài tập 6
const employee = {
  name: 'Kim Anh',
  age: '30',
};
delete employee.age;
console.log(employee);

//Bài tập 7 
const school = {
  classA: ["An", "Binh", "Châu"],
  classB: ["Đao", "Hương", "Giang"],
};
console.log(school);