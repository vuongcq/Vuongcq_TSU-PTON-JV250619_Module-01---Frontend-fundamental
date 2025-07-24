let listBook = [
  {
    id: 1,
    bookTitle: "Hạ Trắng",
    author: "Quang Dũng",
    yearOfpb: 2000,
  },
  {
    id: 2,
    bookTitle: "Gió Xuân",
    author: "Mạnh Hà",
    yearOfpb: 2010,
  },
  {
    id: 3,
    bookTitle: "Chiều Tím",
    author: "Ngọc Lan",
    yearOfpb: 2020,
  },
];
// ``
let running = true;
while(running){
  let choice = Number(
  prompt(`--- QUẢN LÝ SÁCH ---
    1. Thêm sách mới.
    2. Hiển thị danh sách sách.
    3. Tìm kiếm sách theo tên.
    4. Xóa sách theo ID
    5. Thoát chương trình.
    Nhập lựa chọn của bạn: `)
);

switch (choice) {
  case 1:
    let id = Number(prompt("Nhập ID của sách:"));
    let bookTitle = prompt("Nhập tên sách:");
    let author = prompt("Nhập tên tác giả:");
    let yearOfpb = Number(prompt("Năm xuất bản:"));

    let book = {
      id: id,
      bookTitle: bookTitle,
      author: author,
      yearOfpb: yearOfpb,
    };
    listBook.push(book);
    displayListbook();
    break;
  case 2:
    displayListbook();
    break;
  // case (3):
  //     let books = prompt("Nhập vào tên sách cần tìm kiếm: ");
  //     let index = listBook.findIndex (function(el,i){
  //         return el.bookTitle === books;
  //     })
  //     if (index === -1){
  //         console.log("Không tìm thấy sách.");
  //     } else
  //         displayListbook(books);

  case 3:
    let keyword = prompt("Nhập từ khóa tên sách cần tìm: ");
    let result = listBook.filter(function (el) {
      return el.bookTitle.toLowerCase().includes(keyword.toLowerCase());
    });

    if (result.length === 0) {
      console.log("Không tìm thấy sách nào chứa từ khóa '" + keyword + "'.");
    } else {
      displayListbookResults(result);
    }
    break;
  case 4:
    let deleteId = Number(prompt("Nhập vào ID cần xóa:"));
    let deleteIndex = listBook.findIndex(function(el,i){
      return el.id===deleteId;
    })
    if (deleteIndex=== -1){
      console.log("Không tìm thấy ID này!!!");
    } else {
      listBook.splice(deleteIndex,1);
      console.log(`Xóa thành công ID ${deleteId}`); //``
      displayListbookResults(listBook);
    }
    break;
  case 5:
    running =false;
    console.log("Đã thoát chương trình!")
    break;
  default:
    console.log("Phím bạn vừa nhập không đúng, mời nhập lại!");
    break;
}

}


// hàm hiển thị danh sách sách
function displayListbook() {
  console.log(`*********************`);
  console.log("Danh sách sách: ");
  for (book in listBook) {
    console.log("ID: ", listBook[book].id);
    console.log("Tên sách: ", listBook[book].bookTitle);
    console.log("Tác giả: ", listBook[book].author);
    console.log("Năm xuất bản: ", listBook[book].yearOfpb);
  }
}
//Hiển thị danh sách kết quả tìm kiếm
function displayListbookResults(listBook) {
  console.log(`*********************`);
  console.log("Danh sách sách: ");
  for (book in listBook) {
    console.log("ID: ", listBook[book].id);
    console.log("Tên sách: ", listBook[book].bookTitle);
    console.log("Tác giả: ", listBook[book].author);
    console.log("Năm xuất bản: ", listBook[book].yearOfpb);
  }
}
