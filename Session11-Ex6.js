let a = Number(prompt("Mời bạn nhập vào số a:"));
let b = Number(prompt("Mời bạn nhập vào số b:"));
let pheptinh = prompt("Mời nhập vào phép tình bạn cần tính ( + , - , x, :):")
switch(pheptinh){
    case ("+"):
        alert (`Kết quả của pháp tính trên: a+b = ${a+b}`);
        break;
    case ("-"):
        alert (`PKết quả của pháp tính trên: a-b = ${a-b}`);
        break;
    case ("x"):
        alert (`Kết quả của pháp tính trên: axb = ${a*b}`);
        break;
    case (":"):
        alert (`Kết quả của pháp tính trên: a:b = ${a/b}`);
        break;
}