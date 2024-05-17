// 데이터 타입: 기본[string,number,boolean,null,undefined] & 참조[array]
//Array
// const colors = ["red", "green", "yellow", "skyblue"];
// colors.push("black"); // push 배열에 추가해주세요
// colors.sort(); //sort 배열을 정렬해주세요

// colors.forEach((x) => {
//   const box = document.createElement("div");
//   box.style.width = "100px";
//   box.style.height = "100px";
//   box.style.backgroundColor = x;
//   document.body.appendChild(box);
// }); //한명씩 불러주세요

// divbox h:100, w:100, bg:x 화면에 나타내기

// const menu = ["aa", "latte", "mint", "vanila", "milktea"];

// menu.forEach((x) => {
//   console.log(x.toUpperCase());
// });

// const price = [2000, 3000, 5000, 3000, 4000, 6000];

// price.forEach((x) => {
//   if (x > 3000) {
//     console.log("비싸네요");
//   } else {
//     console.log("저렴하네요");
//   }
// });

//replace(a,b) [a를 b로]
//replaceAll(a,b)  [모든 a를 b로]
// const a = "hello".replace("l", "z");
// console.log(a);

//slice(a,b) [a,b-1]까지 문자 자르기

// wh:100 ,bg:blue, wh:200, bg:green
const option = ["100 blue", "200 green", "500 black", "400 red"];

option.forEach((x) => {
  const a = x.split(" ");
  console.log(a);
  const len = a[0];
  const col = a[1];

  const boxes = document.createElement("div");
  console.log(`${len}px`);
  boxes.style.width = `${len}px`;
  boxes.style.height = `${len}px`;
  boxes.style.backgroundColor = col;
  document.body.appendChild(boxes);
});
