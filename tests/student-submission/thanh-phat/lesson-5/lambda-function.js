const name = (name) => `Hello, ${name}!`;

console.log(name("Alice"));

const total = (price, quantity, discount) => `Total: ${(price * quantity) - discount}`;
console.log(total(10, 5, 5));