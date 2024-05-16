// 0에서  - 누르면 감소,  + 누르면 증가

const result = document.createElement("span");
const minus = document.createElement("button");
const plus = document.createElement("button");

result.innerText = "0";
minus.innerText = "-";
plus.innerText = "+";

minus.addEventListener("click", () => {
  result.innerText = Number(result.innerText) - 1;
});

plus.addEventListener("click", () => {
  result.innerText = Number(result.innerText) + 1;
});

document.body.appendChild(minus);
document.body.appendChild(result);
document.body.appendChild(plus);
