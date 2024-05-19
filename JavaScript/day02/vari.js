// 인간: 연산(뇌) + 기억(뇌)
// 컴퓨터: 연산(CPU) + 기억(Ram)
// *************var 절대 쓰기말기****************
// 이유 : 전역 영역[글로벌 호이스팅]  전역 변수 선언?, 전역 선언으로 인한 간섭 발생

// es6(2015) let & const
let a = 123; //let은 수정 가능
const button = document.createElement("button"); //const 재수정 불가

// // 변수명 이름 문법
// // 1.예약어 안됨 ex) const const
//  2.$, _를 제외한 특수문자 넣으면 안됨
//  3.변수명 중복 X
//  4.숫자로 시작이 안됨 ex) const a1(O)  const 1a(X)

//  // 변수명 이름 국룰
//  1.소문자로 작성
//  2.의미있는 단어로 작성
//     1) 구체성 button -> skybutton
//     2) Has, is ->isDarkMode
// 3.두 단어 이상 합치면
//     1)camelCase: mintIce, backgroundColor
//     2)snake_case: mint_ice, background_color
