const menus = [
  {
    name: "아메리카노",
    price: 3000,
  },
  {
    name: "라떼",
    price: 4000,
  },
  {
    name: "레몬에이드",
    price: 3500,
  },
]; // Object를  menus 리스트 형태로 선언

const makeName = (name) => {
  const h3 = document.createElement("h3"); // h3
  h3.innerText = name;
  return h3;
};

const makePrice = (price) => {
  const h5 = document.createElement("h5");
  h5.innerText = price + "원";
  return h5;
};

const makebutton = (price) => {
  const btn = document.createElement("button");
  btn.innerText = "추가하기";
  btn.addEventListener("click", () => {
    const total = document.querySelector(".total");
    total.innerText = parseInt(total.innerText) + price + "원";
  });
  return btn;
};

const makCoffee = (coffeeObj) => {
  const coffeeBox = document.createElement("div");
  coffeeBox.appendChild(makeName(coffeeObj.coffeeName));
  coffeeBox.appendChild(makeName(coffeeObj.coffeePrice));
  coffeeBox.appendChild(makebutton(coffeeObj.coffeePrice));
  document.querySelector(".menus").appendChild(coffeeBox);
};
menus.forEach((v) => makeCoffee(v));
