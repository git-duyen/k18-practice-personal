// //Object
// 1.
// const car = {
//     make: "Toyota",
//     model: "Corolla",
//     year: 2021
// }
// console.log(car["year"]);
// 2.
// const person = {
//     name: "Đỗ Tuấn Đạt",
//     address: {
//         street: "Nguyễn Chí Thanh",
//         city: "Hà Nội",
//         country: "Việt Nam"
//     }
// }
// console.log(person["address"]["street"]);
// 3.
// const student = {
//     name: "Đỗ Tuấn Đạt",
//     grades: {
//         math: 9,
//         english: 10
//     }
// }
// console.log(student["grades"]["math"]);
// 4.
// const settings = {
//     volume: 50,
//     brightness: 70
// }
// settings["volume"] = 100;
// console.log(settings["volume"]);
// 5.
// const bike = {

// }
// bike["color"] = "red";
// console.log(bike["color"]);
// 6.
// const employee = {
//     name: "Đỗ Tuấn Đạt",
//     age: 30
// }
// delete employee["age"];
// console.log(employee);
// 7.
// const school = {
//     classA: [["An"], ["Bình"], ["Châu"]],
//     classB: [["Đào"], ["Hương"], ["Giang"]]
// }
// console.log(school["classA"]);
// Loop
// 1.
// let n = 100;
// const sum = n * (n + 1) / 2;
// console.log(sum);
// 2.
// for (let i = 2; i < 10; i++) {
//     console.log("Bảng cửu chương", `${i}`, "là:")
//     for (let j = 1; j < 11; j++) {
//         console.log(`${i} * ${j} =  ${i * j}`)
//     }
// }
// 3. 
// const result = [];
// for ( i=1;  i<=99; i++){
//     if (i %2 !== 0){
//         result.push(i);
//     }

// }
// console.log(result);
// 4. 
// for(i=1; i<=10; i++){
//     console.log(`user${i}@exemple.com`);
// }
// 5.
// const revenue =
//     [
//         { "month": 1, "total": 120 },
//         { "month": 2, "total": 100 },
//         { "month": 3, "total": 150 },
//         { "month": 4, "total": 90 },
//         { "month": 5, "total": 200 },
//         { "month": 6, "total": 170 },
//         { "month": 7, "total": 130 },
//         { "month": 8, "total": 180 },
//         { "month": 9, "total": 110 },
//         { "month": 10, "total": 160 },
//         { "month": 11, "total": 140 },
//         { "month": 12, "total": 190 }
//     ]

// let sumRevenue = 0;
// for (i = 0; i < revenue.length; i++) {
//     sumRevenue += revenue[i].total;
// }
// console.log(sumRevenue);
// Function
// 1.
// function multiply(a, b) {
//     const total = a * b;
//     return total;
// }
// console.log(multiply(5, 6));
// 2.
// function findMin(a, b, c) {
//     let min = a;
//     if (min > b) min = b;
//     if (min > c) min = c;
//     return min;
// }
// console.log(findMin(5, 8, 3));
3.
const students = [
    { name: "Hiền", score: 9 },
    { name: "Phương", score: 10 }
];

function getTopStudents(students, threshold) {
    const result = []; // khai báo riêng trong hàm
    for (i = 0; i < students.length; i++) {
        if (students[i].score >= threshold) {
            result.push(students[i].name);
        }
    }
    return result;
}

console.log(getTopStudents(students, 8)) // ["Phương"]

