// Cau 1
function multiply(a, b) {
    return a * b;
}

console.log(multiply(2, 3));

// Cau 2
function findMin(a,b,c) {
    return Math.min(a, b, c);
}

console.log(findMin(1, 2, 3));
console.log(findMin(4, 5, 6));

// Cau 3
const students = [
    {
        name: "Tester01",
        score: 80
    },
    {
        name: "Tester02",
        score: 90
    },
    {
        name: "Tester03",
        score: 70
    }
];

function getTopStudent(students, threshold) {
    const result = [];

    for (let i = 0; i < students.length; i++) {
        if (students[i].score >= threshold) {
            result.push(students[i]);
        }
    }

    return result;
}

console.log(getTopStudent(students, 80));

// Cau 4
function calculateInterest(principal, rate, years) {
    return principal * rate * years / 100;
}

console.log(calculateInterest(1000, 5, 1));


