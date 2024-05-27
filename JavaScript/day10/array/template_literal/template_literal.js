// const box = document.querySelector(".box");

// box.innerHTML = `<h1>고기</h1>`;
// box.innerHTML = `<h1>My Friend</h1>`;

// const a1 = document.createElement("div");
// const a2 = document.createElement("div");
// const a3 = document.createElement("div");

// a1.innerHTML = `<li>kim</li>`;
// a2.innerHTML = `<li>lee</li>`;
// a3.innerHTML = `<li>park</li>`;

// document.body.appendChild(a1);

// document.body.appendChild(a2);

// document.body.appendChild(a3);

// 강사님 코드
// const box = document.querySelector(".box");

// const kim = "kim";
// const lee = "lee";
// const park = "park";

// box.innerHTML = `<h1>My Friend</h1>
// <ul>
//   <li>kim</li>
//   <li>lee</li>
//   <li>park</li>
// </ul>`;

// 간단하게

// const names = ["kim", "lee", "park"];
// box.innerHTML = `<h1>My Friend</h1>
// <ul>
//   ${names.map((v) => `<li>${v}</li>`).join("")}
// </ul>`;

const box = document.querySelector(".box");
const books = [
  { title: "자바스크립트 꿀잼", author: "손흥민", price: 30000, isSale: true },

  { title: "타입스크립트 꿀잼", author: "황희찬", price: 24000, isSale: false },

  {
    title: "구글링 하다가 막혔을때 코딩하는법",
    author: "김민재",
    price: 14000,
    isSale: true,
  },
];
//

// isSale: true -> 10% 할인

// const isBookSale = (book) => (book.isSale ? book.price * 0.9 : book.price);

// box.innerHTML = `<h1>${book.title}</h1>
// <h4>${book.author}</h4>
// <span>${book.isSale(book)}</span>
// `;

//

//   box.innerHTML = `<li>${books.title}</li>
//   <li>${books.author}</li>
//   <li>${books.price}</li>
//   <li>${books.isSale}</li>
//     `;
// });

// 강사님 코드
const isBookSale = (book) => (book.isSale ? book.price * 0.9 : book.price);

// box.innerHTML = `
// ${books
//   .map(
//     (v) => `
// <h1>${v.title}</h1>
// <h4>${v.author}</h4>
// <span>${isBookSale(v)}</span>`
//   )
//   .join("")}`;

// box.insertAdjacentHTML('어디에','무엇을')

// afterbegin 맨 첫번째 자식으로 넣기

// beforden 맨 뒤 자식
// box.insertAdjacentHTML(
//   "beforeend",
//   `<h1>${books[0].title}</h1>
//     <h4>${books[0].author}</h4>
//     <span>${isBookSale(books[0])}</span>`
// );
// 내코드
box.insertAdjacentHTML(
  "beforeend",
  `
${books
  .map(
    (v) =>
      `<h1>${v.title}</h1>
    <h4>${v.author}</h4>
    <span>${isBookSale(v)}</span>`
  )
  .join("")}`
);

// 강사님 코드
const makeBook = (book) =>
  `<h1>${book.title}</h1>
<h4>${book.author}</h4>
<span>${isBookSale}</span>`;
books.forEach((v) => box.insertAdjacentHTML("beforeend", makeBook(v)));

// 다른 방법
books.forEach((v) =>
  box.insertAdjacentHTML(
    "beforeend",
    `
<h1>${v.title}</h1>
<h4>${v.author}</h4>
<span>${isBookSale(v)}</span>`
  )
);
