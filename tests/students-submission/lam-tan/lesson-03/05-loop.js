let sum = 0
for(let i=1; i<=100;i++){
    sum += i
}
console.log(`Tong tu 1 -> 100 = ${sum} `)

for(let i=2; i<=9; i++){
    console.log(`Bang cuu chuong ${i} : `);
    for(let j=1;j<=10;j++){
        console.log(`${i} x ${j} = ${i*j} `);
    }
}

for(let i=1; i<=99;i++){
    if(i%2!==0){
        console.log(i);
    }
}

for(let i=1; i<=10;i++){
    console.log(`user${i}@example.com`);
}

const sale = [
  { month: 1, total: 50 },
  { month: 2, total: 100 },
  { month: 3, total: 150 },
  { month: 4, total: 50 },
  { month: 5, total: 200 },
  { month: 6, total: 150 },
  { month: 7, total: 100 },
  { month: 8, total: 50 },
  { month: 9, total: 50 },
  { month: 10, total: 150 },
  { month: 11, total: 200 },
  { month: 12, total: 100 },
];
let totalSale = 0;
for (let i = 0; i < sale.length; i++) {
  totalSale += sale[i].total;
}
console.log(`Tong doanh thu = ${totalSale}`);
