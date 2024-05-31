// 동기 프로그래밍
// console.log(1);
// console.log(3);
// console.log(4);

// // 비동기 프로그래밍[데이터 가져오기,지도위치 가져오기, 시간초 재기]
// setTimeout(() => {}, 1000); //1000 = 1초

// setInterval(() => {
//   console.log("오늘은 목요일");
// });

// // 0 1 2 3 4 5 6 7 8 9

// setInterval(() => {
//   const count = document.querySelector(".count");
//   count.innerText = Number(count.innerText) + 1;
// }, 1000);

// // 1. 지금 년월일 요일 html에 나타내기

// const today = new Date();
// const year = today.getFullYear();
// const month = today.getMonth() + 1;
// const day = today.getDay();

// const weekLabel = Array(
//   "일요일",
//   "월요일",
//   "화요일",
//   "수요일",
//   "목요일",
//   "금요일",
//   "토요일"
// );
// const weekday = weekLabel[day];

// const date = year + "년 " + month + "월 " + day + "일 " + weekday;
// console.log(date);

// 강사님 코드
setInterval(() => {
  const dateE1 = document.querySelector(".date_el");
  const date = new Date();
  const koreaDay = {
    1: "월요일",
    2: "화요일",
    3: "수요일",
    4: "목요일",
    5: "금요일",
    6: "토요일",
    7: "일요일",
  };

  dateE1.innerText = `${date.toLocaleString()} ${koreaDay[date.getDay()]}`;
}, 1000);
