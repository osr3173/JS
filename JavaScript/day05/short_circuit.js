//단축 평가[short_circuit]

// true || "Dog";  // true  or 은 하나라도 true면 끝남
// false || "Dog"; // "Dog"
//  true && "Dog"; // "Dog"
// false && "Dog"; // false

const userName = prompt("유저 입력: ");
const name = userName || "Guest";
console.log(`${name} 환영합니다`);

const isloggedin = true; //로그인 로직 아직 안배움

isloggedin && console.log("로그인 성공");
