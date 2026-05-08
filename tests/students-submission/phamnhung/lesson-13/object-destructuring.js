//Bai 1
const person = {
    firstName: 'Nhung',
    lastName: 'Pham',
    age: 30,
    occupation: 'Software Engineer',
};

const { firstName, lastName, age, occupation } = person;
console.log(`Bai 1:`);
console.log(`First Name: ${firstName}`);
console.log(`Last Name: ${lastName}`);
console.log(`Age: ${age}`);

//Bai 2
const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2022,
    color: "White",
};
const { brand, model, year, color } = car;
console.log(`Bai 2: ${brand}, ${model}, ${year}, ${color}`);

//Bai 3
const user = {
    name: undefined,
};
const { name: userName = `guest` } = user;
console.log(`Bai 3: ${userName}`);

//Bai 4
const product = {
    price: undefined,
};
const { price: productPrice = 0 } = product;
console.log(`Bai 4: ${productPrice}`);

//Bai 5
const book = {
    title: "The Great Gatsby",
};
const { title: bookTitle } = book;
console.log(`Bai 5: ${bookTitle}`);

//Bai 6
const movie = {
    director: "Nolan",
};
const { director: filmDirector } = movie;
console.log(`Bai 6: ${filmDirector}`);

//Bai 7
const person2 = {
    address: {
        street: "123 Main St",
        city: "Hanoi",
        country: "Vietnam",
    },
};
const { address: { street } } = person2;
console.log(`Bai 7: ${street}`);

//Bai 8
const product2 = {
    details: {
        brand: "Apple",
        model2: "iPhone 13",
        color: "Black",
    },
};
const { details: { model2 } } = product2;
console.log(`Bai 8: ${model2}`);
