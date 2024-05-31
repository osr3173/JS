class student {
  //변수 (속성/명사/상태) : 대학교, 전공, 학년, 학점, 과제, 학번, 입학년도, 수강과목
  //함수 (동작/동사/) : 술마시기, 졸작만들기, 논문쓰기,

  constructor(a, b) {
    this.name = a;
    this.university = "연세대";
    this.major = b;
  }
  intro() {
    console.log(
      `저는 ${this.name}이고요, ${this.university}를 다니고,  ${this.major}과 입니다.`
    );
  }

  drinking(x) {
    console.log(`${x}를 마십니다.`);
  }
  makeMasterPiece() {
    console.log("졸작");
  }
}

// 둘의 학교는 연세대
const kim = new student("김민재", "컴공");
const lee = new student("이지민", "정치외교");

kim.intro();
kim.drinking("테라");
lee.intro();
lee.drinking("카스");

class HardButton {
  constructor(a, b) {
    this.backgroundColor = a;
    this.content = b;
  }
  render() {
    const newDiv = document.createElement("div");
    newDiv.style.height = "60px";
    newDiv.style.width = "190px";
    newDiv.style.padding = "10px 16px";
    newDiv.style.backgroundColor = this.backgroundColor;
    newDiv.innerText = this.content;

    const test = document.querySelector(".test");
    test.appendChild(newDiv);
  }
}

const a = new HardButton("red", "레스토랑");
const b = new HardButton("blue", "메가");
const c = new HardButton("yellow", "ㄱㅊ");

a.render();
b.render();
c.render();
