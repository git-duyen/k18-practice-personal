//Bai 1:
let s = 0;
for(let i = 1; i < 101; i++){
    s+=i;
}
console.log(s)

//Bai 2:
for(let i = 2; i < 10; i++){
    console.log("Bang cuu chuong "+i);
    for(let j = 1; j < 11; j++){
        console.log(i + " * " + j + " = " + (i*j));
    }
}

//Bai 3:
const arr = [];
for(let i =1; i < 100; i++){
    if(i%2===1){
        arr.push(i);
    }
}

//Bai 4:
for(let i = 1; i < 11; i++){
    console.log("user"+i+"@example.com")
}

//Bai 5:
const arr1 = [
    {
    month: 1,
    total: 100
    },
    {
    month: 2,
    total: 200
    },
    {
    month: 3,
    total: 300
    },
    {
    month: 4,
    total: 400
    },
    {
    month: 5,
    total: 500
    },
    {
    month: 6,
    total: 600
    },
    {
    month: 7,
    total: 700
    },
    {
    month: 8,
    total: 800
    },
    {
    month: 9,
    total: 900
    },
    {
    month: 10,
    total: 1000
    },
    {
    month: 11,
    total: 1100
    },
    {
    month: 12,
    total: 1200
    },
]
let s1 = 0;
for(let i = 0; i < arr1.length; i++){
    s1+=arr1[i].total;
}
console.log(s1)
