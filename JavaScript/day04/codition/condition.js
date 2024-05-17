// if 조건문
// if (조건식)
// else

// const age = Number(window.prompt("몇살?: "));

// if (age > 19) {
//   console.log("성인");
// } else {
//   console.log("미성년자");
// }

// console.log("프로그램 끝");

// 프롬프트 2개 숫자 입력
//큰수 콘솔로 출력하기

// const num1 = Number(window.prompt("숫자를 입력하시오: "));
// const num2 = Number(window.prompt("숫자를 입력하시오: "));

// if (num1 > num2) {
//   console.log(num1);
// } else {
//   console.log(num2);
// }

// const age = 15;
// if (age > 19) {
//   console.log("성인");
// } else if (age <= 19 && age > 16) {
//   console.log("고딩");
// } else if (age <= 16 && age > 13) {
//   console.log("중딩");
// } else {
//   console.log("초딩");
// }

// 1. 정수 하나 입력, 양,음,0 판별
// const num = window.prompt("숫자 입력: ");
// if (num > 0) {
//   console.log("양수");
// } else if (num < 0) {
//   console.log("음수");
// } else {
//   console.log(0);
// }

// // 2. 수학 점수 입력,   A:90 ,B:80, C:70, 나머지 D

// const score = window.prompt("점수 입력: ");

// if (score > 89) {
//   console.log("A");
// } else if (score < 90 && score > 79) {
//   console.log("B");
// } else if (score < 80 && score > 69) {
//   console.log("C");
// } else {
//   console.log("D");
// }

// 3. 홀짝 판별
// num % 2===1 홀수
// num % 2===0 짝수

//숫자 1개 입력, 양의 홀짝, 음의 홀짝 판별
// *양음 판별후  홀짝 판별

// const num = window.prompt("숫자를 입력: ");
// // if (num >= 0) {
// //   if (Number(num) % 2 === 1) {
// //     console.log("양의 홀수");
// //   } else {
// //     console.log("양의 짝수");
// //   }
// // } else {
// //   if (Number(num) % 2 === 1) {
// //     console.log("음의 홀수");
// //   } else {
// //     console.log("음의 짝수");
// //   }
// // }

// const Positive = num > 0;
// const Negative = num < 0;

// const Odd = num * 2 === 1;
// const Even = num * 2 === 0;

// if (Positive && Odd) {
//   console.log("양의 홀수");
// } else if (Positive && Even) {
//   console.log("양의 짝수");
// } else if (Negative && Odd) {
//   console.log("음의 홀수");
// } else if (Negative && Even) {
//   console.log("음의 짝수");
// } else {
//   console.log("0");
// }

// const age = 10;
// if (age > 7) {
//   if (age > 13) {
//     console.log("청소년");
//   }
// } else {
//   console.log("유소년");
// }

//switch
const x = "봄";
switch (season) {
  case "봄": {
    console.log("날이 좋아요");
    break;
  }
  case "여름": {
    console.log("날이 더워요");
    break;
  }
  case "가을": {
    console.log("날이 쌀쌀해요");
    break;
  }
  case "겨울": {
    console.log("날이 추워요");
    break;
  }
}
