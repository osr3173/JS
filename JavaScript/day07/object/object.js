// 참조 : array, element, object

const arr = ["a", "b", "c"];

const coffee = {
  coffeeName: "아아",
  CoffeePrice: 2000,
  hasShot: true,
};

const coffee1 = {
  coffeeName: "라떼",
  CoffeePrice: 2500,
  hasShot: true,
};

// 책 title, author, publishedYear,pages

const book = {
  title: "아낌없이 주는 나무",
  author: "김",
  publishedYear: 2007,
  pages: 400,
};

//  >> object type

book["title"]; // "아낌없이 주는 나무"

book.title; // "아낌없이 주는 나무 "

// 둘다 같음

// 추가 방법
book.color = "green"; //color:"green" 추가

delete book.pages; // book의 pages 삭제

// object 유무
"author" in book; // true false
