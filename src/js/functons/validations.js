function validations() {
  let checkboxLabel = document.querySelectorAll(".checkbox__item");
  let fakeCheckbox = document.querySelectorAll(".fake-checkbox");
  let checkboxInput = document.querySelectorAll(".checkbox__input");
  let planButton = document.querySelectorAll(".form__button");

  document.querySelector("#name").addEventListener("change", () => {
    inputValidation(document.querySelector("#name").value, "name");
  });

  document.querySelector("#email").addEventListener("change", () => {
    inputValidation(document.querySelector("#email").value, "email");
  });

  for (let i = 0; i <= 2; i++) {
    planButton[i].addEventListener("click", () => {
      onClickPlanButton(planButton, i);
    });
  }

  for (let i = 0; i <= 3; i++) {
    checkboxLabel[i].addEventListener("click", () => {
      onClickCheckbox(fakeCheckbox[i], checkboxInput[i]);
    });
  }
  function onClickPlanButton(planButton, index) {
    let color = ["#0278ED", "#FF5437", "#FF9209"];
    for (let i = 0; i != 3; i++) {
      if (planButton[i] === planButton[index]) {
        planButton[i].style.background = color[index];
        planButton[i].style.color = "#FFFFFF";
      } else {
        planButton[i].style.background = "#FFFFFF";
        planButton[i].style.color = color[i];
      }
    }
  }


  function inputValidation(value, inputType) {
    const emailInput = /@[eg]mail.com/g;
    console.log(value);
    if (inputType == "name") {
      if (value.length < 3) {
        document.querySelector("#name").style.background = "#FFEEEE";
        document
          .querySelector(".on-invalid-name")
          .classList.toggle("display-none");
      } else {
        document.querySelector("#name").style.background = "#F2F2F2";
        document.querySelector(".on-invalid-name").classList.add("display-none");
      }
    } else {
      if (value.match(emailInput) !== null) {
        document.querySelector("#email").style.background = "#F2F2F2";
        document.querySelector(".on-invalid-email").classList.add("display-none");
      } else {
        document.querySelector("#email").style.background = "#FFEEEE";
        document.querySelector(".on-invalid-email").classList.toggle("display-none");
      }
    }
  } 

  function onClickCheckbox(fakeCheckbox, checkboxInput) {
    fakeCheckbox.classList.toggle(
      "fake-checkbox--checked",
      checkboxInput.checked
    );
  }
}

export default validations;
