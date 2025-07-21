let array = [];
  for (let i=0;i<10;i++){
  array.splice(0,0,Math.floor(Math.random() * 100));
} 
console.log(array);
console.log(array.length);


// bài toán khác
// Không biết mảng có sẵn có bao nhiêu phần tử
// Nếu mảng có sẵn <10 phần tử thì thêm cho đủ 10;
// nếu không thì in ra 10 phần tử đó 

// let array = [1,2];
// console.log (array.length);
// // while (array.length < 10){
    
// //         array.push(Math.floor(Math.random()*100));
    
// // }


// for( let i=0; true; i++){
//     if(array.length<10){
//         array.push(Math.floor(Math.random()*100));
//     }
//     else 
//         break;
// }
//     console.log(array);




