// const a = document.querySelector(".box");
// a.style.backgroundColor = "blue";
// a.addEventListener("click", () => {
//   window.alert("클릭함");
// });

// // X 누르면 bar
// // bar 누르면 X

const X = document.querySelector(".X");

X.style.display = "none";

X.addEventListener("click", () => {
  X.style.display = "none";
  bar.style.display = "block";
});

const bar = document.querySelector(".bar");

bar.addEventListener("click", () => {
  bar.style.display = "none";
  X.style.display = "block";
});
