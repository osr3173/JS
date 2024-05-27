// 함수 만들기

//1. my_string   n   result
//   "hello"     3   "hhheeellllllooo"

const sol = (my_string, n) => [...my_string].map((v) => v.repeat(n)).join("");

console.log(repeat);

//2.
//       myString             result
//  'abstract algebra'   'AbstrAct AlgebrA'
//  'PrOgRaMmerS'          'progrAmmers
//  A를 변환

// Array(10).fill(0).map((v,i) => i%2 ? -(i+1))
