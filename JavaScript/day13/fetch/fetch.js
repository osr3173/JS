// 클라이언트[프론트엔드] <-> 서버[백엔드]
// http 방식으로 데이터를 주고 받음

// 1. stateLess[request // respone] :  주고 받으면 끝

// 2. 쿠키, 세션, JWT
//  (1) 무신사 들어옴
//  (2) 로그인 함 [쿠키, 세션 ,JWT 받음]

// 3. restful api
// /webtoon/list/monday/id=1234
// ./netflix/best/id=293829

// const data = fetch("https://fakerapi.it/api/v1/addresses?_quantity=10");
// data.then((v) => v.json()).then((v) => console.log(v)); // 데이터 가져오고 JSON화 시킨 후 console

// const company = fetch("https://fakerapi.it/api/v1/companies?_quantity=20");
// company.then((v) => v.json()).then((v) => console.log(v));

// quiz  z카드 형태로  img , title, author, description, 2열 형태
// const book = fetch("https://fakerapi.it/api/v1/books?_quantity=20");
// book.then((v) => v.json()).then((v) => console.log(v.data));
// // const imgURL = 'https://picsum.photos/200';
// const card = document.querySelector(".card");

// book.forEach((v) =>
//   card.insertAdjacentHTML(
//     "beforeend",
//     `<img src=https://picsum.photos/200></img>
//       <h1>${v.title}</h1>
//       <h3>${v.author}</h3>
//       <h3>${v.descript}</h3>
//       `
//   )
// );

const data = fetch("https://fakerapi.it/api/v1/books?_quantity=20");
// data.then((v) => v.json()).then((v) => console.log(v));
const imgURL = "https://picsum.photos/200";

const result = data
  .then((v) => v.json())
  .then((v) => {
    const card = document.querySelector(".card");
    const data2 = v.data;
    data2.forEach((v) =>
      card.insertAdjacentHTML(
        "beforeend",
        `<div class="cardElement">
        <div class="imageBox">
            <img src=${imgURL}></img>
        </div>

        <div class="text">
            <h1>${v.title}</h1>
            <h3>${v.author}</h3>
            <h3>${v.description}</h3>
        </div></div>
       
       
       
        `
      )
    );
  });
