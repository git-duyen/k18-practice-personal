const academyName: string = "BetterBytesAcademy";

// built-in type: string, number, boolean,...
// custom type: mình tự định nghĩa.

type K18User = {
    name: string;
    age: number;
    yearOfExperience: number;
}

interface K18User2 {
    name: string;
    address: string;
    email: string;
}

const student1: K18User = {
    name: "Phong",
    age: 18,
    yearOfExperience: 1,
};

const student2: K18User2 = {
    name: "Phong",
    address: "Ha Noi",
    email: "dominhphong306@gmail.com"
}

// Dinh nghia kieu du lieu custom:
// - ten: Gold
// - thuoc tinh: loaiVang: string; giaMua: number; giaBan: number
// Khai bao 2 loai vang bat ki