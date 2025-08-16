
processConfirm();


function processConfirm() {
  let answer = confirm("Bạn có muốn chơi cờ không?"); // confirm trả về true/false
  let result="";
  if (answer) {
    result = "Excellent. We'll play a nice game of chess.";
  } else {
    result = "Maybe later then.";
  }
  console.log(result);
}


const arr2 = [7,12,6,9,20,56,89];
minNumber();
function minNumber(){
    let min=arr2[0];
for (let i=0;i<arr2.length;i++){
    
    let num = +arr2[i];
    if(num<min){
        min=num;
    }
}
console.log(min);
}
