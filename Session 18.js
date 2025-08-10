// // EX1
// let user = {
//   name: "Nguyễn Văn A",
//   age: 18,
//   address: "Hà Nội, Việt Nam",
//   Phone: 0989999999,
// };
// console.log(user.name);
// console.log(user.age);
// console.log(user.address);
// console.log(user.Phone);
// console.log("==============================");

// // Mở rộng chọn phím chức năng
// let students = [];
// let savedStudents = localStorage.getItem("students");
// if (savedStudents) {
//   students = JSON.parse(savedStudents);
// } else {
//   students = [];
// }
// let choose = true;
// while (choose) {
//   let num = Number(
//     prompt(`Mời bạn nhập vào phím chức năng sau:
//         1. Thêm mới học sinh
//         2. In ra học sinh điểm cao nhất
//         3. In ra danh sách học sinh
//         4. Thoát`)
//   );
//   switch (num) {
//     case 1:
//       //Thêm mới

//       let newName = prompt("Nhập vào họ tên:");
//       let newGender = prompt("Nhập vào giới tính:");
//       let newAge = Number(prompt("Nhập vào tuổi:"));
//       let newMark = Number(prompt("Nhập vào điểm:"));

//       let student = {
//         // id: students[students.length-1].id+1,
//         id: students.length > 0 ? students[students.length - 1].id + 1 : 1,
//         name: newName,
//         gender: newGender,
//         age: newAge,
//         mark: newMark,
//       };
//       students.push(student);
//       localStorage.setItem("students", JSON.stringify(students));
//       for (let i = 0; i < students.length; i++) {
//         console.log(`STT: ${students[i].id}`);
//         console.log(`Tên: ${students[i].name}`);
//         console.log(`Giới tính: ${students[i].gender}`);
//         console.log(`Tuổi: ${students[i].age}`);
//         console.log(`Điểm: ${students[i].mark}`);
//         console.log(`---------------------------`);
//       }
//       break;

//     case 2:
//       // in ra học sinh điểm cao nhất
//       let maxMark = 0;
//       let maxIndex = 0;
//       for (let i = 0; i < students.length; i++) {
//         if (students[i].mark > maxMark) {
//           maxMark = students[i].mark;
//           maxIndex = i;
//         }
//       }
//       console.log(`Thông tin học sinh có điểm cao nhất là`);
//       console.log(`Tên: ${students[maxIndex].name}`);
//       console.log(`Giới tính: ${students[maxIndex].gender}`);
//       console.log(`Tuổi: ${students[maxIndex].age}`);
//       console.log(`Điểm: ${students[maxIndex].mark}`);
//       console.log(`---------------------------`);
//       break;
//     case 3:
//         listStudents();
//         break;
//     case 4:
//       // thoát
//       choose = false;
//       break;
//   }
// }

// function listStudents(){
//     for (let i = 0; i < students.length; i++) {
//         console.log(`STT: ${students[i].id}`);
//         console.log(`Tên: ${students[i].name}`);
//         console.log(`Giới tính: ${students[i].gender}`);
//         console.log(`Tuổi: ${students[i].age}`);
//         console.log(`Điểm: ${students[i].mark}`);
//         console.log(`---------------------------`);
//       }

// }

//Ex 2 ``

// let products = [
//     { id:1, name: `Milk`, count: 100 },
//     { id:2, name: `Orange`, count: 100 },
//     { id:3, name: `Butter`, count: 100 },
// ];
// // Thêm đối tượng
// let newName = prompt(`Nhập vào tên đối tượng:`);
// let newCount = prompt(`Nhập vào số lượng đối tượng:`);
// let newObject = {
//     id: products[products.length-1].id+1,
//     name: newName,
//     count: newCount,
// };
// products.push(newObject);
// listProducts();
// // xóa đối tượng có id là 2
// let index = products.findIndex(item => item.id === 2);
// if (index !== -1) {
//     products.splice(index, 1);
// }
// console.log(`-----------------`);
// console.log(`Câu 2: Xóa đối tượng có ID:2`);

// listProducts();

