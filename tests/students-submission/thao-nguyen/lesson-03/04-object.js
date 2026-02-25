//1.Car
let car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2021,
}
console.log (car.year);
//2.person
let person ={ 
    name : 'Thao',
    address :{
        street :"Lang Ha",
        city : "Hanoi",
        country : "Vietnam"
    }
}
console.log (person.address.street);
//3.student
const student = {
    name : "An",
    grade : {
        math : 9,
        english : 8
    }
}
console.log(student["grade"]["math"]);
//4/setting
const setting ={
    volume : 100,
    brightness : 70,
}
setting.volume = 80;
console.log(setting);
//5
const bike ={
    name :"Honda"
}
bike.color = "red";
console.log(bike);
//6.employee
const employee ={
    name :"Thao",
    age : 27
};
delete  employee.age;
console.log(employee);
//7.class
const  school = {
    classA:["AN, Bình, Châu"],
    classB:["Đào, Hương, Giang"]

}
console.log(school);




