const startValue = 1;
const stepValue = 4;
for (let i = 1; i <= 100; i++) {
    if ((i - startValue) % stepValue === 0) {
        console.log(i)
    }
}
// (i - 1) / 4
// (4 - 1) / 4 != 0
// (5 - 1) / 4 = 0