// // Truy vấn đến đối tượng có id là 3, sau đó cập nhật lại giá trị count =0;
// let inDex1 = products.findIndex(item =>item.id ===3);
// if (inDex1 !==-1){
//     products[inDex1].count=0;
// }
// console.log(`-----------------`);
// console.log(`Câu 3: Thay đổi count =0 của đối tượng có ID:3`);
// listProducts();

// // Kiểm tra name xem có Butter không nếu có thì in ra, không có thì in ra
// // dòng Không có dữ liệu bạn tìm kiếm
// let searchName = products.find(item => item.name==="Butter");
// if (searchName){
//     console.log(`Câu 4: Kiểm tra đối tượng Butter`);
//     console.log(searchName.id);
//     console.log(searchName.name);
//     console.log(searchName.count);
// } else console.log(`Không có dữ liệu bạn tìm kiếm`);

// //Hàm in ra mảng
// function  listProducts(){
//     for(let i=0;i<products.length;i++){
//         console.log(products[i].id);
//         console.log(products[i].name);
//         console.log(products[i].count);
//         console.log(`-----------------`);

//     }
// }

//Ex2- Bài2

let data = [
  {
    id: 1,
    name: "HTML",
    status: "false",
  },
  {
    id: 2,
    name: "CSS",
    status: "false",
  },
  {
    id: 3,
    name: "Basic of javascript",
    status: "false",
  },
  {
    id: 4,
    name: "Node package Manager",
    status: "false",
  },
  {
    id: 5,
    name: "Git",
    status: "false",
  },
];

//Cho người dùng nhập vào 5 chữ cái C/R/U/D/E
let loop = true;
while (loop) {
  let input = prompt(`Mời nhập vào trạng thái bạn muốn theo chữ cái dưới đây:
        C: Nhập vào khóa học mới và trạng thái hoàn thành.
        R: In ra toàn bộ khóa học.
        U: Update khóa học.
        D: Xóa khóa học.
        E: Thoát`);
  if (input === "C") {
    // Nhập khóa học mới và trạng thái
    let newName = prompt("Nhập vào tên khóa học muốn thêm:");
    let newStatus = prompt(
      "Nhập vào trạng thái khóa học muốn thêm: (true/false)"
    );
    let newObject = {
      id: data[data.length - 1].id + 1,
      name: newName,
      status: newStatus,
    };
    data.push(newObject);
    listData();
    console.log(`----------------`);
  } else if (input === "R") {
    //In ra khóa học
    listData();
    console.log(`----------------`);
  } else if (input === "U") {
    //Update khóa học

    let index = Number(prompt(`Nhập vào ID khóa học bạn muốn cập nhật:`));
    let pos = data.findIndex((item) => item.id === index);

    if (pos !== -1) {
      let newName = prompt("Nhập tên khóa học muốn cập nhật:");
      let newStatus = prompt("Nhập trạng thái khóa học muốn cập nhật:");
      data[pos].name = newName;
      data[pos].status = newStatus;
      console.log("Cập nhật thành công!");
      listData();
      console.log(`----------------`);
    } else {
      console.log("Không tìm thấy thông tin khóa học của ID này!");
      console.log(`----------------`);
    }
  } else if (input === "D") {
    //xóa khóa học
    let indexDel = Number(prompt(`Nhập vào ID khóa học bạn muốn xóa:`));
    let posDel = data.findIndex((item) => item.id === indexDel);
    if (posDel !== -1) {
      data.splice(posDel, 1);
      console.log("Xóa thành công!");
      listData();
      console.log(`----------------`);
    } else {
      console.log(" Không tìm thấy thông tin khóa học của ID này!");
      console.log(`----------------`);
    }
  } else if (input === "E") {
    //Thoát
    console.log("Cảm ơn bạn đã đến với Rikkei Academy!");
    loop = false;
  } else {
    console.log(`Phím bạn nhập chưa đúng, mời nhập lại!`);
    console.log(`----------------`);
  }
}

// hàm in ra
function listData() {
  for (let i = 0; i < data.length; i++) {
    console.log(`${data[i].id}. ${data[i].name}`);
    console.log(`Complete: ${data[i].status}`);
  }
}
