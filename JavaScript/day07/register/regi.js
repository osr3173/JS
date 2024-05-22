const optionsClassList = [".option1", ".option2", ".option3", ".option4"];

optionsClassList.forEach((v) => {
  const option = document.querySelector(v);
  option.addEventListener("click", () => {
    option.classList.toggle("checked");
    option.classList.toggle("notchecked");
    let buttonPass = true;
    optionsClassList.forEach((v) => {
      const option = document.querySelector(v);
      if (option.classList.contains("notchecked")) {
        buttonPass = false;
      }
    });

    const button = document.querySelector(".button");
    if (buttonPass) button.classList.add("passed");
    else button.classList.remove("passed");
  });
});
