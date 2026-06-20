const height = 156;
const soLeChieuCao = height % 100;

if (height > 100) {
    console.log("Cân nặng lý tưởng của bạn là: " + (soLeChieuCao * 9) / 10 + ". " + "Cân nặng tối đa là: " + soLeChieuCao + ". " + "Cân nặng tối thiểu là: " + (soLeChieuCao * 8) / 10);
}
if (height < 100) {
    console.log("Chiều cao không phù hợp");
}