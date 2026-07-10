const height = 170;

if (height > 100) {
const leHeight = height % 100

const canNangLyTuong = leHeight * 9 / 10;
const canNangToiDa = leHeight;
const canNangToiThieu = leHeight * 8 / 10;
console.log( `Cân nặng lý tưởng của bạn là: ${canNangLyTuong} kg, Cân nặng tối đa của bạn là: ${canNangToiDa} kg, Cân nặng tối thiểu của bạn là: ${canNangToiThieu} kg` )
} else {
    console.log("Chiều cao của bạn phải lớn hơn 100cm")
}