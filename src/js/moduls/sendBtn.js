import {
  getSelectedCheckbox,
  getSelectedPlan,
  checkInput,
  loading,
} from "./validatingInputs.js";
import { form } from "./onOpenForm.js";

function sendBtn() {
  const nameInput = document.querySelector(".name");
  const emailInput = document.querySelector(".email");

  const sendButton = document.querySelector(".form__button-submit");
  const checkboxInput = document.querySelectorAll(".checkbox-input");

  sendButton.addEventListener("click", () => {
    let inputNameValid = checkInput(nameInput, 0);
    let inputEmailValid = checkInput(emailInput, 1);
    let inputCheckboxValid = getSelectedCheckbox();
    let inputRadioValid = getSelectedPlan();

    nameInput.addEventListener("input", () => {
      checkInput(nameInput, 0);
    });
    emailInput.addEventListener("input", () => {
      checkInput(emailInput, 1);
    });

    for (let i = 0; i < checkboxInput.length; i++) {
      checkboxInput[i].addEventListener("click", () => {
        getSelectedCheckbox();
      });
    }

    if (
      inputNameValid !== "" &&
      inputEmailValid !== "" &&
      inputCheckboxValid.length !== 0
    ) {
      loading();
      setTimeout(() => {
        console.log({
          name: inputNameValid,
          email: inputEmailValid,
          socialMedia: inputCheckboxValid,
          plan: inputRadioValid,
        });
        loading();
        form();
      }, 3000);
    }
  });
}
export default sendBtn;
