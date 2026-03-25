//1.
function multiply(a, b) {
    return console.log(a * b)
};
multiply(2, 3);
multiply(2, 2);
//2.
function findMin(a, b, c) {
    let array = [a, b, c];
    let minValue = array[0];
    for (let i = 0; i < array.length; i++) {
        if (minValue > array[i]) {
            minValue = array[i];
        }
    }
    return console.log(minValue);
};
findMin(1, 2, 3);
findMin(23, 1, 50);
findMin(-1, 30, -100);
//3.
function getTopStudent(list, thresold) {
    let listTopStudent = [];
    for (let i = 0; i < list.length; i++) {
        if (list[i].score >= thresold) {
            listTopStudent.push(list[i].name);
        }
    }
    return console.log(listTopStudent)
};

const students = [
    { name: 'an', score: 85 },
    { name: 'binh', score: 92 },
    { name: 'chi', score: 78 },
    { name: 'dung', score: 88 },
    { name: 'ha', score: 95 },
    { name: 'hieu', score: 100 }
];

getTopStudent(students, 80);

//4.
function calculateInterest(principal, rate, year) {
    let total;
    total = principal + principal * rate * year / 100;
    return console.log(total)
}

calculateInterest(100000000, 5, 1);