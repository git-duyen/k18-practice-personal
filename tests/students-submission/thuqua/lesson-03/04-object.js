// 1. Tạo một object car với thuộc tính make="Toyota", mode1="Corolla", và year=2021. Sau đó in ra năm sản xuất của xe.
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2021
}
console.log("Năm sản xuất của xe là: ", car.year);


// 2. Tạo một object per son có thuộc tính name, address (là một object lồng với các thuộc tính street, city, country). In ra tên đường của người này.
const person = {
    name: "Thu Qua",
    address: {
        street: "Nguyễn Hữu Thọ",
        city: "TP Đà Nẵng",
        country: "Việt Nam"
    }
}
console.log(`Tên đường của ${person.name} là: ${person.address.street}`);

// 3. Tạo một object student và truy cập đến điểm môn toán (math) sử dụng ngoặc vuông. Biết object student bao gồm 2 thuộc tính: name và grades. Trong đó grades là một object với 2 thuộc tính kiểu number: math và english
const student = {
    name: "Thu Qua",
    grades: {
        math: 9,
        english: 10
    }
}
console.log(`Điểm môn Toán của ${student.name} là: ${student.grades["math"]}`);

// 4. Tạo một object settings để quản lý cài đặt của ứng dụng với các thuộc tính như volume, brightness. Thay đối volume và in ra object mới.
const settings = {
    volume: 10,
    brightness: 30
}
settings.volume = 20;
console.log("Thay đổi volume và in ra object mới là:", settings);

// 5. Tạo một object bike và sau đó thêm thuộc tính color vào object đó
let bike = {
    make: "Honda",
    model: "SH125i"
}
bike.color = "red";
console.log(`Thêm thuộc tính color: ${JSON.stringify(bike)}`);

// 6. Tạo một object employee với các thuộc tính: name, age và xóa thuộc tính age khỏi object này
let employee = {
    name: "Thu Qua",
    age: 30
}
delete employee.age;
console.log(` Xoá age: ${JSON.stringify(employee)}`);

/* 7. Một trường học có các lớp học và học sinh như sau:

o classA: An, Bình, Châu
• classB: Đào, Hương, Giang

Hãy viết code để đáp ứng yêu cầu sau:

- Khai báo tên biến: school
- Tên class là tên thuộc tính, giá trị của các thuộc tính này là một mảng chứa tên các học sinh

Vd:
const school = { classA: ['Giang"]...} */

const school = {
    classA: ["An", "Bình", "Châu"],
    classB: ["Đào", "Hương", "Giang"]
}
console.log(`Học sinh của school là: \n class A gồm ${school.classA.join(", ")}, \n class B gồm ${school.classB.join(", ")} `)