const fruits = ["strawberry", "orange", "apple", "banana", "melon", "durian"];

// 1. a가 포함되어 있으면 대문자화 시키고 , 이외에는 이모티콘(win + .) 출력
// fruits.forEach((v) => {
//   if (v.includes("a")) {
//     v.toUpperCase();
//     console.log(v);
//   } else {
//     console.log("😢");
//   }
// });

// 답안
// fruits.forEach((v) => {
//   console.log(v.includes("a") ? v.toUpperCase() : "😢");
// });

//----------------------------------------------------------------------------------------
// 2. b가 포함되어 있으면 b 기준으로 단어를 쪼개서 배열화 하기, 이외에는 이모티콘(win + .) 출력
// fruits.forEach((v) => {
//   if (v.includes("b")) {
//     v.split("b");
//     console.log(v);
//   } else {
//     console.log("😢");
//   }
// });

// //답안
// fruits.forEach((v) => {
//   console.log(v.includes("b") ? v.split("b") : "😢");
// });

//----------------------------------------------------------------------------------------
// 3. n이 포함되어 있는 단어들을 문자열로 합치기
// fruits.forEach((v) => {
//   if (v.includes("n")) {
//     v.concat(v);
//     console.log(v);
//   } else {
//   }
// });

//답안
// let a = "";
// fruits.forEach((v) => {
//   if (v.includes("n")) {
//     a += v;
//   }
// });
// console.log(a);

//----------------------------------------------------------------------------------------
// 4. 문자의 길이가 6글자 이상이면 알파벳 a를 k로 바꿔서 출력하기, 이외에는 대문자화

// 답안
// fruits.forEach((v) => {
//   console.log(v.length >= 6 ? v.replace("a", "k") : v.toUpperCase());
// });
