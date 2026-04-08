//Bai 1
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    occupation: "Software Engineer",
};

const { firstName, lastName, age, occupation } = person;

console.log(`First name: ${firstName}`);
console.log(`Last name: ${lastName}`);
console.log(`Age: ${age}`);
console.log(`Occupation: ${occupation}`);

//Bai 2
const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2022,
    color: "White"
}
const { brand, model, year, color } = car;
console.log(`Brand: ${brand}`);
console.log(`Model: ${model}`);
console.log(`Year: ${year}`);
console.log(`Color: ${color}`);

//Bai 3
const user = {
    name: undefined
}
const { name: nameUser = "Guest" } = user;
console.log(`${nameUser}`);

//Bai 4
const product = {
    price: undefined
}
const { price = 0 } = product;
console.log(`Price: ${price}`);

//Bai 5
const book = {
    title: "The Great Gatsby"
}
const { title: bookTitle } = book;
console.log(`Title: ${bookTitle}`);

//Bai 6
const movie = {
    director: "Ngoc Hanh"
}
const { director: filmDirector } = movie;
console.log(`Director: ${filmDirector}`);

//Bai 7
const person2 = {
    address: {
        street: "123 Main St",
        city: "Hanoi",
        country: "Vietnam"
    }
}
const { address: { street } } = person2;
console.log(`Street: ${street}`);

//Bai 8
const product2 = {
    details: {
        brand: "Apple",
        model2: "iPhone 13",
        color: "Black"
    }
}
const {details: {model2}} = product2;
console.log(`Model: ${model2}`);