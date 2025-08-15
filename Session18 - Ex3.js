function addTodo() {
  let todoTable = document.getElementById("todoTable");
  let input = document.getElementById("input");
  let value = input.value.trim();
  if (value) {
    let row = todoTable.insertRow();
    let cell = row.insertCell();
    cell.textContent = value;
    cell.onclick = function () {
      cell.classList.toggle("completed");
    };
    input.value = "";
  } else {
    alert("Vui lòng nhập công việc!");
  }
}

// gán sự kiện cho ô có sẵn
window.onload = function(){
    let todoTable = document.getElementById("todoTable");
    for (let i=0;i<todoTable.rows.length;i++){
        let cell = todoTable.rows[i].cells[0]; // ô đầu tiên
        cell.onclick = function() {
            cell.classList.toggle("completed");
        };
    }
};
  
