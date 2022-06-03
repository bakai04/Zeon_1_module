import {
  getSelectedCheckbox,
  getSelectedPlan,
  checkInput,
  submittingFormData,
} from "./validatingFormFunctions.js";

function onFormSubmit() {
  const sendFormDataBtn=document.querySelector(".form__button-submit");
  const nameInput = document.querySelector(".name");
  const emailInput = document.querySelector(".email");
  const checkboxInput = document.querySelectorAll(".checkbox-input");

  sendFormDataBtn.addEventListener("click", () => {
    let inputNameValue = checkInput(nameInput);
    let inputEmailValue = checkInput(emailInput);
    let selectedCheckbox = getSelectedCheckbox();
    let selectedPlan = getSelectedPlan();

    nameInput.addEventListener("input", () => {
      checkInput(nameInput);
    });
    
    emailInput.addEventListener("input", () => {
      checkInput(emailInput);
    });

    for (let i = 0; i < checkboxInput.length; i++) {
      checkboxInput[i].addEventListener("click", () => {
        getSelectedCheckbox();
      });
    }

    if (
      inputNameValue !== "" &&
      inputEmailValue !== "" &&
      selectedCheckbox.length !== 0
    ) {
      submittingFormData(
        inputNameValue,
        inputEmailValue,
        selectedPlan,
        selectedCheckbox
      );
    }
  });
}
export default onFormSubmit;
