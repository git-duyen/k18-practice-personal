// //Function Declaration
// function add(a,b) {
//     return a+b;
// }
// //Function Expression
// const add = function(a,b) {
//     return a+b;
// }
//Arrow Function (lambda function)
// const add = (a,b) => {
    //     return a+b;  
    //};
//Lamda function có thể viết gọn hơn nếu chỉ có 1 câu lệnh return
// const add = (a,b) => a+b;

//lambda function có thể viết gọn hơn nếu không có tham số nào
//phải có dấu ngoặc tròn rỗng
// const greet = () => console.log('Hello');

//lambda function có thể viết gọn hơn nếu chỉ có 1 tham số
//không cần dấu ngoặc tròn
// const double = x => x * 2;

//Anonymus function


//Thực hành1
const bai1 = function(name) {
    return `Hello ${name}`;
}
console.log(bai1('Nhung'));

const product = function(price, quantity, discount) {
    const total = price * quantity - discount;
    return total;
}
console.log(product(100, 2, 10));

//Thực hành2
const hello = (name) => {
    return `Hello ${name}`;
}
console.log(hello('Nhung'));

const product2 = (price, quantity, discount) => {
    return price * quantity - discount;
}
console.log(product2(20_000, 2, 10));