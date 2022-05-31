export function checkInput(formInput, index) {
  const warningError = document.querySelectorAll(".on-invalid-input");
  let value = "";
  if (formInput.value.length == 0) {
    formInput.classList.add("error");
    warningError[index].textContent = "this field is reqiured*";
  } else {
    if (formInput.value.length < 3) {
      formInput.classList.add("error");
      warningError[index].textContent = "should be more then 3 symbols";
    } else {
      formInput.classList.remove("error");
      warningError[index].textContent = "";
      value = formInput.value;
    }
  }
  return value;
}

export function getSelectedCheckbox() {
  const warningText = document.querySelector(".on-invalid-checkbox");
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

export function loading() {
  document.querySelector(".form__loading").classList.toggle("display-none");
}
