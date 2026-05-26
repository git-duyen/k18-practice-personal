//chiều cao tính bằng cm 
const height = 152;  
const heightMessage = "Với chiều cao " + height + "cm, ";

// Cân nặng lý tưởng
const idealHeight = (height - 100) * 9 / 10;
const idealHeightMessage = " Cân nặng lý tưởng của bạn là " + idealHeight + "kg,";

// Cân nặng tối đa
const maxheight = (height - 100);
const maxHeightMessage = " cân nặng tối đa là " + maxheight + "kg";

// Cân nặng tối thiểu
const minheight = (height - 100) * 8 / 10;
const minHeightMessage = " và cân nặng tối thiểu là " + minheight + "kg.";

//In ra kết quả
console.log(heightMessage + idealHeightMessage + maxHeightMessage + minHeightMessage);