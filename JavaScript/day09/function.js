// [동사, 액션, 행동]
// 동사의 느낌 강함
function make(x) {
  return x + 10;
}

const div = document.createElement("div");
div.appendChild(".box");
div.innerText = "내용";

// f(x)=x+100;
// 1 -> 101 , 2-> 102

// f(g(x))[합성함수]
// addEventListener("click",()=>{})
// map(()=>{})

function x100(x) {
  return x + 100;
}

x100(1); //number type
x100("123"); //string type
x100(true); //Boolean
x100([1, 2, 3]); //error
x100(() => {});
