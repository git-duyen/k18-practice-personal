//1. In năm sản xuất
let car = {
  make: "Toyota",
  model: "Corolla",
  year: 2021,
};
console.log(car.year);

//2. In ra tên đường
let person = {
  name: "Thanh Tu",
  address: {
    street: "Nguyen Thien Thuat",
    city: "Ho Chi Minh",
    country: "Viet Nam",
  },
};
console.log(
  `Dia chi: Duong ${person.address.street}, Tp. ${person.address.city}, ${person.address.country}`,
);

//3. In ra điểm môn toán
let student = {
  name: "Thanh Tu",
  grades: {
    math: 10,
    english: 9,
  },
};
console.log(student["grades"]["math"]);

//4. Thay đổi volume và in ra object mới
let settings = {
  volume: 75,
  brightness: 50,
};
settings.volume = 100;
console.log(settings);

//5. Tạo 1 object bike và thêm thuộc tính color vào đó
let bike = {};
bike.color = "red";
console.log(bike);

//6. Tạo 1 object employee và xóa thuộc tính age
let employee = {
  name: "Nhan vien A",
  age: 35,
};
delete employee.age;
console.log(employee);

//7.
const school = {
  classA: ["An", "Bình", "Châu"],
  classB: ["Đào", "Hương", "Giang"],
};
console.log(school);
