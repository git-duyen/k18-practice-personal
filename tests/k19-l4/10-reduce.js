const numbers = [1, 2, 3, 4, 5];

// Cách hoạt động từng bước
const sum = numbers.reduce((accumulator, current) => {
  console.log(`accumulator: ${accumulator}, current: ${current}`);
  return accumulator + current;
}, 0);

console.log(sum);


