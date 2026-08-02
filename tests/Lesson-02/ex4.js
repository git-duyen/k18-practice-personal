const chieucao = 158;
const cannanglytuong = (chieucao % 100 * 9) / 10;
const cannangtoithieu = (chieucao % 100 * 8) / 10;
const cannangtoida = (chieucao % 100);
console.log("Cân nặng lý tưởng của bạn là:", cannanglytuong, ",",
    "Cân nặng tối đa của bạn là:", cannangtoida, ",",
    "Cân nặng tối thiểu của bạn là:", cannangtoithieu);