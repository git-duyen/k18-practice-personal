/* 1. Viết hàm tính tích của 2 số */
function multiply(a, b){
    sum = a * b;
    console.log(sum);   // sai ở đây do return làm kết thúc hàm, ko thể in ra sau return
}

multiply(5, 25);
multiply(125, 235);

/* 2. Viết hàm trả về giá trị nhỏ nhất của 3 số */
function findMin(a, b, c) {
    let min = a;
    if (b < min) {
        min = b;
    }
    if (c < min) {
        min = c;
    }
    return min;
}

console.log(findMin(30, 212, 900));
console.log(findMin(150, 3, 78));

/* 3. Viết hàm trả về mảng chứa tên hs có điểm >= top */
function getTopStudents(students, threshold) {
    let result = [];
    for(let i = 0; i < students.length; i++) {
        if(students[i].score >= threshold) {
            result.push(students[i].name);
        }
    }
    return result;
}
const students = [
    { name: "An", score: 50 },
    { name: "Huy", score: 90 },
    { name: "Long", score: 85 },
    { name: "Hiếu", score: 65 }
];

const topStudents = getTopStudents(students, 80);
console.log(topStudents);


/* 4. Viết hàm calculateInterest */
function calculateInterest(principal, rate, year) {
    let interest = principal + (principal * rate * year/100);
    return interest;
}

console.log(calculateInterest(5000, 0.08, 10));
console.log(calculateInterest(1000, 1.5, 20));
