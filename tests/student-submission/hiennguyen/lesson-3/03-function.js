// Bai 1
function multiply(a, b) {
    const result = a * b;
    console.log(`${a} x ${b} = ${result}`);
};

multiply(5, 10);


// Bai 2
function findMin(a, b, c) {
    return Math.min(a, b, c);
}

const min1 = findMin(20, 10, 15);
console.log(`Số nhỏ nhất là : ${min1}`);

const min2 = findMin(1, 2, 3);
console.log(`Số nhỏ nhất là : ${min2}`);


// Bai 3
function getTopStudents(students, threshold) {
    const topStudents = [];

    for (let i = 0; i < students.length; i++) {
        if (students[i].score >= threshold) {
            topStudents.push(students[i].name);
        }
    }

    return topStudents;
}

const students = [
    { name: "Xuan", score: 9 },
    { name: "Ha", score: 5 },
    { name: "Thu", score: 6 },
    { name: "Dong", score: 10 },
];

const threshold = 8;

const result = getTopStudents(students, threshold);
console.log(`Danh sách học sinh đạt điểm cao:`, result);


// Bai 4
function calculateInterest(principal, rate, years) {
    const total = principal + principal * rate * years / 100;
    return total;
}

const result4 = calculateInterest(16000000, 5, 2);
console.log('Tổng số tiền gốc và lãi là:', result4);
