const myName = "   PHONG  ";
const delim = "_";

const finalStr = delim + myName.trimEnd() + delim;
console.log(finalStr);
// ----

console.log(myName.toLocaleLowerCase());
console.log("Tram".toUpperCase());

// ----
const str = "Xin chao Viet Nam";
const tram = str.includes("VN");
console.log(tram);

const newResult = str.replace("Viet Nam", "VN");
console.log(newResult);
// ---
const headers = 'id,name,age,address';
const headerArr = headers.split(',');
console.log(headerArr);
// headerArr = ['id', 'name', 'age', 'address']

// ---
const originStr = "Hom nay, toi di hoc";
const subStr = originStr.substring(3, 6);
console.log(subStr);

const viTri = originStr.indexOf("tui");
console.log(viTri);