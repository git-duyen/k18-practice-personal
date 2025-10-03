function findPairsDivisibleBY17() {
    let count = 0;
    for (let i = 1; i <= 99; i++) {
        for (let j = i + 1; j <= 100; j++) {
            let sum = i + j;
            if ((sum) % 17 === 0) {
                console.log(`(${i}, ${j}) = ${sum}`);
                count++;
            }
        }
    }
    console.log(`Tổng số cặp chia hết cho 17: ${count}`);
}
findPairsDivisibleBY17();