let user = [
  {
    id: 1,
    email: "abc@gmail.com",
    password: "123456",
  },

  {
    id: 2,
    email: "def@gmail.com",
    password:"123456",
  }
]
function checkForm() {
  let newEmail = document.getElementById("email").value;
  let newPassword = document.getElementById("password").value;
  let confirmPass = document.getElementById("confirmpassword").value;

  if (isEmpty(newEmail)) {
    alert("Email không được để trống!");
  } else if (isEmpty(newPassword)) {
    alert("Password không được để trống!");
  } else if (isEmpty(confirmPass)) {
    alert("Nhập lại Password không được để trống!");
  } else if (confirmPass !== newPassword) {
    alert("Nhập lại mật khẩu chưa khớp");
  } else if(checkEmail()===true){
    alert("Email bị trùng");
  } else {
    saveInstorage();
    alert("Đăng ký thành công!");
  }

}

// Hàm kiểm tra trống hay không
function isEmpty(value) {
  return value.trim() === "";
}
// Kiểm tra sự tồn tại của email đăng ký
// Hàm check email
function checkEmail(){
  let newEmail = document.getElementById("email").value;
  for (let i=0; i<user.length; i++){
    if (user[i].email===newEmail){
      return true;
    }
  } 
    return false;
}
// Lưu tài khoản vừa tạo thành công vào localStorage
function saveInstorage(){
  let newEmail = document.getElementById("email").value;
  let newPassword = document.getElementById("password").value;
  let newUser = {
    id: user[user.length-1].id +1,
    email:newEmail,
    password:newPassword,
  };
  user.push(newUser);
  localStorage.setItem("users", JSON.stringify(user));
}
