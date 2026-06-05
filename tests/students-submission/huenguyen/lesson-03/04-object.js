//1
const car = {
    "make" : "Toyota",
    "model" : "Corolla",
    "year" : "2021",
};
console.log(car.year);

//2
 const person = {
     name: "Hue",
    address: {
        street : "Ha Long",
        city : "Quảng Ninh",
        contry: "Viet Nam",
     }
};
    console.log (person.address.street);

//3
    const student = {
        name: "Hue",
        grade: {
            math: 10,
            english: 10,
        }
    };
     console.log (student.grade['math']);

     //4
    const settings = {
        volume : 100,
        brightness: 80,
     }
     settings.volume= 90
     console.log (settings.volume)

     //5
    const bike = {
        name: "Honda",
    };
    bike.color = "xanh"
    console.log (bike)


    //6
    const employee = {
        name : "Hue",
        age: "25"
    }
    delete employee.age
    console.log(employee)
//7
    const school = {
        classA : ["An", "Bình", "Châu"],
        classB : ["đào", "Hương", "Giang"],
    }