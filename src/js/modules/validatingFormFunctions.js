export function openForm() {
  document.querySelector(".modal-page").classList.toggle("display-none");
  document.querySelector("body").classList.toggle("overflow-hiden");
}

function resetForm() {
  const nameInput = document.querySelector(".name");
  const emailInput = document.querySelector(".email");
  const checkboxInput = document.querySelectorAll(".checkbox-input");
  nameInput.value = "";
  emailInput.value = "";
  checkboxInput.forEach((el) => (el.checked = false));
}

export function checkInput(formInput) {
  const warningError = document.querySelector(
    `.warning-${formInput.name}-error`
  );
  let value = "";
  if (formInput.value.length == 0) {
    formInput.classList.add("error");
    warningError.textContent = "this field is reqiured*";
  } else {
    if (formInput.value.length < 3) {
      formInput.classList.add("error");
      warningError.textContent = "should be more then 3 symbols";
    } else {
      formInput.classList.remove("error");
      warningError.textContent = "";
      value = formInput.value;
    }
  }
  return value;
}

export function getSelectedCheckbox() {
  const warningText = document.querySelector(".warning-checkbox-error");
  const checkboxInput = document.querySelectorAll(".checkbox-input");
  const title = document.querySelectorAll(".checkbox__title");
  const socialMedia = [];

  checkboxInput.forEach((elem, index) => {
    if (elem.checked === true) {
      socialMedia.push(title[index].textContent);
    }
  });

  if (socialMedia.length === 0) {
    warningText.classList.remove("display-none");
  } else {
    warningText.classList.add("display-none");
  }
  return socialMedia;
}

export function getSelectedPlan() {
  const radioInput = document.querySelectorAll(".radio-input");
  const radioTitle = document.querySelectorAll(".radio__title");
  let checkedRadio = "";

  radioInput.forEach((elem, index) => {
    if (elem.checked === true) {
      checkedRadio = radioTitle[index].textContent;
    }
  });
  return checkedRadio;
}

function showLoadingImitation() {
  document.querySelector(".form__loading").classList.toggle("display-none");
}

export function submittingFormData(
  inputNameValue,
  inputEmailValue,
  selectedPlan,
  selectedCheckbox
) {
  const sendFormDataBtn = document.querySelector(".form__button-submit");
  showLoadingImitation();
  sendFormDataBtn.disabled = true;
  setTimeout(() => {
    console.log({
      name: inputNameValue,
      email: inputEmailValue,
      socialMedia: selectedCheckbox,
      plan: selectedPlan,
    });
    showLoadingImitation();
    openForm();
    resetForm();
    sendFormDataBtn.disabled = false;
  }, 3000);
}
