let listStd = JSON.parse(localStorage.getItem('listStd')) || [
  {
    name: "A",
    age: 18,
    id: 1,
  },
  {
    name: "B",
    age: 98,
    id: 2,
  },
  {
    name: "C",
    age: 48,
    id: 3,
  },
];
// Chương trình quản lý sinh viên
while (true) {
let choice = prompt(`Chương trình quản lý sinh viên!
Mời nhập vào các nút chức năng tương ứng:
    C: Thêm sinh viên mới.
    R: Hiển thị danh sách sinh viên.
    D: Xóa sinh viên theo ID.
    E: Thoát`);

  if (choice === "C") {
    //Nhập sinh viên mới ``
    let name = prompt(`Nhập tên sinh viên: `);
    let age = Number(prompt(`Nhập tuổi cho bạn ${name}: `));
    let id = Number(prompt(`Nhập ID cho bạn ${name}: `));

    let std = {
      name: name,
      age: age,
      id: id,
    };
    listStd.push(std);
    localStorage.setItem('listStd', JSON.stringify(listStd));
    viewListstd();
  } else if (choice === "R") {
    // hiển thị danh sách sinh viên
    viewListstd();
  } else if (choice === "D") {
    // xóa sinh viên
    // Tìm sinh viên đó theo id, nếu có thì xóa, k thì báo lỗi
    let id = Number(prompt("Nhập vào ID sinh viên muốn xóa:"));
    let index = listStd.findIndex(function (el, i) {
      return el.id === id;
    });

    if (index === -1) {
      console.log("Không có sinh viên này!");
    } else listStd.splice(index, 1);
    localStorage.setItem('listStd', JSON.stringify(listStd));
    console.log(`Đã xóa sinh viên với ID: ${id}`);
    viewListstd();
  } else if(choice ==="E"){
    break;
  } else 
    console.log("Nút chức năng bạn nhập chưa đúng!!!");
}

function viewListstd() {
  console.log(`*********************`);
  console.log(`Danh sách sinh viên:`);
  for (let std in listStd) {
    console.log("Họ và tên: ", listStd[std].name);
    console.log("Tuổi: ", listStd[std].age);
    console.log("ID: ", listStd[std].id);
    console.log("---------- ");
  }
}
