let chieucao = 168;
let solechieucao = chieucao%100;
let cannanglytuong = solechieucao * 9 /10;
let cannangtoida = solechieucao;
let cannangtoithieu = solechieucao * 8 /10;

if (chieucao < 100) {
    console.log("Công thức áp dụng cho chiều cao trên 100cm");
}
else { console.log("Cân nặng lý tưởng của bạn là: " + cannanglytuong + "kg" + " Cân nặng tối đa của bạn là: " + cannangtoida + "kg" + " Cân nặng tối thiểu của bạn là: " + cannangtoithieu + "kg"); }
