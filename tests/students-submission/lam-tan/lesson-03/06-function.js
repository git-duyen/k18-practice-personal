function multiply(a,b){
    let result = a*b;
    return result;
}
console.log(`2 x 5 = ${multiply(2,5)}`);
console.log(`3 x 4 = ${multiply(3,4)}`);

function findMin(a,b,c){
    if(a<b && a<c){
        return a;
    }if( b<a && b<c ){
        return b;
    }
    return c;
}
console.log(`so nho nhat trong 2, 3, 4 la so ${findMin(2,3,4)}`);
console.log(`so nho nhat trong 4, 2, 3 la so ${findMin(4,2,3)}`);
console.log(`so nho nhat trong 4, 3, 2 la so ${findMin(4,3,2)}`);

const students = [
  { name: "An", score: 9 },
  { name: "Binh", score: 7.5 },
  { name: "Chau", score: 6 },
];
function getTopStudent(students, threshold){
    let result = [];
    for(let i=0;i<students.length;i++){
        if(students[i].score>=threshold){
            result.push(students[i].name);
        }
    }
    return result;
}
console.log(getTopStudent(students, 8));

function calculateInternet(principal, rate, years){
    let total = principal + principal * rate * years / 100;
    return total;
}
console.log(`Tong so tien 1.000.000 sau 3 nam voi lai 5% la: ${calculateInternet(1000000,5,3)} `);