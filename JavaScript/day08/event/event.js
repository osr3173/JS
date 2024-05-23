//참조 타입:
// 프로그래밍 타입) Array, Object, Function
// HTML에서 가져온 타입) Element, Event

// const input = document.querySelector(".input");
// input.addEventListener("input", (e) => {
//   e.target.value =
//     e.target.value.length > 10 ? e.target.value.slice(0, 10) : e.target.value;
// });

//+) html에 maxlength 로도 가능

const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const input3 = document.querySelector(".input3");
const closebtn = documet.querySelector(".close");
const openbtn = document.querySelector(".open");
const login = document.querySelector(".login");

const email = ["naver.com", "daum.net", "gmail.com", "kakao.com"];

input1.addEventListener("click", (e) => {
  e.target.value = "";
});

input2.addEventListener("click", (e) => {
  e.target.value = "";
});

input3.addEventListener("click", (e) => {
  e.target.value = "";
});

input1.addEventListener("input", (e) => {
  e.target.value.includes(email)
    ? e.target.value
    : (e.target.innerText = "잘못된 이메일 형식입니다.");
});

input2.addEventListener("input", (e) => {
  if (
    e.target.value.length > 8 &&
    e.target.value.includes("~!@#$%^&*()_+|<>?:{}]/")
  ) {
    return e.target.value;
  } else {
    return (e.target.innerText = "잘못된 비밀번호 형식입니다.");
  }
});

closebtn.style.display = "none";

closebtn.addEventListener("click", () => {
  closebtn.style.display = "none";
  openbtn.style.display = "block";
});

openbtn.addEventListener("click", () => {
  openbtn.style.display = "none";
  closebtn.style.display = "block";
});
