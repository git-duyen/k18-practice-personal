//1. 
let car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2021
};

console.log(car.year); // Output: 2021

//2. 
let person = {
    name: 'Alice',
    address: {
        street: '123 Main St',
        city: 'Anytown',
        country: 'USA'
    }
};
console.log(person.address.street); // Output: 123 Main St

//3. 
let student = {
    name: 'Bob',
    grades: {
        math: 10,
        enlish: 9
    }
};

console.log(student.grades["math"]); // Output: 10

//4. 
let settings = {
    volume: 'loud',
    brightness: 'light'
};
settings.volume = "change volume";
console.log(settings.volume); // Output: change volume



//5.
let bike = {
  
};
bike.color = 'red';
console.log(`bike's properties: ${JSON.stringify(bike)}`); 

//6.
let employee = {
    name: 'Charlie',
    age: 30
};
delete employee.age;
console.log('employee: ' + JSON.stringify(employee)); // Output: { name: 'Charlie' }

//7.
const school = {
    classA: ["An", "Binh", "Chau"],
    classB: ["Dao", "Huong", "Giang"]
}

console.log(school.classA);
console.log(school.classB);