//1.
console.log("---Exercise 1----")
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    occupation: "Software Engineer"
}

const {firstName, lastName, age} = person;
console.log(firstName, lastName, age);

//2.
console.log("---Exercise 2----")
const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2022,
    color: "White"
}

const {brand, model, year, color} = car;
console.log(brand, model, year, color);

// 3.
console.log("---Exercise 3----")
const user = {
    //name:...
}

const { name = "Frank" } = user;
console.log(name);

// 4.
console.log("---Exercise 4----")
const product = {
    //price: ...
}

const { price = 0 } = product;
console.log(price);

// 5.
console.log("---Exercise 5----")
const book = {
    title: "Comic"
}

const { title: bookTitle} = book;
console.log(bookTitle);

// 6.
console.log("---Exercise 6----")
const movie = {
    director: "MrA"
}

const { director: filmDirector } = movie;
console.log(filmDirector);

// 7.
console.log("---Exercise 7----")
 const person1 = {
    address : {
        street: "Bach Mai",
        city: "Ha Noi",
        country: "Viet Nam"
    }
}

const { address: { street }} = person1;
console.log(street);

// 8.
console.log("---Exercise 8----")
const product1 = {
    details: {
        brand: "Thong Nhat",
        model1: "Xe dap mini",
        color: "Trang"
    }
}

const { details: { model1 }} = product1;
console.log(model1);
