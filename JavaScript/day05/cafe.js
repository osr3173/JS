//커피 input
//가격 input  - 숫자이어야 함[1000 이상]
//수량 input  - 숫자이어야 함[1~10000 가능]
//제출하기 button
//3개가 0이 아니어야 함

// 커피 재고 리스트
// 아메리카노 3000원 10000개
// 라떼 3500원 3000개

// 맨 밑에 총 개수 : 13000개

const coffee = document.querySelector(".coffee");
const price =document.querySelector(".price")
const count=document.querySelector(".count")
const button = document.querySelector(".button");
const msg = document.querySelector(".msg");
document.body.appendChild(msg);

button.addEventListener("click", () => {
  const price_value=price.value;
  const 
  const  =  >= 1 && value.count <= 10000;

  const submit = coffee && price && count;
});

if (submit) {
  msg.innerText = `커피 재고 리스트\n ${coffee} ${price} ${count} \n 총 개수: ${count} `;
} else if(price<1000){
    msg.innerText="1000원 이상 입력해야 합니다."
}else if(count)




// 정답

const coffeeinput= document.querySelector(".coffeeinput");
const priceinput= document.querySelector(".priceinput");
const amountinput= document.querySelector(".amountinput");
const submit= document.querySelector(".submit");
const warnmsg= document.querySelector(".wrnmsg");
const coffeelist= document.querySelector(".coffeelist");


submit.addEventListener("click",()=>{
    const cv=coffeeinput.value;
    const pv=priceinput.value;
    const av=amountinput.value;
})

const isvalidempty= !!cv.legth && !!pv.legth &&!!av.legth;
const isvalidprice=1000<=Number(pv)
const isvalidamount=1<=Number(av) && Number(av)<=10000;
warnmsg.style.color="red"

if(!isvalidempty) warnmsg.innerText="빈칸을 모두 기입해 주세요!"

else if(!isvalidprice)
    warnmsg.innerText="가격이 1000원 이상 입력해야 함"

else if(!isvalidamount) warnmsg.innerText='수량이 1~10000이어야 함'

else{
    warnmsg.style.color="black"
    const coffeelistdiv=document.querySelector(".coffeelist");
    const divtag=document.createElement("div");

}