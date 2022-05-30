export function inputEmailValidation(value) {
    const warningText = document.querySelector(".on-invalid-email");
    const emailInputValidation = /[a-zа-я0-9.-_+]@[a-zа-я0-9.-]./gi;
    const emailInput = document.querySelector(".email");
  
    if (emailInputValidation.test(value)) {
      emailInput.classList.remove("error");      
      warningText.classList.add("display-none");
      return value;
    } else {
      emailInput.classList.add("error");
      warningText.classList.remove("display-none");
      if (value.length === 0) {
        warningText.textContent = "this field is reqiured*";
      } else {
        warningText.textContent = "Please enter correct address*";
      }
    }
  }
  
export function inputNameValidation(value) {
    const warningText = document.querySelector(".on-invalid-name");
    const nameInput = document.querySelector(".name");
  
    if (value.length < 3) {
      nameInput.classList.add("error")
      warningText.textContent = "should be more then 3 symbols";
      warningText.classList.remove("display-none");
    } else {
      nameInput.classList.remove("error");
      warningText.classList.add("display-none");
      return value;
    }
    if (value.length === 0) {
      warningText.textContent = "this field is reqiured*";
    }
  }
  
export function onGetSelectedCheckbox() {
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
  
export function onGetSelectedPlan() {
    const radioInput = document.querySelectorAll(".radio-input");
    const radioTitle = document.querySelectorAll(".radio__title");
  
    for (let i = 0; i < radioInput.length; i++) {
      if (radioInput[i].checked === true) {
        return radioTitle[i];
      }
    }
  }
  
export function loading() {
    document.querySelector(".form__loading").style.visibility = "visible";
    document
      .querySelector(".loading__img")
      .classList.toggle("loading__img--active");
  }
  