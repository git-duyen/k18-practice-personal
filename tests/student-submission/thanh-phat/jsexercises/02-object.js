const myInfo = {
  name: "John Doe",
  age: 30,
  city: "New York",
  address: "123 Main St",
  isLoverOfJavaScript: true,
  codingLanguages: ["JavaScript", "Python", "Java"],
  codingExperience: {
    JavaScript: 5,
    Python: 3,
    Java: 2,
  }
};

console.log(myInfo["name"]);
console.log(myInfo.address);
console.log(myInfo["codingLanguages"][0]);
console.log(myInfo["codingExperience"]["JavaScript"]);

const keys = [3, 7, 9];
console.log(keys[0]);
console.log(keys[1]);
console.log(keys[2]);