// type casting: Number, String, Boolean,

// String -> Array
// const coffee = "americano";

// // 1. split()
// const a1 = coffee.split("");

// // 2. Array.from()
// const a2 = Array.from(coffee);

// // 3. [...x]   ############## 이거 자주 씀 ################
// const a3 = [...coffee];

// // quiz americano 모음만
// const change = a3.filter((v) => v.replace("aeiou", " "));
// coffee.split();

// // 강사님 코드
// // coffee 배열화후 filter로 aeiou의 배열중 some 사용해 aeiou 아닌것만 출력
// const a4 = [...coffee].filter((v) => ![..."aeiou"].some((v1) => v1 == v));
// console.log(a4);

// const a5 = Array(10)
//   .fill(0)
//   .map((v, i) => i + 1);

// americano 중 e만 대문자
// ['a','m','E','r','i','c','a','n','o']
// const a6 = [...coffee].filter((v) => ("e"?));

// console.log(a6);

// 강사님 코드
// const a6 = [...coffee].map((v) => (v == "e" ? v.toUpperCase() : v));

//  Array -> String
const fruits = ["apple", "banana", "orange"];

// // join('')
// const b1 = fruits.join(""); //applebananarorange  ## 1번 권장
// const b2 = fruits.toString(); //apple, banana, orange

// ['pple','bnn','ornge']
// const b3 = fruits.map((v) => [...v].filter((v1) => v1 != "a").join());
// console.log(b3);

// const vowels = [..."aeiouAEIOU"];

// [...coffee].filter((v) => !vowels.some((v1) => v1 == v));

// 모든 철자 풀기

// 내코드
// const b4 = [...fruits[0]];
// console.log(b4);

// 강사님 코드  flat()
// const b4 = fruits.map((v) => [...v]).flat();

// // 다른분 방법
// const b5 = [...fruits.join("")];
// console.log(b5);
