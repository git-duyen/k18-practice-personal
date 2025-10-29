const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => {
    console.log("abc---");
    return num * 2;
});

const doubled2 = numbers.map(num => num*2);

console.log(doubled); // [2, 4, 6, 8, 10]
console.log(numbers); 