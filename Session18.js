//Bài1
let text = document.getElementById("text");
let hide = document.getElementById("hide");
let show = document.getElementById("show");
hide.addEventListener("click", function(){
    text.style.display = "none";
});
show.addEventListener("click", function(){
    text.style.display = "block";// hiện text ra
});

//Bài2
// let black = document.getElementById("bai2");
// black.style.color = "white";
// black.style.backgroundColor = "black";

// let white = document.getElementById("bai2");
// black.style.color = "black";
// black.style.backgroundColor = "white";

// function myFunction() {
//    var element = document.getElementById("black");
//    element.classList.toggle("white");
// }
let btnToggle = document.querySelector('.btnToggle');
btnToggle.onclick = function () {
  document.body.classList.toggle('dark-mode');
};