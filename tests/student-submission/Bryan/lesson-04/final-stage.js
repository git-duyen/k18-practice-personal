
for (let i = 1; i <= 100; i++) {
  for (let j = i; j <= 100; j++) {
    if ((i + j) % 17 === 0) {
      console.log(`(${i}, ${j}) là cap so co tong chia het cho 17`);
    }
  }
}
