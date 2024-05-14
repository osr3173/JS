// // 기본 타입
// // 1.문자
// const favorite1 = window.prompt("당신이 좋아하는 커피는");
// const favorite2 = window.prompt("당신이 좋아하는 빵은");

// console.log(
//   `당신이 좋아하는 커피는 ${favorite1} 이고 당신이 좋아하는 빵은 ${favorite2} 이시군요`
// );

// const a = "커피";
// const b = "빵";
// const c = `라떼`; //backtick

// 1. 이름, 나이, 좋아하는 색  입력-> 종합적인 자기소개 (prompt 이용)
// const name = window.prompt(`당신의 이름은:`);
// const age = window.prompt(`당신의 나이는:`);
// const color = window.prompt(`당신의 최애색은:`);

// console.log(`제 이름은 ${name}, 나이는 ${age}, 좋아하는 색은${color}입니다.`);

// 2. 오늘의 날짜, 계획된 일정 입력 -> 오늘 날짜, 계획된 일정 출력

// const year = window.prompt("년도:");
// const mon = window.prompt("월:");
// const day = window.prompt("일:");
// const sch = window.prompt(`일정:`);

// console.log(
//   `오늘은 ${year}년 ${mon}월 ${day}일, 계획하신 일정은 ${sch}입니다.`
// );

//3. 버튼 만들기 ***************************************************************************
// const data = window.prompt("데이터");
// const btn = document.createElement("button");
// btn.innerText = `내용: ${data}`;
// document.body.appendChild(btn);

//유저에게 세번의 prompt로 헥사코드 색깔을 입력받고
//버튼 3개를 만들고 (text: 헥사코드, bg: 헥사코드)
//박스 하나 만들고(W;100, h:100, bg:선택된 버튼의 헥사코드, text:입력된 헥사코드: [])

// const c1 = window.prompt("색입력 :");
// const c2 = window.prompt("색입력 :");
// const c3 = window.prompt("색입력 :");

// const btn1 = document.createElement("button");
// const btn2 = document.createElement("button");
// const btn3 = document.createElement("button");

// const box = document.createElement("div");
// box.style.width = "100px";
// box.style.height = "100px";
// box.innerText = "X";

// btn1.style.backgroundColor = c1;
// btn2.style.backgroundColor = c2;
// btn3.style.backgroundColor = c3;

// btn1.innerText = c1;
// btn2.innerText = c2;
// btn3.innerText = c3;

// btn1.addEventListener("click", () => {
//   box.style.backgroundColor = c1;
//   box.innerText = `입력된 코드: ${c1}`;
// });

// btn2.addEventListener("click", () => {
//   box.style.backgroundColor = c2;
//   box.innerText = `입력된 코드: ${c2}`;
// });

// btn3.addEventListener("click", () => {
//   box.style.backgroundColor = c3;
//   box.innerText = `입력된 코드: ${c3}`;
// });

// document.body.appendChild(btn1);
// document.body.appendChild(btn2);
// document.body.appendChild(btn3);
// document.body.appendChild(box);

// btn1.addEventListener(() => {
//   box.style.backgroundColor = c1;
//   box.innerText = c1;
// });

// box.style.width = "100px";
// box.style.height = "100px";
// box.style.backgroundColor = c2;
// box.innerText = c2;

// btn2.addEventListener(() => {
//   box.style.backgroundColor = c2;
//   box.innerText = c2;
// });

// box.style.width = "100px";
// box.style.height = "100px";
// box.style.backgroundColor = c3;
// box.innerText = c3;

// btn3.addEventListener(() => {
//   box.style.backgroundColor = c3;
//   box.innerText = c3;
// });
