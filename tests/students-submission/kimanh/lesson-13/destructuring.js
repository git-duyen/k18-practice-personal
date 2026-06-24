//Bài tập 1
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    occupation: "Software Engineer"
};
const { firstName, lastName, age } = person;

console.log("======Bài tập 1======");
console.log("First Name: ", firstName);
console.log("Last Name: ", lastName);
console.log("Age: ", age);

//Bài tập 2
const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2022,
    color: "White",
};
const { brand, model, year, color } = car;

console.log("======Bài tập 2======");
console.log("Brand: ", brand);
console.log("Model: ", model);
console.log("Year: ", year);
console.log("Color: ", color);

//Bài tập 3
const user = {};
const { name = "Guest" } = user;
console.log("======Bài tập 3======");
console.log("Name: ", name);

//Bài tập 4
const product = { price: undefined };
const { price = 0 } = product;

console.log("======Bài tập 4======");
console.log("Price:", price);

//Bài tập 5
const book = {
    title: "Playwright Automation Testing"
};
const { title: bookTitle } = book;
console.log("======Bài tập 5======");
console.log(bookTitle);

//Bài tập 6
const movie = {
    director: "Trấn Thành"
};
const { director: filmDirector } = movie;
console.log("======Bài tập 6======");
console.log(filmDirector);

//Bài tập 7
const person7 = {
    address: {
        street: "An Khánh, Hoài Đức, Hà Nội",
        city: "Ha Noi",
        country: "Viet Nam"
    }
};

const { address: { street } } = person7;
console.log("======Bài tập 7======");
console.log(street);

//Bài tập 8
const product8 = {
    details: {
        brand8: "Vinfast",
        model8: "VinFast VF 8",
        color8: "Red"
    }
};

const { details: { model8 } } = product8;
console.log("======Bài tập 8======");
console.log(model8);