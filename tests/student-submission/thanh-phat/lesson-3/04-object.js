
// Bài tập 1
const car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2021,
    color: 'red'
}

console.log(car['year']);


// Bài tập 2
const person = {
    name: 'Alice',
    address: {
        street: '123 Main St',
        city: 'Anytown',
        country: 'USA'
    }
}

console.log(person.address.street);


// Bài tập 3
const student = {
    name: 'Bob',
    grades: {
        Math: 85,
        English: 90,
        Science: 78
    }
}

console.log(student['grades']['Math']);


// Bài tập 4
const settings = {
    volume: 8,
    brightness: 5,
}

// Bài tập 5
settings['volume'] = 10;
console.log(settings.volume);

// Bài tập 6
const bike = {
    brand: 'Giant',
    type: 'Mountain',
    year: 2020
}

bike['color'] = 'blue';
console.log(bike);

// Bài tập 7
const employee = {
    name: 'Charlie',
    age: 30
}

delete employee.age;
console.log(employee);