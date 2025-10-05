// Hãy đếm và in ra có bao nhiêu cặp số từ 1 tới 100 chia hết cho 17

// Cách 1: 
let count = 0;

// cặp số i + j = sum, sao cho sum chia hết cho 17
for (let i = 1; i <= 100; i++) {
    for (let j = i + 1; j <= 100; j++) {
        if ((i + j) % 17 === 0) {
            console.log(`(${i}, ${j}) = ${i + j}`);
            count++;
        }
    }
}

console.log ('');
console.log(`Tổng cộng: ${count} cặp`);


// Cách 2: duyệt trực tiếp các giá trị sum là bội số của 17 và <= 200 (max i + j)
let pairs2 = [];

for (let sum = 17; sum <= 200; sum += 17) {
    for (let i = 1; i <= 100; i++) {
        let j = sum - i;
        if (j >= 1 && j <= 100 && i < j) { // thêm điều kiện tránh lặp ngược (i,j) & (j,i) và tránh cặp trùng (i, i) (j, j)
            pairs2.push({ i, j, sum});
        }
    }
}

pairs2.forEach((pair) => {
    console.log(`(${pair.i}, ${pair.j}) = ${pair.sum}`);
});

console.log('');
console.log(`Tổng cộng: ${pairs2.length} cặp`);

