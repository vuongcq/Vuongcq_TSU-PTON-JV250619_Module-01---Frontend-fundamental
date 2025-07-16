let a = Number(prompt("Mời bạn nhập vào số a:"));
let b = Number(prompt("Mời bạn nhập vào số b:"));
let pheptinh = prompt("Mời nhập vào phép tình bạn cần tính ( + , - , x, :):")
switch(pheptinh){
    case ("+"):
        console.log(`Phếp cộng có kết quả là: ${a+b}`);
        break;
    case ("-"):
        console.log(`Phếp trừ có kết quả là: ${a-b}`);
        break;
    case ("x"):
        console.log(`Phếp nhân có kết quả là: ${a*b}`);
        break;
    case (":"):
        console.log(`Phếp chia có kết quả là: ${a/b}`);
        break;
}