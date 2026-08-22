const academyName: string = "E101 Hoc Test";

// built-in type: string, number, boolean, ,,,
// custom type: mình tự định nghĩa

type E101User = {
    name: string;
    age: number;
    yearOfExperience: number;
};

interface E101User2 {
    name: string;
    address: string;
    email: string;
}

const student1: E101User = {
    name: "Thu Qua",
    age: 20,
    yearOfExperience: 1,
};

const student2: E101User2 = {
    name: "Thu Qua",
    address: "Da Nang",
    email: "vothithuqua97@gmail.com"
}