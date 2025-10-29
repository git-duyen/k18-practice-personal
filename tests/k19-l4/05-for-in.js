// Với Object
const person = {
    name: "John",
    age: 30,
    city: "Hanoi"
};

for (let key in person) {
    console.log(key + ": " + person[key]);
}

// Khai báo object: student gồm có:
// - Name
// - Address
// In ra tên và address trên cùng một dòng