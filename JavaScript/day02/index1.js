// 데이터 타입 :기본 + 참조
//기본:String[문자], Number[숫자]

// const a = window.prompt("숫자 입력: ");

// //문자 -> 숫자 타입 바꾸기

// //1. Number
// const b = Number(a);
// console.log(b + 10);

// //2. parseInt(), parseFloat()
// const c = parseInt(a);
// console.log(c + 20);

// 문제 1

const n1 = Number(window.prompt("숫자 입력: "));
const n2 = Number(window.prompt("숫자 입력: "));

const answer = document.createElement("div");
answer.innerText = `합:${n1 + n2}   차:${n1 - n2}  곱:${n1 * n2}`;

document.body.appendChild(answer);

// 문제 2
const age = Number(window.prompt("나이 입력: "));
const year = document.createElement("div");
year.innerText = `${2025 - age}년생`;

// document.body.appendChild(year);

// //문제 3
const len = Number(window.prompt("한변의 길이: "));
const square = document.createElement("div");
square.innerText = `정사각형 넓이: ${len ** 2}`;

document.body.appendChild(square);
