// let array = [4,6,3,7,9,8,2];
// let found = false;
// let choice = Number(prompt("Nhập vào số yêu thích của bạn:"));
// for(let i=0;i<array.length;i++){
//     if (choice===array[i]){
//         found = true;
//         break;
//     }    
// }
// if (found){
//     alert("Bingo!!!");
// }else
//     alert("Chúc bạn may mắn lần sau!!!");

    //cách 2
let array = [4,6,3,7,9,8,2];
let choice = Number(prompt("Nhập vào số yêu thích của bạn:"));
let kq =array.includes(choice);// Hàm array.includes là hàm kiểm tra xem có phần tử đó trong mảng không
if(kq){
    alert("Bingo!!!");
}else
    alert("Chúc bạn may mắn lần sau!!!");