//기본 함수: number. string, boolean, undefined,null
//참조 함수: array,element, object, function

//기본 타입 변환 : String() -> "", Number() -> 123, Boolean() -> !!
//참조 타입 변환 : Array() -> [],  Function() -> ()=>{}, Object() -> {}

// 1. [일반] function name(x,y) {return ?}
// 2. [화살표 함수] const name = (x) => {return ?}
// 3. [익명(이름없는)함수]
// - 쓰는 이유
//  [1. 일회성, 2.이벤트성]
//  (1) function () {}
//  (2) () => {}

const arr = Array(1000)
  .fill(1)
  .map((v, i) > i); // 1000개 배열 1로 생성 -> 0~i 번째 까지

const airplane = {
  name: "보잉",
  company: "서울 항공",
  passenger: 200,
  airport: {
    start: "나리타",
    end: "인천",
  },
};
