const input = document.querySelector(".input");
const openbtn = document.querySelector(".open");
const closebtn = document.querySelector(".close");

closebtn.style.display = "none";

openbtn.addEventListener("click", () => {
  input.type = "text";
  closebtn.style.display = "block";
  openbtn.style.display = "none";
});

closebtn.addEventListener("click", () => {
  input.type = "password";
  closebtn.style.display = "none";
  openbtn.style.display = "block";
});
