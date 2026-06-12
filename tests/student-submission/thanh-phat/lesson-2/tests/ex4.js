const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Nhập chiều cao (cm): ', (input) => {
  const height = parseFloat(input);
  rl.close();

  if (height <= 100) {
    console.log('Công thức chỉ áp dụng cho chiều cao > 100cm');
    return;
  }

  const lastTwo = height % 100;

  const ideal  = (lastTwo * 9) / 10;
  const max    = lastTwo;
  const min    = (lastTwo * 8) / 10;

  console.log(`Chiều cao: ${height}cm`);
  console.log(`Cân nặng lý tưởng : ${ideal} kg`);
  console.log(`Cân nặng tối đa   : ${max} kg`);
  console.log(`Cân nặng tối thiểu: ${min} kg`);
});
