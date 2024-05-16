//1. 색상 버튼 3개 (색상 누르면 변함)
//2. 파레트 상자 하나 만들기  100px
//3. -, + 버튼 만들기 ( + 버튼 누르면 1px 늘어남, - 누르면 감소)

//상자 -> 색상 버튼 -> 색상 -> 버튼 클릭 반응
//상자 -> -, + 버튼 -> 버튼 반응

const pal = document.createElement("div");

const btn1 = document.createElement("button");
const btn2 = document.createElement("button");
const btn3 = document.createElement("button");

const minus = document.createElement("button");
const plus = document.createElement("button");

pal.style.width = "100px";
pal.style.height = "100px";
pal.style.border = "1px solid";
pal.innerText = " ";

btn1.style.backgroundColor = "red";
btn2.style.backgroundColor = "skyblue";
btn3.style.backgroundColor = "green";

minus.innerText = "-";
plus.innerText = "+";

btn1.addEventListener("click", () => {
  pal.style.backgroundColor = "red";
});

btn2.addEventListener("click", () => {
  pal.style.backgroundColor = "skyblue";
});

btn3.addEventListener("click", () => {
  pal.style.backgroundColor = "green";
});

minus.addEventListener("click", () => {
  const len = parseInt(pal.style.width) - 1;
  const islen99 = len === 99;

  pal.style.width = islen99 ? "100px" : `${len}px`;
  pal.style.height = islen99 ? "100px" : `${len}px`;
});

plus.addEventListener("click", () => {
  const len = parseInt(pal.style.width) + 1;
  pal.style.width = `${len}px`;
  pal.style.height = `${len}px`;
});

document.body.appendChild(pal);

document.body.appendChild(btn1);
document.body.appendChild(btn2);
document.body.appendChild(btn3);

document.body.appendChild(minus);
document.body.appendChild(plus);
