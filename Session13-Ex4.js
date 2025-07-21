let inputString = prompt("Nhập vào chuỗi số bất kỳ");// vì sao chổ này nhập  let inputString = Number(prompt("Nhập vào chuỗi số bất kỳ"));
let array = inputString.split("");
console.log(array);
let maxNumber=array[0];
for(let i=0;i<array.length;i++){
    if(array[i+1]>array[i]){
        maxNumber=array[i+1];
    }

}
console.log(maxNumber);