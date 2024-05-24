// 1. 커피 메뉴 고르기

// 아아 ,라떼
// 3.0   4.0
// 추가   추가

// 총액 : " "
const btn1 = document.querySelector(".button");
// const btn2 = document.querySelector(".button2");
const total = document.querySelector(".total");
const menu = [
  {
    coffee: "아메리카노",
    price: 3000,
  }, // 0

  {
    coffee: "라떼",
    price: 4000,
  }, // 1
];

btn1.addEventListener("click", () => {
  menu[0].price;
}); // total 에다 menu1 값 더한 후 저장 ( (menu1+menu2) + "원")

btn2.addEventListener("click", () => {});
// total에다 menu2 값 더한 후 저장 ( (menu1+menu2) + "원")

// 현재 상태 : buttton 클릭 이벤트 부여 -> menu의 가격 값 `{}`로 불러와서
// 총액으로 나타나는 걸로 구상 , html tag 수정 중이었음
