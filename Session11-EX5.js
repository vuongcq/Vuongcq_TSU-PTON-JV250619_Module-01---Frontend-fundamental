alert("Chào mừng đến với phần mềm tính chỉ số khối cơ thể");
let nang = Number(prompt("Nhập vào cân nặng của bạn (kg):"));
while (nang <= 0) {
  alert("Cân nặng phải lớn hơn 0, vui lòng nhập lại!");
  nang = Number(prompt("Nhập vào cân nặng của bạn (kg):"));
}
let cao = Number(prompt("Nhập vào chiều cao của bạn (m):"));
while (cao <= 0) {
  alert("CHiều cao phải lớn hơn 0, vui lòng nhập lại!");
  cao = Number(prompt("Nhập vào chiều cao của bạn (kg):"));
}
let bmi = (nang / cao) * cao;
if (bmi < 18.5) {
  console.log("Gầy");
} else if (18.5 <= bmi <= 24.9) {
  console.log("Bình thường");
} else if (25 <= bmi <= 29.9) {
  console.log("Tiền béo phì");
} else if (30 <= bmi <= 34.9) {
  console.log("Béo phì độ I");
} else if (35 <= bmi <= 39.9) {
  console.log("TBéo phì độ II");
} else if (40 <= bmi) {
  console.log("TBéo phì độ III");
}
