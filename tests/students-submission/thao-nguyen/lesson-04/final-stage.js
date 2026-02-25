function findPairsDivisibleBy17() {
  let count = 0;

  for (let a = 1; a <= 100; a++) {
    for (let b = a + 1; b <= 100; b++) {
      if ((a + b) % 17 === 0) {
        console.log(`(${a}, ${b})`);
        count++;
      }
    }
  }

  console.log(`\nTổng cộng: ${count} cặp`);
}

findPairsDivisibleBy17();
