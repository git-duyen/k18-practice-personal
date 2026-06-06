//1
const { mainModule } = require("node:process");

function multiply (a,b) {
    const ketQua= a * b;
    console.log (`Ket qua la (${a} x ${b}) = ${ketQua}`);
}
multiply(2, 10);
multiply (5, 2);//

//2
function findMind (a,b,c) {
    let min = a;
    if (b<min) {
        min=b;
    }
    if (c<min) {
        min = c;
    }
    console.log (min)
} 

findMind(8,1,4)
findMind (6,7,5) 

//3
function getTopStudent(arr, threshold) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].score >= threshold) {
            result.push(arr[i].name);
        }
    }

    return result;
}
 let arr = [
    { name: "Mia", score: 8 },
    { name: "Hue", score: 6 },
    { name: "Chi", score: 9 },
    { name: "Dung", score: 7 }
 ]
let topStudents = getTopStudent(arr, 7);
console.log(topStudents);


//4
function calculateInterest(principal, rate, year) {
    let total = principal + principal * rate * year / 100;
    return total;
}

let result = calculateInterest(10000000, 5, 3);
console.log(result);

