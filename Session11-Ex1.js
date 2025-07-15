// alert("Chương trình tính xem năm nhập vào có phải là năm nhuận không!");
let namNhuan = Number(prompt("Nhập vào năm:"));
if ( (namNhuan % 4 === 0 && namNhuan % 100 !==0) || (namNhuan % 100 ===0 && namNhuan % 400 === 0)){
    alert ("Năm " + namNhuan+ " là năm nhuận!"); //   alert(`${namNhuan} là năm nhuận`);
}
else 
    alert("Năm " + namNhuan+ " không phải là năm nhuận!");
