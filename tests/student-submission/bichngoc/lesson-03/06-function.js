1.
function multiply(a, b) {
    return a * b;
}
console.log(multiply(5, 10));
console.log(multiply(2, 11));

2.
function findMin(a, b, c) {
    return Math.min(a, b, c);
}
console.log(findMin(5, 10, 2));
console.log(findMin(2, 11, 1));

3. 
const topStudents = [
        { "name": "Alice", "score": 9 },
        { "name": "Bob", "score": 7 },
        { "name": "Charlie", "score": 8 },
        { "name": "David", "score": 6 },
        { "name": "Eve", "score": 10 }
    ];
function getTopStudents (students, threshold) {
    let result =[];
    for (let i = 0; i < students.length; i++) {
        if (students[i].score >= threshold) {
            result.push(students[i].name);
        }
    }
    return result;
}

let hsGioi = getTopStudents(topStudents, 8);
console.log(hsGioi);

4.
function calculateInterest(principal, rate, years) {
    return principal + principal * rate * years/100;
}
console.log(calculateInterest(1000, 0.05, 2));
