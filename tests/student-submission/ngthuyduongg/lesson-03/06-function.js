// bt 1

function multiply(a, b) {
    const multiply = a * b;
    return multiply;
}
console.log(multiply(7, 7));
console.log(multiply(8, 9));

// bt 2

function findMin(a, b, c) {
    let min = a

    if (min > a) {
        min = a
    }
    if (min > b) {
        min = b
    }
    if (min > c) {
        min = c
    }
    return min
}

console.log(findMin(11, 6, 3))

console.log(findMin(-7, -2, 0))

// bt 3

let students = [
    { name: "a", score: 4 },   
    { name: "b", score: 8 },   
    { name: "c", score: 10 }   
];
let threshold = 10;

function getTopStudents(students, threshold) {
    let result = [];

    for (let i = 0; i < students.length; i++) {
        let student = students[i];

        if (student.score >= threshold) {
            result.push(student.name);
        }
    }

    return result;
}


console.log((getTopStudents(students, threshold)))

// bt 4

function calculateInterest(principal, rate, years){
    let total = principal + (principal*rate*years/100);
    return total
}

let ketqua = calculateInterest(5000000,6.3,10)

console.log(ketqua)