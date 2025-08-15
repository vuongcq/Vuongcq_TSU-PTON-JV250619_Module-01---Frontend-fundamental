function addTodo() {
  let todoTable = document.getElementById("todoTable");
  let input = document.getElementById("input");
  let value = input.value.trim();
  if (value) {
    let row = todoTable.insertRow();
    let cell = row.insertCell();
    cell.textContent = value;
    // Gán sự kiện click, nút sửa/xóa cho ô mới
    addCellEvents(cell, row);
    input.value = "";
  } else {
    alert("Vui lòng nhập công việc!");
  }
}

// gán sự kiện cho ô có sẵn
window.onload = function () {
  let todoTable = document.getElementById("todoTable");
  for (let i = 0; i < todoTable.rows.length; i++) {
    let row = todoTable.rows[i]; // row hiện tại
    let cell = row.cells[0]; // ô đầu tiên
    addCellEvents(cell, row); // gán sự kiện click + nút Sửa/Xóa
  }
};

// Hàm thêm sự kiện click cho ô
function addCellEvents(cell, row) {
  // Click để đánh dấu hoàn thành/bỏ hoàn thành
  cell.onclick = function (e) {
    // Ngăn chặn click vào nút Sửa/Xóa cũng kích hoạt toggle
    if (e.target.tagName !== "BUTTON") {
      cell.classList.toggle("completed");
    }
  };

  // Tạo nút Sửa
  let editBtn = document.createElement("button");
  editBtn.textContent = "Sửa";
  editBtn.className = "actions-btn";
  editBtn.onclick = function () {
    let newValue = prompt("Nhập nội dung mới:", cell.textContent);
    if (newValue !== null && newValue.trim() !== "") {
      cell.firstChild.textContent = newValue.trim();
    }
  };

  // Tạo nút Xóa
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Xóa";
  deleteBtn.className = "actions-btn";
  deleteBtn.onclick = function () {
    row.remove();
  };

  cell.appendChild(editBtn);
  cell.appendChild(deleteBtn);
}
