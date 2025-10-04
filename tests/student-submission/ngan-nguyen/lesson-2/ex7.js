//In ra các số chia hết cho 3 từ 1000 đến 2000
/*
for (let i = 1000; i <= 2000; i++) {
    if (i % 3 === 0) {
        console.log("Các số chia hết cho 3 từ 1000 đến 2000 là: ", i)
    }
}
*/

const divisibleByThree = [];
for (let i = 1000; i <= 2000; i++) {
    if (i % 3 === 0) {
        divisibleByThree.push(i);
    }
}
console.log("Các số chia hết cho 3 từ 1000 đến 2000 là: ", divisibleByThree.join(', '));