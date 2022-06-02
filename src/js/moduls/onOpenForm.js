import {openForm} from "./validatingFormFunctions.js";

function radioDefaultActive(index) {
  const radioBtn = ["#third", "#first", "#second", "#third"];
  document.querySelector(radioBtn[index]).checked = true;
}

function onOpenForm() {
  const buyNowBtn = document.querySelectorAll(".buy-now");
  const modalPageClose = document.querySelector(".modal-page__close");
  modalPageClose.addEventListener("click", () => {
    openForm();
  });

  for (let i = 0; i <= 3; i++) {
    buyNowBtn[i].addEventListener("click", () => {
      openForm();
      radioDefaultActive(i);
    });
  }
}

export default onOpenForm;
