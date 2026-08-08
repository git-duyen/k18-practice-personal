//Bài 1
function multiply(a, b) {
    return a * b;
}
console.log(multiply(2, 2));

//Bài 2
function findMin(a, b, c) {
    let min = a;
    if (b < min) {
        min = b;
    } if (c < min) {
        min = c;
    } return min;
} console.log(findMin(1, 5, 7));
console.log(findMin(5, 22, 12));

//Bài 3
const students = [
    { name: "Chi", score: 10 },
    { name: "Nga", score: 8 },
    { name: "Trang", score: 9 },
    { name: "Linh", score: 6 }
]
function getTopStudents(students, threshold) {

    let result = [];
    for (let i = 0; i < students.length; i++) {
        if (students[i].score >= threshold) {
            result.push(students[i].name);
        }
    }
    return result;
}
console.log(getTopStudents(students, 8));

//Bài 4: 
function calculateInterest(principal, rate, years) {
    let total = principal + principal * rate * years / 100;
    return total;
}
console.log(calculateInterest(10000000, 6, 5));
