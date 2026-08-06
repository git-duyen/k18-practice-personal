// Cân nặng lý tưởng = [ số lẻ của chiều cao (cm) * 9 ]/ 10
// Mức cân tối đa = số lẻ của chiều cao
// Mức cân tối thiểu = [ số lẻ của chiều cao (cm) * 8 ]/ 10
// 170cm 
// Cân nặng lý tưởng = [ 70 * 9 ]/ 10 = 63kg
// Mức cân tối đa = 70kg
// Mức cân tối thiểu = [ 70 * 8 ]/ 10 = 56kg

let height = 165;
let restOfNumber = height % 100;
let idealWeight = (restOfNumber * 9) / 10;
let maxWeight = (restOfNumber);
let lowestWeight = (restOfNumber * 8) / 10;

console.log(
    idealWeight,
    maxWeight,
    lowestWeight);
