function onOpenForm() {
  let planButton = document.querySelectorAll(".form__button");
  let buttonByNow = document.querySelectorAll(".buy-now");
  
  document.querySelector(".modal-page__close").addEventListener("click",()=>{
    form();
  })
   
  for (let i = 0; i <= 3; i++) {
    buttonByNow[i].addEventListener("click", () => {
      form();
      onClickPlanButton(planButton, i == 0 ? 2 : i - 1);
    });
  }

  
  function form() {
    document.querySelector(".modal-page").classList.toggle("display-none");
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
}

export default onOpenForm;
