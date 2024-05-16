// input: window.prompt,   output: html

// 1. 유저에게 밑변 높이 입력받은 후 정삼각형의 넓이 구하기
// const width = Number(window.prompt("밑변을 입력하시오: "));
// const height = Number(window.prompt("높이를 입력하시오: "));

// const tri = document.createElement("div");
// tri.innerText = `${width * height}`;

// document.body.appendChild(tri);

// 2. 한국 돈 -> 엔화 환전

const kR = Number(window.prompt("원화: "));
const JP = 0.114;

const change = document.createElement("div");
change.innerText = `${kR * JP}`;

document.body.appendChild(change);
