function validations() {
  const nameInput = document.querySelector("#name");
  const emailInput = document.querySelector("#email");
  const sendBtn = document.querySelector(".form__button-submit");

  nameInput.addEventListener("change", () => {
    inputNameValidation(nameInput.value);
  });

  emailInput.addEventListener("change", () => {
    inputEmailValidation(emailInput.value);
  });

  sendBtn.addEventListener("click", () => {
    let inputNameValid = inputNameValidation(nameInput.value);
    let inputEmailValid = inputEmailValidation(emailInput.value);
    let inputCheckboxValid = onGetSelectedCheckbox();
    let inputRadioValid=onGetSelectedPlan();
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
        plan:inputRadioValid
      });
    }
  });
}




const inputNameValidation=(value)=>{
  if (value.length < 3) {
    document.querySelector("#name").style.background = "#FFEEEE";
    document.querySelector(".on-invalid-name").classList.remove("display-none");
  } else {
    document.querySelector("#name").style.background = "#F2F2F2";
    document.querySelector(".on-invalid-name").classList.add("display-none");
    return value;
  }
}

const inputEmailValidation=(value)=>{
  const emailInput = /@[eg]mail.com/g;
  if (value.match(emailInput) !== null) {
    document.querySelector("#email").style.background = "#F2F2F2";
    document.querySelector(".on-invalid-email").classList.add("display-none");
    return value;
  } else {
    document.querySelector("#email").style.background = "#FFEEEE";
    document.querySelector(".on-invalid-email").classList.remove("display-none");
  }
}

const onGetSelectedCheckbox = () => {
  const checkboxInput = document.querySelectorAll(".checkbox-input");
  const title = document.querySelectorAll(".checkbox__title");
  const messanger=[]
  for (let i = 0; i != checkboxInput.length; i++) {
    if (checkboxInput[i].checked === true) {
      messanger.push(title[i].textContent);
    }
  }
  return messanger;
};


const onGetSelectedPlan=()=>{
  const radioInput=document.querySelectorAll(".radio-input");
  const radioTitle=document.querySelectorAll(".radio__title");
  for(let i=0; i!=radioInput.length; i++){
    if(radioInput[i].checked===true){
      return radioTitle[i];
    }
  }
}

const loading=()=>{
  document.querySelector(".form__loading").style.visibility="visible";
  document.querySelector(".loading__img").classList.toggle("loading__img--active");
}
export default validations;
