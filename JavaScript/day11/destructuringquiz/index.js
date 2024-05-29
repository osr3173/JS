import { backendData } from "./data.js";

backendData;

//1. id, currency, money, phone 만 콘솔로
// const a = backendData.forEach((v) => {
//   v.id, v.currency, v.money, v.phone;
// });

const x = backendData.map(({ id, currency, money, phone }) => ({
  id,
  currency,
  money,
  phone,
}));

console.log(x);

// 강사님 코드(기초 방법)

backendData.map((v) => ({
  id: v.id,
  currency: v.currency,
  money: v.money,
  phone: v.phone,
}));

//2. {animal, car:{make,model,modelyear}} 콘솔로

const y = backendData.map({ animalName, carMake, carModel, CarModelYear });

// 강사님 코드
const two = backendData.map(
  ({
    animalName: animal,
    carMake: make,
    carModel: model,
    CarModelYear: year,
  }) => ({ animal, car: { make, model, year } })
);

//3. ipaddress가 맨마지막 세자리가 합이 10이하이면, id, color만 콘솔로
// findLastIndex
const c = backendData.filter(({ ipAddress }) => {
  const ipArr = [...ipAddress];
  const lastDotIndex = ipArr.findLastIndex((v) => v === ".");
  const splicedArr = ipArr
    .splice(lastDotIndex + 1, ipArr.length)
    .map((v) => parseInt(v));
  const sum = splicedArr.reduce((a, c) => a + c);
  return sum <= 10;
});

// 4. timezone이 알파벳 모음으로 시작하면, {timezone,carmake,phone 앞세자리만 가져오기}
const d = backendData.map(({ timezone, carMake, phone }) => ({
  timezone,
  carMake,
  phone: phone.split("-")[0],
}));

// 5. money가 50000엔 이하면, phone[하이픈 제거], appName[대문자화] 가져오기
backendData
  .filter(({ money }) => money <= 50000)
  .map(({ money, phone, appName }) => ({
    money,
    phone: phone.replaceAll("-", ""),
    appName: appName.toUpperCase(),
  }));
