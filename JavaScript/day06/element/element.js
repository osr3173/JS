// 기본 타입 : string, number, boolean, null, undefined
// 참조 타입 : array, element

// const divTag = document.createElement("div"); // Element 타입

// divTag.appendChild()  자식 태그 추가하기
// divTag.removeChild()  자식 해당 태그 지우기

// divTag.style   직접 css 관여
// divTag.classList  클래스 리스트 보기
// divTag.classList.add("red")  클래스 리스트에 red 추가
// divTag.classList.remove("red")  클래스 리스트에 red 삭제
// divTag.classList.toggle("red") 클래스 리스트에 red가 있으면 삭제 없으면 추가

const box = document.querySelector(".box"); // => Element or null
const sizebtn = document.querySelector(".sizebtn");
const colorbtn = document.querySelector(".colorbtn");
const radiusbtn = document.querySelector(".radiusbtn");

sizebtn.addEventListener("click", () => {
  sizebtn.innerText = sizebtn.innerText == "늘리기" ? "줄이기" : "늘리기";
  box.classList.toggle("medium");
  box.classList.toggle("large");
});

colorbtn.addEventListener("click", () => {
  colorbtn.innetText = colorbtn.innerText == "빨간색" ? "파란색" : "빨간색";
  box.classList.toggle("red");
  box.classList.toggle("blue");
});

radiusbtn.addEventListener("click", () => {
  radiusbtn.innetText =
    radiusbtn.innerText == "테두리 직각" ? "테두리 둥근" : "테두리 직각";
  box.classList.toggle("borderRadiusZero");
  box.classList.toggle("borderRadiusRound");
});
