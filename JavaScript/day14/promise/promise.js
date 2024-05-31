// Date(), Array, Boolean,...

// 비동기 작업이 맞이할 미래의 완료 또는 실패와 그 결과 값을 나타내는 객체 ( Promise )
// ing, 성공, 실패
// pending(진행중), fullfilled(성공), rejected(실패)
// Promise의 성공, 실패 매개

// const a = new Promise((succeed, failed) => {
//   // 이런 구조로 활용
//   if (true) {
//     succeed();
//   } else {
//     failed();
//   }
// });
// console.log(a);

// setTimeout 지정시간 뒤에 console로 찍어줘
// const a = new Promise((succeed, failed) => {
//   setTimeout(() => {
//     succeed("happy js");
//   }, 3000);
// });

// a.then((x) => console.log(x));

// a 타입은 Promise, happy js 출력
// then :성공한다면~
// catch : 실패한다면~

const b = fetch("https://fakerapi.it/api/v1/credit_cards?_quantity=1");
b.then((x) => x.json()).then((x) => console.log(x));
