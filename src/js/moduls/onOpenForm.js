export function form() {
  document.querySelector(".modal-page").classList.toggle("display-none");
  document.querySelector("body").classList.toggle("overflow-hiden");
}

function radioDefaultActive(index) {
  const radioBtn = ["#third", "#first", "#second", "#third"];
  document.querySelector(radioBtn[index]).checked = true;
}

function onOpenForm() {
  const buyNowBtn = document.querySelectorAll(".buy-now");
  const modalPageClose = document.querySelector(".modal-page__close");
  modalPageClose.addEventListener("click", () => {
    form();
  });

  for (let i = 0; i <= 3; i++) {
    buyNowBtn[i].addEventListener("click", () => {
      form();
      radioDefaultActive(i);
    });
  }
}

export default onOpenForm;
