// Cân nặng lý tưởng: số lẻ của chiều cao (cm) x9 / 10
// Mức cân tối đa: bằng số lẻ của chiều cao (cm)
// Mức cân tối thiêu: số lẻ của chiều cao (cm) x8 / 10
const height = 170;
// Phạm vi áp dụng: cho chiều cao >100m
if (height > 100) {
//a. Khai báo chiều cao của bạ/n
  console.log(`Chiều cao = ${height}`);
  //b In ra cân nặng lý tưởng, cân nặng tối đa và cân nặng tối thiểu trên cùng 1 dòng
  console.log(
    `Cân nặng lý tưởng = ${((height % 100) * 9) / 10}, cân nặng tối đa = ${height % 100} , cân nặng tối thiểu ${((height % 100) * 8) / 10} `,
  );
}
