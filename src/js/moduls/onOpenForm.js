function onOpenForm() {
  let buyNowBtn = document.querySelectorAll(".buy-now");
  
  document.querySelector(".modal-page__close").addEventListener("click",()=>{
    form();
  })
  for (let i = 0; i <= 3; i++) {
    buyNowBtn[i].addEventListener("click", () => {
      form();
      radioDefaultActive(i)
    });
  }
}


const form=()=>{
  document.querySelector(".modal-page").classList.toggle("display-none"); 
}


const radioDefaultActive=(index)=>{
  const radioBtn=["#lifetime","#standart", "#premium", "#lifetime"];
  document.querySelector(radioBtn[index]).checked=true;
}
export default onOpenForm;
