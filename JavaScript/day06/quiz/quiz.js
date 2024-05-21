// 색깔 5개
// 사이즈 5개
// 테두리 3개

const box = document.querySelector(".box");
const colorbtn = document.querySelector(".colorbtn");
const sizebtn = document.querySelector(".sizebtn");
const borderbtn = document.querySelector(".borderbtn");

const color = ["red", "orange", "yellow", "green", "blue"];
const size = ["size1", "size2", "size3", "size4", "size5"];
const bordersize = ["border1", "border2", "border3"];

colorbtn.addEventListener("click", () => {
  colorbtn.innerText = colorbtn.innerText == "red" ?  : color[0];
  box.classList.toggle("red");
});

