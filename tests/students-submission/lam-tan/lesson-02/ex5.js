//lặp từ 1 -> 100
for (let i = 1; i <= 100; i++) {
  //nếu giá trị vòng lặp chia hết cho 2
    if (i % 2 === 0) {
    console.log(`Số ${i} là số chẵn`);
  }
  //nếu giá trị vòng lặp không chia hết cho 2
  else {
    console.log(`Số ${i} là số lẻ`);
  }
}
