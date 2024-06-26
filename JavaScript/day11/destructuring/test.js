const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 35 },
];

// users.map((v) => ({ name: v.name }));

users.map((v) => ({ name: v.name, age: v.age }));

const a = users.map(({ name, age }) => ({ name, age }));

users.map(({ name, age }) => ({ nickname: name, koreanage: age }));

users.map(({ name: nickname, age: koreanage }) => ({ nickname, koreanage }));

console.log(a);
