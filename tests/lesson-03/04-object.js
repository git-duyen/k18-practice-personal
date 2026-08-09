1.
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2021
}
console.log(`nam san xuat cua xe: ${car.year}`);
console.log(`nam san xuat cua xe: ${car["year"]}`);

2.
const person = {
    name: 'Rose',
    address: {
        street: 'Hai Ba Trung',
        city: 'Hồ Chí Minh',
        country: 'Viet Nam'
    }

}
console.log(`ten duong: ${person.address.street}`);

3.
const student = {
    name: "Nguyen Van A",
    grade: {
        math: 10,
        english: 9
    }
}
console.log(`diem mon toan cua hoc sinh: ${student["grade"]["math"]}`);

4.
const settings = {
    volumn: 7,
    brightness: 8
}
settings.brightness = 5;
console.log(`do sang theo cau hinh moi: ${settings.brightness}`);

5.
const bike = {
    name: 'Honda'
}
bike.color = 'red';
console.log(bike);

6.
const employee = {
    name: 'Nguyen Thi Luom',
    age: 19
}
delete employee.age;
console.log(employee);

7.
const school = {
    classA: ["An", "Binh", "Chau"],
    classB: ["Đào", "Hương", "Giang"]
}
console.log(school.classA);
