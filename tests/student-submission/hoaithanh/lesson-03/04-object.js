// 1. tạo một object car với thuộc tính make = 'TOYOTA', model ="corola" và year = 2021, sau đó in ra năm sản xuất của xe
let car = {
    make: 'Toyora',
    model: 'corola',
    year: 2021
};

console.log(car.year);

//2. tạo một object person có thuộc tính name, address (street, city, country), in ra tên đường của người này

let person = {
    name: 'Minh Chau',
    address:{
        street: 'Nguyen Hoang',
        city: 'Danang',
        country: 'Vietnam'
    }
};

console.log(person.address.street);

//3. tạo một object student và truy cập đén điểm môn toán (math) sử dụng ngoặc vuông.
// biết object student bao gômmf 2 thuộc tính name và grades (math & english)

let student = {
    name: 'My Ngan',
    "grades": {
        "math": 5,
        "english": 8
    }
};

console.log(student["grades"]["math"]);

// 4. tạo một object settings để quản lý cài đặt của ứng dụng với các thuôc tính như
// volume, brightness. Thay đổi volume và in ra object mới

const settings = {
    volume: 100,
    brightness: 50
}

settings.volume= 80;
console.log(settings);

// 5. Tạo một object bile và sau đó thêm thuộc tính color vào object đó
let bike = {
    make: 'Xedap',
    model: 'AZM-1',
    year: 2021
};

bike.color = 'Blue';
console.log(bike);

// 6. tạo một Object employee với các thuộc tính: name, age và xoá thuộc tính age

let employee = {
    name: 'Minh Hoang',
    age: 29
};

delete employee.age;
console.log(employee);

/* 7. một trường có các lợp và hs như sau
classA: An, Bình, Châu
classB: Đào, Hương, Giang
viết code để đáp ứng:
- Khai báo tên biến: School
- Tên clas là tên thuộc tính, giá trị của các thuộc tính này là một mảng chứa tên các học sinh
vd: const school = { classA:["Giang"... }
*/

const school = {
    classA: ["An", "Bình", "Châu"],
    classB: ["Đào", "Hương", "Giang"]
};

console.log(school);
