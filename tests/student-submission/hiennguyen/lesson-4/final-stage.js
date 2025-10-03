// Hãy đếm và in ra có bao nhiêu cặp số từ 1 tới 100 chia hết cho 17

// Cách 1: 
let pairs1 = [];

// cặp số i + j = sum, sao cho sum chia hết cho 17
for (let i = 1; i <= 100; i++) {
    for (let j = i + 1; j <= 100; j++) {
        if ((i + j) % 17 === 0) {
            pairs1.push({ i, j, sum: i + j });
        }
    }
}

// Sắp xếp theo sum từ nhỏ đến lớn
pairs1.sort((a, b) => a.sum - b.sum);

// Lặp qua từng phần tử đã sắp xếp và in ra
pairs1.forEach((pair) => {
    console.log(`(${pair.i}, ${pair.j}) = ${pair.sum}`);
});

console.log ('');
console.log(`Tổng cộng: ${pairs1.length} cặp`);


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

