// Tạo một object car với thuộc tính make=”Toyota”, model=”Corolla”, và year=2021. Sau đó in ra năm sản xuất của xe.
console.log("Object 1")
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2021
}
console.log(`Năm sản xuất xe là: ${car.year}`);
console.log("------------------------------------------------------");

//Tạo một object person có thuộc tính name, address (là một object lồng với các thuộc tính street, city, country). In ra tên đường của người này.
console.log("Object 2")
const person = {
    name: "Ngân",
    address: {
        street: "Văn Giang",
        city: "Hưng Yên",
        country: "Việt Nam"
    }
}
console.log(`Tên đường là: ${person.address.street}`);
console.log("------------------------------------------------------");

/* Tạo một object student và truy cập đến điểm môn toán (math) sử dụng ngoặc vuông.
Biết object student bao gồm 2 thuộc tính: name và grades. Trong đó grades là một
object với 2 thuộc tính kiểu number: math và english
*/
console.log("Object 3")
const student = {
    name: "Alice",
    grades: {
        math: 8,
        english: 7
    }
}
console.log(`Điểm toán của ${student.name} bằng ${student["grades"]["math"]}`);
console.log("------------------------------------------------------");

// Tạo một object settings để quản lý cài đặt của ứng dụng với các thuộc tính như volume, brightness. Thay đổi volume và in ra object mới.
console.log("Object 4")
const settings = {
    volume: 50,
    brightness: "80%"
}
settings.volume = 60;
console.log(settings)
console.log("------------------------------------------------------");

// Tạo một object bike và sau đó thêm thuộc tính color vào object đó
console.log("Object 5")
const bike = {
}
bike.color = "Red"
console.log(bike);
console.log("------------------------------------------------------");
// Tạo một object employee với các thuộc tính: name, age và xóa thuộc tính age khỏi object này
console.log("Object 6")
const employee = {
    name: "John",
    age: 30
}
delete employee.age;
console.log(employee);
console.log("------------------------------------------------------");
/* Một trường học có các lớp học và học sinh như sau:
○ classA: An, Bình, Châu
○ classB: Đào, Hương, Giang
Hãy viết code để đáp ứng yêu cầu sau:
- Khai báo tên biến: school
- Tên class là tên thuộc tính, giá trị của các thuộc tính này là một mảng chứa
tên các học sinh
Vd:
const school = { classA: ["Giang"]...}
*/
console.log("Object 7")
const school = {
    classA: ["An", "Bình", "Châu"],
    classB: ["Đào", "Hương", "Giang"]
}
console.log(school);
console.log("------------------------------------------------------");