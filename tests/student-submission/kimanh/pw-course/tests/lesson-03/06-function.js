//Bài tập 1
function multiply(a, b) {
    return a * b;
}
console.log(multiply(5, 3));
console.log(multiply(10, 2));

//Bài tập 2
function findMin(a, b, c) {
    return Math.min(a, b, c);
}
console.log(findMin(5, 3, 8));
console.log(findMin(10, 2, 6));

//Bài tập 3

const students = [
    { name: "An", score: 85 },
    { name: "Binh", score: 90 },
    { name: "Cuong", score: 78 },
    { name: "Dung", score: 92 },
    { name: "Em", score: 88 }
];
const threshold = 85;
function getTopStudents(student, threshold) {
    if (student.score > threshold) {
        return student;
    }
}
const topStudents = students.filter((student) => getTopStudents(student, threshold));
console.log(topStudents);

//Bài tập 4
const principal = 100
const rate = 10
const years = 2

function calculateInterest(principal, rate, years) {
    return (principal + principal * rate * years / 100);
}
console.log(`Số tiền (gốc+ lãi) sau ${years} năm là: ${calculateInterest(principal, rate, years)}`);
