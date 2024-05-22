// 함수(기능): [input -> output]

// function makecoffee(x) {
//   return x + "완료";
// }
// const a = makecoffee("아아");
// const b = makecoffee("라떼");
// console.log(a, b);

// 일반함수
// function 함수명 (매개변수){return 리턴값}

// 제곱해서 돌려주기
// function square(x) {
//   return x ** 2;
//   //  return 생략하면 null을 반환함.
// }

// const num = square(2);
// console.log(num);

// 화살표 함수
// ()=>{}

// const makeBread = (x) => {
//   return x + "빵이 완료되었습니다.";
// };

// const a = makeBread("소금");
// console.log(a);

// 1. 어떤 수를 입력하면 세제곱을 돌려주는 함수
// const thirdsquare = (x) => x ** 3;

//  2. 대문자를 입력하면 소문자 +" 완료!" 돌려주는 함수
// const lower = (x) => x.toLowerCase() + "완료!";

//  3. x 입력하면, true인지 false인지 알려주는 함수

// const TF = (x) => (!!x ? "truthy" : "falsy");

// x가 들어오면 body 태그에 x 의 innerText를 가진 버튼을 추가해주는 함수

const makebutton = (x) => {
  const btn = document.createElement("button");
  btn.innerText = x;
  document.body.appendChild(btn);
};
makebutton("A");
