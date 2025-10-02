/* 1. Tạo một object car với thuộc tính make=”Toyota”, model=”Corolla”, và
year=2021. Sau đó in ra năm sản xuất của xe. */

const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2021
}
console.log("1. Năm sản xuất của xe là", car["year"]);

/* 2. Tạo một object person có thuộc tính name, address (là một object lồng với các thuộc
tính street, city, country). In ra tên đường của người này. */

const person = {
    name: "Đỗ Thanh Hiền",
    address: {
        street: "Quốc Lộ 13",
        city: "Hồ Chí Minh",
        country: "Việt Nam"
    }
}
console.log("2. Người dùng này ở đường", person["address"]["street"]);

/* 3. Tạo một object student và truy cập đến điểm môn toán (math) sử dụng ngoặc vuông.
Biết object student bao gồm 2 thuộc tính: name và grades. Trong đó grades là một
object với 2 thuộc tính kiểu number: math và english */

const student = {
    name: "Đỗ Thanh Hiền",
    grades: {
        math: 8,
        english: 9
    }
}
console.log("3. Điểm toán của người dùng này là ", student["grades"]["math"], "điểm");

/* 4. Tạo một object settings để quản lý cài đặt của ứng dụng với các thuộc tính như
volume, brightness. Thay đổi volume và in ra object mới. */

const settings = {
    volume: 70,
    brightness: 90,
}
settings["volume"] = 100;
console.log("4.", settings);

/* 5. Tạo một object bike và sau đó thêm thuộc tính color vào object đó */

const bike = {
}
bike["color"] = "red";
// console.log("5.",bike);

/* 6. Tạo một object employee với các thuộc tính: name, age và xóa thuộc tính age khỏi
object này */

const employee = {
    age: 25,
    name: "Đỗ Thanh Hiền"
}
delete employee["age"];
// console.log("6.",employee);

/* 7. Một trường học có các lớp học và học sinh như sau:
-  classA: An, Bình, Châu
-  classB: Đào, Hương, Giang
Hãy viết code để đáp ứng yêu cầu sau:
- Khai báo tên biến: school
- Tên class là tên thuộc tính, giá trị của các thuộc tính này là một mảng chứa
tên các học sinh */

const school = {
    classA: ["An", "Bình", "Châu"],
    classB: ["Đào", "Hương", "Giang"]
}
// console.log("7.",school);