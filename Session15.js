let input = prompt("Nhập vào mảng số nguyên cách nhau bởi dấu phẩy:");
let array = input.split(",");
console.log(array); // in ra mảng
maxNum();
greaterThan10();
aVe();
descending();



// Hàm tìm phần tử lớn nhất
function maxNum() {
  let max = 0;
  let maxNumindex=0;
  
  for (let i = 0; i < array.length; i++) {
    let num = Number(array[i]);
    let numIndex = i;  
    if (num > max) {
      max = num;
      maxNumindex = numIndex;
      
    }
  }
  console.log(`Phần tử lớn nhất là ${max}`);
  console.log(`Vị trí của nó ở vị trí số ${maxNumindex+1}`);
}

// hàm tìm số nguyên lớn hơn 10
function greaterThan10(){
    let dem=0;
    for(let i=0;i<array.length;i++){
        let num = Number(array[i]);
        if(num>=10){
            dem++;
        }
    }
    console.log(`Số phần tử lớn hơn 10 là: ${dem}`);
}

// giá trị trung bình của mảng
function aVe(){
    let sum=0;
    let index=0;
    for (let i=0;i<array.length;i++){
        let num = +array[i];
        sum=sum+num;
        index++;
    }
    let ave=sum/index;
    console.log(`Giá trị trung bình của mảng là ${ave}`);
}

// sắp xếp theo thứ tự giảm dần
function descending(){
    let num=0;
    for(let i=0;i<array.length;i++){
        for (let j=i+1;j<array.length;j++){
            if (Number(array[i])<Number(array[j])){
                num= array[i];
                array[i]=array[j];
                array[j]=num;
            }
        }
    }
    console.log(`Mảng được sắp xếp lại theo thứ tự giảm dần là: ${array}`);
}