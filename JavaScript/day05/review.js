// if / switch

// 1. if

// const isOverWight = true;
// if (isOverWight == true) {
//   console.log("과체중");
// } else {
//   console.log("정상");
// }

// // 2. switch

// const user = "관리자";

// switch (user) {
//   case "관리자":
//     console.log("관리자 로그인");
//     break;
//   case "편집자":
//     console.log("편집자 로그인");
//     break;
//   case "일반유저":
//     console.log("일반 유저 로그인");
//     break;
// }

const arr = ["아메리카노", "라떼", "민트", "바닐라"];

arr.forEach((v, i) => {
  if (i % 2 == 0) console.log(`${i}. ${v}`);
});
