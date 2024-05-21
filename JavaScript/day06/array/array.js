// 데이터 타입: 기본 +참조
// 기본 : number, string, null, undefined, boolean
// 참조 : array

// str= string() or " "  or '' (문자화)

// number= Number() or 1231231 (숫자화)

// boolean= Boolean() or true or ! (불린화)

// Array= Array() or []  array (배열화)

// 인덱스
// fruit[0]; //apple
// fruit[1]; //banana

// // 추가, 갱신
// fruit.push("grape"); // 추가
// fruit[0] = "mango"; // 갱신

// // 삭제
// fruit.pop(); //  맨뒤 삭제
// delete fruit[1]; //banana 삭제

//  가공하는 기능
// 1. 변형 - push, pop, reverse, shift[맨앞 자르기], sort
// 2. 접근자 - indexof[몇번째인지], slice[자르고 새로운 배열로 주기]
// 3. 반복[(v)=>{v}] - forEach, map

// 요소 바꾸기
// const newArr = num.map((v) => return v + 10);
// console.log(newArr);

// const minus = num.map((v) => return v - 100);
// console.log(minus);

// const square = num.map((v) => return v ** 2;);
// console.log(square);

// // 홀수 = 제곱 ,짝수 = 더하기 100
// const numeric = num.map((v) => {
//   if (v % 2 == 1) {
//     return v ** 2;
//   } else {
//     return v + 100;
//   }
// });
// console.log(numeric);

// 다른 방법
// const numeric = num.map((v) => return v%2 ==1 ? v**2 :v+100);
//   console.log(numeric);

// const isin = fruit.map((v) => return v.includes("a") ? v.toUpperCase() : "icecream");
// console.log(isin);

// +) 명령어 한줄이면 이런 형식으로 축약가능
num.map((v) => v + 100);

// filter
const num = [3, 7, 2, 91, 309, 23, 124];

// const num1Arr = num.filter((v) => return v > 10);
// console.log(num1Arr);

// const num2 = num.filter((v) => return v % 2 == 0;
// });
// console.log(num2);

const fruit = [
  "apple",
  "banana",
  "orange",
  "kiwi",
  "mango",
  "durian",
  "strawberry",
  "melon",
  "watermelon",
];

// 길이가 6글자

// const len = fruit.filter((v) => return v.length == 6);
// console.log(len);

// 알파벳 i가 들어가 있으면 제거, 제거 후 문자 단어의 문자의 길이로 치환

// const change = fruit.filter((v) => return v.replace("i", ""));

// const len = change.map((v) => return length(v));
// console.log(len);

// 답안

// 메소드 체이닝
// const change = fruit.filter((v) => return !v.replace("i")).map((v) => return length(v));

// every && some

const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// every : 모두 인지
// some : 하나라도 있는지

// const some1 = arr3.some((v) => {
//   return v > 10;
// });
// // console.log(`every1:${every1}`);
// console.log(`some1:${some1}`);
