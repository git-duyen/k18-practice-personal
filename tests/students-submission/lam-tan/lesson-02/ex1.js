//a. Khai báo hằng số number với giá trị là 12
const number = 12; 
console.log("a. "+number);
//b. Khai báo 1 biến name giá trị là "my number"
let name = "number";
console.log("b. ",name);
//c. Khai báo 1 biên isEven với giá trị là sai
let isEven = false
console.log("c. "+isEven)
//d. Kiểm tra nếu number là số chẵn, isEven thành giá trị đúng
if(number%2===0){
    isEven = true
}
console.log("d: "+isEven);
