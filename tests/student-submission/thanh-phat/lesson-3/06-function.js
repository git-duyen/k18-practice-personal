//Bài tập 1
function multiply(a, b) {
    return a * b;
}

console.log(multiply(2, 3));

//Bài tập 2
function findMin(a, b, c) {
    let min = a;
    if (b < min) {
        min = b;
    } else if (c < min) {
        min = c;
    }
    return min;
}

console.log(findMin(5, 2, 8));


//Bài tập 3
function getTopStudent(students, threshold) {
    let topStudents = [];
    for (let i = 0; i < students.length; i++) {
        if (students[i].score >= threshold) {
            topStudents.push(students[i].name);
        }
    }
    return topStudents;
}

const students = [
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 78 },
    { name: 'Charlie', score: 92 },
    { name: 'David', score: 80 }
];

console.log(getTopStudent(students, 80));

//Bài tập 4
function calculateInterest(principal, rate, years) {
    return (principal + (principal * rate * years) / 100);
}

console.log(calculateInterest(1000, 5, 3));