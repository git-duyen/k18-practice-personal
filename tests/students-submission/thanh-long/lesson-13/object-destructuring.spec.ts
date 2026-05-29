import { test, expect } from '@playwright/test';

test('Excersise 1', async ({ page }) => {
  const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    occupation: "Software Engineer"
  };

  const { firstName, lastName, age } = person;
  console.log(firstName, lastName, age);
  
});

test('Excersise 2', async ({ page }) => {
    const car = {
        brand: "Toyota",
        model: "Camry",
        year: 2022,
        color: "White"
    };

    const { brand, model, year, color } = car;
    console.log(brand, model, year, color);
});

test('Excersise 3', async ({ page }) => {
    const user1 = {
        name: "Guest",
        age: 20,
        email: "long@gmail.com"
    };

    const user2 = {
        age: 30,
        email: "long@gmail.com"
    }

    const { name: nameUser1 = "Guest", age: ageUser1, email: emailUser1 } = user1;
    const {  age: ageUser2, email: emailUser2 } = user2;
    if (nameUser1 !== undefined) {
        console.log(nameUser1);
    } else {
        console.log("Guest");
    }
});

test('Excersise 4', async ({ page }) => {
    const product1 = {
        name: "Laptop",
        price: 1000,
        quantity: 10
    };

    const product2 = {
        name2: "Phone",
        price2: 500,
        quantity2: 20
    };

    const product3: any = {
        name3: "Tablet",
        quantity3: 30
    };

    const { name, price = 0, quantity } = product1;
    const { name2, price2 = 0, quantity2 } = product2;
    const { name3, price3 = 0, quantity3 } = product3; 

    console.log(`Price 1: ${price}`);   
    console.log(`Price 2: ${price2}`);  
    console.log(`Price 3: ${price3}`);
});

test('Excersise 5', async ({ page }) => {
    const book = {
        title: "The Great Gatsby"
    };
    const { title: bookTitle } = book;
    console.log(`Title: ${bookTitle}`);
});

test('Excersise 6', async ({ page }) => {
    const movie = {
        director  : "filmDirector"
    }
    const { director: filmDirector } = movie;
    console.log(`Director: ${filmDirector}`);
});

test('Excersise 7', async ({ page }) => {
    const person = {
        address: {
            street: "123 Main St",
            city: "Hanoi",
            country: "Vietnam"
        }
    }
    const { address: { street } } = person;
    console.log(`Street: ${street}`);
});

test('Excersise 8', async ({ page }) => {
    const product = {
        details: {
            brand: "Apple",
            model: "iPhone 13",
            color: "Black"
        }
    }
    const { details: { model } } = product;
    console.log(`Model: ${model}`);
});


