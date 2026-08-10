// bt 1

let sum = 0;

for (let i = 1; i <= 100; i++) {
  sum = sum + i;
}
console.log(sum);

// bt 3

let arr = [];
for (let i = 1; i <= 99; i++) {
  if (i % 2 === 1) {

    arr.push(i)
  }

}
console.log(arr);

// bt 4

for (let i = 1; i <= 10; i++) {
  console.log(`user${i}@example.com`);
}

// bt 5

let doanhthu= [
  { month: 1, total: 100 },
  { month: 2, total: 200 },
  { month: 3, total: 300 },
  { month: 4, total: 100 },
  { month: 5, total: 200 },
  { month: 6, total: 300 },
  { month: 7, total: 100 },
  { month: 8, total: 200 },
  { month: 9, total: 300 },
  { month: 10, total: 100 },
  { month: 11, total: 200 },
  { month: 12, total: 300 },
]
let doanhthunam = 0;

for (let i = 0; i < doanhthu.length; i++) {
  
  let doanhthu1thang = doanhthu[i]

  let totalthang = doanhthu1thang.total

  doanhthunam = doanhthunam + totalthang
 
}

console.log(doanhthunam);


