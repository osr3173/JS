import { backendData } from "./data.js";

backendData;

//1. id, currency, money, phone 만 콘솔로
const a = backendData.forEach((v) => {
  v.id, v.currency, v.money, v.phone;
});
console.log(a);

//2. animalName -> {animal, car:{make,model,modelyear}} 콘솔로

//3. ipaddress가 맨마지막 세자리가 합이 10이하이면, id, color만 콘솔로

// 4. timezone이 알파벳 모음으로 시작하면, {timezone,carmake,phone 앞세자리만 가져오기}
// 5. money가 50000엔 이하면, phone[하이픈 제거], appName[대문자화] 가져오기
