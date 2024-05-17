const btn1 = document.createElement("button");
const btn2 = document.createElement("button");
const num = document.createElement("div");

btn1.innerText = "-";
num.innerText = 0;
btn2.innerText = "+";

btn1.addEventListener("click", () => {
  const zero = Number(num.innerText) === 0;
  num.innerText = zero ? 0 : Number(num.innerText) - 1;
});

btn2.addEventListener("click", () => {
  num.innerText = Number(num.innerText) + 1;
});

document.body.appendChild(num);
document.body.appendChild(btn1);

document.body.appendChild(btn2);
