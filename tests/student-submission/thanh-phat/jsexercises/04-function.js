
function tinhDienTich(chieuDai, chieuRong) {
  return chieuDai * chieuRong;
}

console.log(`Dien tich hinh chu nhat: ${tinhDienTich(5, 3)}`);


function kiemtraSoChanLe(nuber){
    if(nuber % 2 === 0) {
        return "So chan";
    } else {
        return "So le";
    }
}

console.log(kiemtraSoChanLe(4));
console.log(kiemtraSoChanLe(7));


function truycapPhanTuMang(){
    const keys = [3, 7, 9];

    for(let i = 0; i < keys.length; i++) {
        console.log(keys[i]);
    }
}

truycapPhanTuMang();