// operator : 연산자[기호]

// 산술 : +, -, *, /, %
// 대입 : =. +=
// 비교 : ==, ===, !=, !==, >=, <=
// 논리 : &&, ||, !(not)
// 삼항 : ?

// 삼항 연산자와 조건문 구분?
// target.value
// forEach 활용 (이건 많이 해보고)
// map 과 filter (이것도 많이 해봐야 되고)
// 똑같이 했는데 구현 안되는 경우가 다수
// 기능을 추가하면 기존 기능이 구현 안되는 경우가 다소 발생 ex)

//forEach -> 배열 []
[
  { name: "kim", age: 21 },
  { name: "kim", age: 21 },
  { name: "kim", age: 21 },
].map((v, i) => {
  v.age = v.age + 10;
  return v; // v로 안돌려주면 반환 안됨
});

// i는 i번째(순서)
