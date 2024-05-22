const optionsClassList = [
  {
    className: ".option1",
    isChecked: false,
    msg: "[필수]서비스 이용약관 동의",
  },
  {
    className: ".option2",
    isChecked: false,
    msg: "[필수]서비스 이용약관 동의",
  },
  {
    className: ".option3",
    isChecked: false,
    msg: "[필수]서비스 이용약관 동의",
  },
  {
    className: ".option4",
    isChecked: false,
    msg: "[필수]서비스 이용약관 동의",
  },
];

optionsClassList.forEach((v, i) => {
  const newDiv = document.createElement("div");
  newDiv.innerText = v.msg;
  newDiv.classList.add(v.className);
  newDiv.classList.add(v.isChecked ? "checked" : "notchecked");

  newDiv.addEventListener("click", () => {
    newDiv.classList.toggle("checkeed");
    newDiv.classList.toggle("notChecked");
    optionsClassList[i].isChecked = option.classList.contains("checked");

    const btn = document.querySelector(".button");
    optionsClassList.every((v) => v.isChecked)
      ? btn.classList.add("passed")
      : btn.classList.remove("passed");
  });

  console.log(optionsClassList);

  const optionList = document.querySelector(".optionList");
  optionList.appendChild(option);
});
