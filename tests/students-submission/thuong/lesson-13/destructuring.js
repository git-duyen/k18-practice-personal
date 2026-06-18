// B1
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  occupation: "Software Engineer",
};
const { firstName, lastName, age } = person;

console.log("Bai 1");
console.log("First Name: ", firstName);
console.log("Last Name: ", lastName);
console.log("Age: ", age);
console.log("----------------------");

// B2
const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2022,
  color: "White",
};
const { brand, model, year, color } = car;

console.log("Bai 2");
console.log("Brand: ", brand);
console.log("Model: ", model);
console.log("Year: ", year);
console.log("Color: ", color);
console.log("----------------------");

// B3
const user = { name: undefined };
const { name = "Guest" } = user;

console.log("Bai 3");
console.log("Name: ", name);
console.log("----------------------");

// B4
const product = { price: undefined };
const { price = 0 } = product;

console.log("Bai 4");
console.log("Price: ", price);
console.log("----------------------");

// B5
const book = { title: "Tile Book" };
const { title: bookTitle } = book;

console.log("Bai 5");
console.log("Book Title: ", bookTitle);
console.log("----------------------");

// B6
const movie = { director: "film" };
const { director: filmDirector } = movie;

console.log("Bai 6");
console.log("Film Director: ", filmDirector);
console.log("----------------------");

//B7
const person2 = {
  address: {
    street: "123 street",
    city: "Da Nang",
    country: "Vietnam",
  },
};
const {
  address: { street },
} = person2;

console.log("Bai 7");
console.log("Street: ", street);
console.log("----------------------");

//B8
const product2 = {
  details: {
    brand: "Apple",
    model2: "IPhone",
    color: "Black",
  },
};
const {
  details: { model2 },
} = product2;

console.log("Bai 8");
console.log("Model: ", model2);
console.log("----------------------");
