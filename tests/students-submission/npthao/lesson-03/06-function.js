//1

function multiply(a,b){
    return a*b;
}
console.log(multiply(2,3));
console.log(multiply(5,6));

//2

function findMin(a,b,c){
    if (a<b && a<c){
        return a;
    } else if (b<c){
        return b;
    } else {
        return c;
    }
}
console.log(findMin(5,3,8));
console.log(findMin(10,15,7));

//3

//sai
// function getTopStudents(students, threshold =9){
// return students(students.score >= threshold)
    
// }
// const student = [
//     {name : "Minh" , score: 9},
//     {name : "Tuan" , score: 8},
//     {name : "Thanh" , score: 10},

// ]
// console.log(getTopStudents.students)

//fix
function getTopStudents(student, threshold){
    return students.filter(student => student.score >=threshold)
    .map(student=>student.name);

}
const studentsList = [
    {name : "Minh" , score: 9},
    {name : "Tuan" , score: 8},
    {name : "Thanh" , score: 10},
];

console.log(getTopStudents(studentsList, 9));

//4

function calculateInterest (principal, rate, years){
    return principal + principal*rate *years / 100
}

console.log (calculateInterest(1000 , 5, 10))