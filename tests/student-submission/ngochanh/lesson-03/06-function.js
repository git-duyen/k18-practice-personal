//Bai 1:
function multiply(a, b) {
    const s = a * b;
    console.log(s);
}
multiply(10, 20);
multiply(2, 10);

//Bai 2
function findMin(a, b, c) {
    let min = 0;
    if (a > b) {
        if (b > c) {
            min = c;
        } else {
            min = b;
        }
    } else {
        if (a > c) {
            min = c;
        } else {
            min = a;
        }
    }
    console.log(min);
}
findMin(8, 4, 7);
findMin(4, 7, 3);

//Bai 3:
function getTopStudents(students, threshold) {

    const result = [];
    for (let i = 0; i < students.length; i++) {
        if (students[i].score >= threshold) {
            result.push(students[i].name);
        }
    }
    console.log(result);
}
const classA = [
    {
        name: "A",
        score: 3
    },
    {
        name: "B",
        score: 10
    },
    {
        name: "C",
        score: 5
    }
]
getTopStudents(classA, 5);

//Bai 4:
function calculateInterest(principal, rate, years) {
    let total = principal + principal * rate * years / 100;
    console.log(total);
}
calculateInterest(50, 6, 2);