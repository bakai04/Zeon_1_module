import {openForm} from "./validatingFormFunctions.js";

function radioDefaultActive(index) {
  const radioBtn = ["#third", "#first", "#second", "#third"];
  document.querySelector(radioBtn[index]).checked = true;
}

function onOpenForm() {
  const modalPage=document.querySelector(".modal-page");
  const modalPageInner=document.querySelector(".modal-page__inner")
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
 
  modalPage.addEventListener("click", (e)=>{
    if(e.path.indexOf(modalPageInner)===-1){
      openForm();
    }
  })
}

export default onOpenForm;
