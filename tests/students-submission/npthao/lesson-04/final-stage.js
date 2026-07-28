function findPairDivisibleBy17(){
    let count = 0
    const results = [];

for ( let i = 1 ; i <=100 ; i++){

    for (let j = i ; j <= 100 ; j++ ) {
    if ((i+j) % 17 === 0){
        results.push(`(${i}, ${j})`);
        count++;
    }
    }
}
console.log("Các cặp số: ", results.join(" , "))
console.log("Tổng số cặp: " , count);

}
findPairDivisibleBy17();