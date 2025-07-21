let array = [1,2,5,3,6,7,3,7,7,5,7,8,9,0,6,4,7,8,5,2,3,4,1,5,8,9];
let k = Number(prompt("Nhập vào 1 số nguyên bất kỳ: "));
let count =0;
for (let i=0;i<array.length; i++){
    let num = Number(array[i]);
    if (k===num){
        count++;
    }
}
alert("Số lần xuất hiện của số "+k+ " là: "+count);