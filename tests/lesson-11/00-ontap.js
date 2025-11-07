function getCurrency(price) {
    return `${price}$`;
}

const hellStr = getCurrency(1000);
console.log(hellStr);