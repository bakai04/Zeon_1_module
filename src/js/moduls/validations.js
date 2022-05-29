function inputEmailValidation(value) {
  const warningText = document.querySelector(".on-invalid-email");
  const emailInputValidation = /[a-zа-я0-9.-_+]@[a-zа-я0-9.-]./gi;
  const emailInput = document.querySelector("#email");

  if (emailInputValidation.test(value)) {
    emailInput.style.background = "#F2F2F2";
    warningText.classList.add("display-none");
    return value;
  } else {
    emailInput.style.background = "#FFEEEE";
    warningText.classList.remove("display-none");
    if (value.length === 0) {
      warningText.textContent = "this field is reqiured*";
    } else {
      warningText.textContent = "Please enter correct address*";
    }
  }
}

function inputNameValidation(value) {
  const warningText = document.querySelector(".on-invalid-name");
  const nameInput = document.querySelector("#name");

  if (value.length < 3) {
    nameInput.style.background = "#FFEEEE";
    warningText.textContent = "should be more then 3 symbols";
    warningText.classList.remove("display-none");
  } else {
    nameInput.style.background = "#F2F2F2";
    warningText.classList.add("display-none");
    return value;
  }
  if (value.length === 0) {
    warningText.textContent = "this field is reqiured*";
  }
}

function onGetSelectedCheckbox() {
  const warningText = document.querySelector(".on-invalid-checkbox");
  const checkboxInput = document.querySelectorAll(".checkbox-input");
  const title = document.querySelectorAll(".checkbox__title");
  const socialMedia = [];

  for (let i = 0; i < checkboxInput.length; i++) {
    if (checkboxInput[i].checked === true) {
      socialMedia.push(title[i].textContent);
    }
  }
  if (socialMedia.length === 0) {
    warningText.classList.remove("display-none");
  } else {
    warningText.classList.add("display-none");
  }
  return socialMedia;
}

function onGetSelectedPlan() {
  const radioInput = document.querySelectorAll(".radio-input");
  const radioTitle = document.querySelectorAll(".radio__title");

  for (let i = 0; i < radioInput.length; i++) {
    if (radioInput[i].checked === true) {
      return radioTitle[i];
    }
  }
}

function loading() {
  document.querySelector(".form__loading").style.visibility = "visible";
  document
    .querySelector(".loading__img")
    .classList.toggle("loading__img--active");
}

function validations() {
  const nameInput = document.querySelector("#name");
  const emailInput = document.querySelector("#email");
  const sendBtn = document.querySelector(".form__button-submit");
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

  sendBtn.addEventListener("click", () => {
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
export default validations;
