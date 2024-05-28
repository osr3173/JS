const cardList = document.querySelector("cardList");

const makeImgTag = (imageURL) => `<img src="${imageURL}" alt="" />`;

const makeEmailTag = (email) => {
  const userEmail = email.split("@")[0];
  return `<div class="email">${userEmail}</div>`;
};

const makeSsnTag = (ssn) => ` <div class="ssn">${ssn}</div>`;
const makeMaskedCardTag = (card) => {
  const maskedCard = [...card].map((v, i) => (i < 4 ? "*" : v)).join("");
  return `<div class="cardNumber">${maskedCard}</div>`;
};

data.forEach((v) => {
  cardList.insertAdjacentHTML(
    "beforeend",
    `
    <div class="card">
        <div class="cardImage">
          ${makeImgTag(v.imageURL)}
        </div>
        <div class="info">
          <div class="email">${makeEmailTag(v.email)}</div>
          <div class="ssn">${makeSsnTag(v.ssn)}</div>
          <div class="cardNumber">${makeMaskedCardTag(v.card)}</div>
        </div>
      </div>`
  );
});
