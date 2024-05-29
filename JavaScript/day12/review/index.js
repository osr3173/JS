const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 35 },
];

// 1. 기본적인 변수명 바꾸기 (renaming)
// v의 타입은 Object
const kim = { name: "김민재", age: 27, position: "ceter back" };
const { name: KoreanName, position: soccerPosition } = kim;

// 다른 변수명

const koreanDefender = {
  KoreanName,
  soccerPosition,
};

users.map(({ id: userId, name: userName, age: userAge }) => {
  userId, userName, userAge;
});
