
//1. 
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    occupation: 'Software Engineer'
};

let { firstName, lastName, age  } = person;

console.log(firstName);
console.log(lastName);
console.log(age);

//2. 
const car = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2022,
    color: 'White'
};

let { brand, model, year, color } = car;

console.log(brand);
console.log(model);
console.log(year);
console.log(color);

//3.
const user = {
    //userName: 'johndoe',
};
const { userName = 'Guest' } = user;
console.log(`Name: ${userName}`);

//4.
const product = {
    //price: 999.99,
};
const { price = 0 } = product;
console.log(`Price: $${price.toFixed(2)}`);
console.log(price);

//5. 
const book = {
    title: 'War and Peace',
};
let { title: bookTitle } = book;
console.log(`Book title: ${bookTitle}`);
 
//6. 
const movie = {
    director: 'Tai Dang',
};
let { director: filmDirector } = movie;
console.log(`Movie director: ${filmDirector}`);


//7.
const person2 = {
    address: {
        street: '123 Main St',
        city: 'Anytown',
        country: 'UK'
    }
};
let { address: { street } } = person2;
console.log(street);


//8. 
const product2 = {
    details: {
        brand: 'Apple',
        model2: 'iPhone 17',
        color: 'Black'
    }
};
let { details: { model2 } } = product2;
console.log(`Product model: ${model2}`);