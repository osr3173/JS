// 정수 n과 k 가 주어졌을 때, 1이상 n이하의 정수 중에서 k 배수를
// 오름차순으로 저장한 배열을 return 하는 'solution' 함수 완성

// n k result
//10 3 [3,6,9]

// const Arr = Array(n)
//   .fill(1)
//   .map((v, i) => i + 1);

// // function solution(n, k) {}

// // 예시
// Array(n)
//   .fill(1)
//   .map((v, i) => i + 1)
//   .filter((v) => v % k == 0);

const arr = Array(10)
  .fill(1)
  .map((v, i) => i + 1)
  .filter((v) => v % 3 == 0);

console.log(arr);

// 50 이하의 5의 배수
const arr2 = Array(50)
  .fill(1)
  .map((v, i) => i + 1)
  .filter((v) => v % 5 == 0);
console.log(arr2);

// 50이하의 짝수
const arr3 = Array(50)
  .fill(1)
  .map((v, i) => i + 1)
  .filter((v) => v % 2 == 0);
console.log(arr3);

// 2. 문자열 배열 strArr
// 배열 내 문자열이 'ad' 포함한 문자열 -> 제거
// 남은 문자열 순서 유지
// 배열로 return 하는 solution 함수 완성

const Arr = ["and", "notad", "abcd", "there", "are", "so", "a", "ds"];

// Arr.filter((v) => {
//   !v.includes("ad");
// });

const makestr = (strArr) =>
  strArr.filter((v) => {
    !v.includes("ad");
  });
console.log(makestr(["and", "notad", "abcd"]));
console.log(makestr(["there", "are", "no", "a", "ds"]));
