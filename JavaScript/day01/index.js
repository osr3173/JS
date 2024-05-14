// console.log("자바스크립트! 시작!");

// //미니퀴즈

// console.log("자바스크립트 공부 다짐");
// console.log("오늘 점심 메뉴 : 돈까스");

// window.alert("아무거나 씀");
// window.confirm("아무거나 씀");
// window.prompt("왜 안나옴?");

// window.open("https://www.naver.com/");

// const a = document.createElement("div");
// a.innerText = "ㅎㅇ";

// a.addEventListener("mouseover", () => {
//   window.alert("메가 커피 b");
// });

// document.body.appendChild(a);

//화면에 버튼 태그를 만들고
//안의 내용은 석가탄신일
//클릭'click'을 하면 alert으로 '부처님 오심'

// const x = document.createElement("button");
// x.innerText = "석가탄신일";

// x.addEventListener("click", () => {
//   window.alert("부처님 오신 날");
// });

// document.body.appendChild(x);

// 버튼 태그 만들고, 안에 아메리카노
// 클릭을 하면, 아메리카노에서 라떼로

// const x =document.createElement("button");
// x.innerText='아메리카노';

// x.addEventListener("click" , () => {
//     x.innerText="라떼";
// });

// document.body.appendChild(x);

// const b = window.prompt("무엇이든 물어보살");
// console.log(b);

// 첫번째 prompt 버튼 클릭 전 이름
// 두번째 prompt 버튼 클릭 후 이름
// 클릭전 이름 버튼 만들고, 클릭하면 두번째 클릭 이름으로 바꿈

// const x = window.prompt("1");

// const y = window.prompt("2");

// const a = document.createElement("button");
// a.innerText = x;

// a.addEventListener("click", () => {
//   a.innerText = y;
// });

// document.body.appendChild(a);

// 버튼 태그, 배경색 : 하늘색 ,폰트 사이즈 20px
// 클릭을 하면, 빨간색으로 바뀜

// const x = document.createElement("button");
// x.innerText = "버튼";
// x.style.background = "skyblue";
// x.style.fontSize = "20px";

// x.addEventListener("click", () => {
//   x.style.background = "red";
// });

// document.body.appendChild(x);

// const x = document.createElement("div");
// x.innerHTML = "<button>코리아 아이티</button>";
// document.body.appendChild(x);

// 버튼이 5개 있음, 빨~파
// 모두 CSS를 배경색은 각각
// div 태그 w:100, h:100 border:1px solid black
// 위의 5개 버튼 중 하나를 누르면 div의 배경색이 해당 색으로 바뀜

const r = document.createElement("div");
r.innerText = "Div";

const a = document.createElement("button");
a.innerText = "버튼 ";
a.style.width = "100px";
a.style.height = "100px";
a.style.border = "1px solid black";
a.style.backgroundColor = "red";

a.addEventListener("click", () => {
  r.style.backgroundColor = "red";
});

const b = document.createElement("button");
b.innerText = "버튼";
b.style.width = "100px";
b.style.height = "100px";
b.style.border = "1px solid black";
b.style.backgroundColor = "orange";

b.addEventListener("click", () => {
  r.style.backgroundColor = "orange";
});

const c = document.createElement("button");
c.innerText = "버튼";
c.style.width = "100px";
c.style.height = "100px";
c.style.border = "1px solid black";
c.style.backgroundColor = "yellow";

c.addEventListener("click", () => {
  r.style.backgroundColor = "yellow";
});

const d = document.createElement("button");
d.innerText = "버튼";
d.style.width = "100px";
d.style.height = "100px";
d.style.border = "1px solid black";
d.style.backgroundColor = "green";

d.addEventListener("click", () => {
  r.style.backgroundColor = "green";
});

const e = document.createElement("button");
e.innerText = "버튼";
e.style.width = "100px";
e.style.height = "100px";
e.style.border = "1px solid black";
e.style.backgroundColor = "blue";

e.addEventListener("click", () => {
  r.style.backgroundColor = "blue";
});

document.body.appendChild(a);
document.body.appendChild(b);
document.body.appendChild(c);
document.body.appendChild(d);
document.body.appendChild(e);
document.body.appendChild(r);
