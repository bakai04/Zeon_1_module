import {
  timerCount,
  scrollToSection,
  ChangeMode,
  form,
  inputValidation,
  onClickPlanButton,
  onClickCheckbox,
} from "./functons/index.js";
let planButton = document.querySelectorAll(".form__button");
let darkModeButton = document.querySelector(".dark");
let lightModeButton = document.querySelector(".light");
let features = document.querySelector(".features");
let pricing = document.querySelector(".pricing");
let testimonials = document.querySelector(".testimonials");
let faq = document.querySelector(".faq");
let buttonByNow = document.querySelectorAll(".buy-now");
let checkboxLabel = document.querySelectorAll(".checkbox__item");
let fakeCheckbox = document.querySelectorAll(".fake-checkbox");
let checkboxInput = document.querySelectorAll(".checkbox__input");
let date = new Date();
let endDate;



const getDate = async () => {
  const data = await fetch("./src/config.json").then((resp) => resp.json())
  if (data) {
    endDate = new Date(
      Number(data.timerEndDate.slice(6, 10)), //Year
      Number(data.timerEndDate.slice(3, 5)) - 1, //month
      Number(data.timerEndDate.slice(0, 2)), //day
      Number(data.timerEndDate.slice(11, 13)), //hours
      Number(data.timerEndDate.slice(14, 16)) //minute
    );
    return data.json();
  } else {
    return new Error('happened some shit!!!')
  }
};

getDate();
setInterval(() => {
  if (endDate - date > 0) {
    timerCount(endDate);
  }
}, 1000);

document.querySelector(".menu__features").addEventListener("click", () => {
  scrollToSection(features);
});

document.querySelector(".menu__pricing").addEventListener("click", () => {
  scrollToSection(pricing);
});

document.querySelector(".menu__testimonials").addEventListener("click", () => {
  scrollToSection(testimonials);
});

document.querySelector(".menu__faq").addEventListener("click", () => {
  scrollToSection(faq);
});

lightModeButton.addEventListener("click", () => {
  ChangeMode("light");
});
darkModeButton.addEventListener("click", () => {
  ChangeMode("dark");
});

for (let i = 0; i <= 3; i++) {
  buttonByNow[i].addEventListener("click", () => {
    form();
    onClickPlanButton(planButton, i == 0 ? 2 : i - 1);
  });
}

document.querySelector("#name").addEventListener("change", () => {
  inputValidation(document.querySelector("#name").value, "name");
});
document.querySelector("#email").addEventListener("change", () => {
  inputValidation(document.querySelector("#email").value, "email");
});

for (let i = 0; i <= 2; i++) {
  planButton[i].addEventListener("click", () => {
    onClickPlanButton(planButton, i);
  });
}

for (let i = 0; i <= 3; i++) {
  checkboxLabel[i].addEventListener("click", () => {
    onClickCheckbox(fakeCheckbox[i], checkboxInput[i]);
  });
}


