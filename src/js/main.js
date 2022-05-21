import {
  timerCount,
  scrollToSection,
  ChangeMode,
  form,
  inputValidation,
  onClickPlanButton
} from "./functons/index.js";
let planButton=document.querySelectorAll(".form__button")
let darkModeButton = document.querySelector(".dark");
let lightModeButton = document.querySelector(".light");
let features = document.querySelector(".features");
let pricing = document.querySelector(".pricing");
let testimonials = document.querySelector(".testimonials");
let faq = document.querySelector(".faq");
let buttonByNow= document.querySelectorAll(".buy-now");
let checkbox= document.querySelectorAll(".checkbox__item")
let date = new Date();
let endDate;
const getDate = async () => {
  await fetch("./src/config.json")
    .then((resp) => resp.json())
    .then((store) => {
      endDate = new Date(
        Number(store.timerEndDate.slice(6, 10)), //Year
        Number(store.timerEndDate.slice(3, 5)) - 1, //month
        Number(store.timerEndDate.slice(0, 2)), //day
        Number(store.timerEndDate.slice(11, 13)), //hours
        Number(store.timerEndDate.slice(14, 16)) //minute
      );
    });
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

buttonByNow[0].addEventListener("click", () => {
  form();
}); 
buttonByNow[1].addEventListener("click", () => {
  form();
}); 
buttonByNow[2].addEventListener("click", () => {
  form();
}); 
buttonByNow[3].addEventListener("click", () => {
  form();
}); 


document.querySelector("#name").addEventListener("change", ()=>{
  inputValidation(document.querySelector("#name").value, 'name')
})
document.querySelector("#email").addEventListener("change", ()=>{
  inputValidation(document.querySelector("#email").value, 'email')
})

onClickPlanButton(planButton, 2)
planButton[0].addEventListener("click", ()=>{onClickPlanButton(planButton, 0)});
planButton[1].addEventListener("click", ()=>{onClickPlanButton(planButton, 1)});
planButton[2].addEventListener("click", ()=>{onClickPlanButton(planButton, 2)});

alert(checkbox[0]);