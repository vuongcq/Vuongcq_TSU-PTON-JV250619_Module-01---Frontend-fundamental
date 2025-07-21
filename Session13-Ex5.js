let inputString = prompt("Nhập vào chuỗi số nguyên bất kỳ:");
let array = inputString.split("");
alert(array);
let sumEven =0;// tổng của số chẵn
let sumOdd =0;// tổng của số lẻ
for(let i=0; i<array.length;i++){
    let num = Number(array[i]); //ép kiểu mảng sang số
    if (num % 2===0){
        sumEven +=num;
    }
    else
        sumOdd +=num;
}
alert("Tổng số chẵn là: " + sumEven);
alert("Tổng số lẻ là: " + sumOdd);