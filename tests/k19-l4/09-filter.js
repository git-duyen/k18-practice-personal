const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter(num => num % 2 !== 0);

console.log(evenNumbers); // [2, 4, 6, 8, 10]
console.log(numbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] - mảng gốc không đổi

const products = [
  { name: 'iPhone 15', price: 28000000, category: 'phone', inStock: true },
  { name: 'Samsung S24', price: 22000000, category: 'phone', inStock: false },
  { name: 'iPad Pro', price: 35000000, category: 'tablet', inStock: true },
  { name: 'MacBook Air', price: 32000000, category: 'laptop', inStock: true },
  { name: 'AirPods', price: 4000000, category: 'accessory', inStock: true }
];

// Lọc sản phẩm còn hàng
const availableProducts = products.filter(product => product.inStock);
console.log(availableProducts); // 4 sản phẩm còn hàng

const instockArr = availableProducts.map(item => item.inStock);
console.log(instockArr);