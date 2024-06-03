import { data } from "./gdata.js";
data;

const cardList = document.querySelector(".cardList");

// 이미지(titleImage)
// const makeImgTag = (titleImage) => `<img src="${titleImage}" alt="" />`;

// 위치(hospitalSubway,hospitalName)
// const makeSite = () => `<img src="${imageURL}" alt="" />`;
// 성형 종류(title)

// 평점,평점 수(rating, ratingCount)

// 가격 " "만원

// (discountedCost, 특가 조건 :discountrating !=0

//data : pageProps ->
//events( titleImage, hostpitalsubway&hospitalName, title,
// rating&ratinCount, price)

const data2 = data[0].pageProps.events;
console.log(data2);

data2.forEach((v) => {
  cardList.insertAdjacentHTML(
    "beforeend",
    `<div class=card>
        <div class=imgBox>
            <img src=${v.titleImage}></img>
        </div>

 
        <div class=info>
            <div class=site>${v.hospitalSubway}.${v.hospitalName}</div>
            <div class=type>${v.title}</div>
            <div class=score>⭐${v.rating} (${v.ratingCount})</div>
            <div class=price>${v.discountedCost / 10000} 만원</div>
        </div>
    </div>
    
        
       
        
       `
  );
});
