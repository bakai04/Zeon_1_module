import {
  inputEmailValidation,
  inputNameValidation,
  onGetSelectedCheckbox,
  onGetSelectedPlan,
  loading,
} from "./validatingInputs.js";


function sendBtn() {
  const nameInput = document.querySelector(".name");
  const emailInput = document.querySelector(".email");
  const sendButton = document.querySelector(".form__button-submit");
  const checkboxInput = document.querySelectorAll(".checkbox-input");

  nameInput.addEventListener("input", () => {
    inputNameValidation(nameInput.value);
  });

  emailInput.addEventListener("input", () => {
    inputEmailValidation(emailInput.value);
  });

  for (let i = 0; i < checkboxInput.length; i++) {
    checkboxInput[i].addEventListener("click", () => {
      onGetSelectedCheckbox();
    });
  }

  sendButton.addEventListener("click", () => {
    let inputNameValid = inputNameValidation(nameInput.value);
    let inputEmailValid = inputEmailValidation(emailInput.value);
    let inputCheckboxValid = onGetSelectedCheckbox();
    let inputRadioValid = onGetSelectedPlan();
    
    if (
      inputNameValid !== undefined &&
      inputEmailValid !== undefined &&
      inputCheckboxValid !== ""
    ) {
      loading();
      console.log({
        name: inputNameValid,
        email: inputEmailValid,
        messanger: inputCheckboxValid,
        plan: inputRadioValid,
      });
    }
  });
}
export default sendBtn;
