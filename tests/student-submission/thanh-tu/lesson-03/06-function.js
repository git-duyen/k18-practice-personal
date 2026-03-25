//1. Hàm multiply in ra kết quả nhân của 2 số
function multiply(numA, numB) {
  console.log(`Kết quả phép tính ${numA} x ${numB} là: ${numA * numB}`);
}

multiply(5, 10);
multiply(2, 20);

//2. Hàm findMin trả về giá trị nhỏ nhất trong 3 số a, b, c
function findMin(numA, numB, numC) {
  let minNum = numA;

  if (numB < minNum) {
    minNum = numB;
  }

  if (numC < minNum) {
    minNum = numC;
  }

  console.log(`Số nhỏ nhất trong các số ${numA}, ${numB}, ${numC} là ${minNum}`)
}
findMin(5, 4, 8);
findMin(15, 22, 1);

//3.Viêt hàm getTopStudents và trả về mảng chứa tên học sinh có điểm 
function getTopStudents(students, threshold) {
  let result = [];

  for (let i = 0; i < students.length; i++) {
    if (students[i].score >= threshold) {
      result.push(students[i].name);
    }
  }

  return result;
}

// danh sách học sinh
let students = [
  { name: "An", score: 6.8 },
  { name: "Bình", score: 6.5 },
  { name: "Chi", score: 9 },
  { name: "Dũng", score: 7 },
  { name: "Đào", score: 8.5 },
  { name: "Hương", score: 10 },
];

console.log(`Danh sách học sinh thuộc hàng "top"
    ${getTopStudents(students, 7)}`);

//4. Viết hàm calculatorInterest 
function calculatorInterest(principal, rate, years){
    let total = principal + principal*rate*years/100
    console.log(`Tiền bạn nhận được với lãi suất ${rate}% trong ${years} năm là: ${total} `)
}
calculatorInterest(100000,6,5);

