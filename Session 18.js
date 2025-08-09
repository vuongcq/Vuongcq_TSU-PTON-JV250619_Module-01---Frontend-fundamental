// Bài1
let user = {
  name: "Nguyễn Văn A",
  age: 18,
  address: "Hà Nội, Việt Nam",
  Phone: 0989999999,
};
console.log(user.name);
console.log(user.age);
console.log(user.address);
console.log(user.Phone);

// Mở rộng chọn phím chức năng
let students = [];
let savedStudents = localStorage.getItem("students");
if (savedStudents) {
  students = JSON.parse(savedStudents);
} else {
  students = [];
}
let choose = true;
while (choose) {
  let num = Number(
    prompt(`Mời bạn nhập vào phím chức năng sau:
        1. Thêm mới học sinh
        2. In ra học sinh điểm cao nhất
        3. Thoát`)
  );
  switch (num) {
    case 1:
      //Thêm mới

      let newName = prompt("Nhập vào họ tên:");
      let newGender = prompt("Nhập vào giới tính:");
      let newAge = Number(prompt("Nhập vào tuổi:"));
      let newMark = Number(prompt("Nhập vào điểm:"));

      let student = {
        // id: students[students.length-1].id+1,
        id: students.length > 0 ? students[students.length - 1].id + 1 : 1,
        name: newName,
        gender: newGender,
        age: newAge,
        mark: newMark,
      };
      students.push(student);
      localStorage.setItem("students", JSON.stringify(students));
      for (let i = 0; i < students.length; i++) {
        console.log(`STT: ${students[i].id}`);
        console.log(`Tên: ${students[i].name}`);
        console.log(`Giới tính: ${students[i].gender}`);
        console.log(`Tuổi: ${students[i].age}`);
        console.log(`Điểm: ${students[i].mark}`);
        console.log(`---------------------------`);
      }
      break;

    case 2:
      // in ra học sinh điểm cao nhất
      let maxMark = 0;
      let maxIndex = 0;
      for (let i = 0; i < students.length; i++) {
        if (students[i].mark > maxMark) {
          maxMark = students[i].mark;
          maxIndex = i;
        }
      }
      console.log(`Thông tin học sinh có điểm cao nhất là`);
      console.log(`Tên: ${students[maxIndex].name}`);
      console.log(`Giới tính: ${students[maxIndex].gender}`);
      console.log(`Tuổi: ${students[maxIndex].age}`);
      console.log(`Điểm: ${students[maxIndex].mark}`);
      console.log(`---------------------------`);
      break;
    case 3:
      // thoát
      choose = false;
      break;
  }
}

