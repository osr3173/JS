// const input = document.querySelector(".input");
// const checkbtn = document.querySelector(".check");
// const msg = document.createElement("div");
// document.body.appendChild(msg);

// input 입력 후 확인 버튼을 눌렀을 때,
// 8글자 이하면 "글자수가 짧습니다"(빨간색)
// 아니면 "글자수가 충분합니다"(파란색)

// checkbtn.addEventListener("click", () => {
//   if (input.value.length <= 8) {
//     msg.innertext = "글자수가 짧습니다";
//     msg.style.color = "red";
//   } else {
//     msg.innerText = "글자수가 충분합니다.";
//     msg.style.color = "blue";
//   }
// });

// 8~20 글자 사이이고, 아니면          '8~20 글자 사이로 글자를 만들어 주세요!'
// 반드시 !, #, $ 중 하나라도 포함해야하고 아니면          "반드시 !,#,$이 포함되어야 함!"
// 글자 시작을 'IT' 로 하면          '반드시 IT로 시작해야 해요!'
// '올바르게 설정했습니다'[파랑]

// checkbtn.addEventListener("click", () => {
//   if (input.value.length >= 8 && input.value.length <= 20) {
//     if (input.includes("!", "#", "$") && input.slice(0, 2) == "IT") {
//       msg.innerText = "올바르게 설정 했습니다.";
//       msg.style.color = "blue";
//     }
//   } else {
// msg.innerText = "문자를 다시 설정하세요.";
//     msg.style.color = "red";
//   }
// });

// 답안

// const input = document.querySelector(".input");
// const checkbtn = document.querySelector(".check");
// const msg = documet.querySelector(".msg");
// document.body.appendChild(msg);

// checkbtn.addEventListener("click", () => {
//   const value = input.value; // 눌렀을 때, input value 가져오기
//   const isvalidlength = value.length >= 8 && value.length <= 20;
//   const isvalidspecialchar =
//     value.includes("!") || value.includes("#") || value.includes("$");
//   const isvalidstart = value.startswith("IT");
//   const isvalid = isvalidlength && isvalidspecialchar && isvalidstart;
// });

// if (isvalid) {
//   msg.innertext = "올바르게 문자를 설정했습니다.";
//   msg.style.color = "blue";
// } else if (isvalidlength != value.length) {
//   msg.innertext = "8~20 글자 사이로 글자를 만들어 주세요!";
//   msg.style.color = "red";
// } else if (isvalidspecialchar != value.includes) {
//   msg.innertext = "반드시 !,#,$이 포함되어야 함!";
//   msg.style.color = "red";
// } else if (isvalidstart != value.startswith) {
//   msg.innertext = "반드시 IT로 시작해야 해요!";
//   msg.style.color = "red";
// }

// //
// msg.style.color = "red";
// if (!isvalidlength) {
//   msg.innertext = "8~20 글자 사이로 글자를 만들어 주세요!";
// } else if (!isvalidspecialchar) {
//   msg.innertext = "반드시 !,#,$이 포함되어야 함!";
// } else if (!isvalidstart) {
//   msg.innertext = "반드시 IT로 시작해야 해요!";
// } else {
//   msg.innertext = "올바르게 문자를 설정했습니다.";
//   msg.style.color = "blue";
// }
