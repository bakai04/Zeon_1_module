function onOpenMobailMenu(){
  document.querySelector(".burger").classList.toggle("active");
  document.querySelector(".mobail-menu").classList.toggle("mobail-menu--active");
}


function openMobailMenu() {
  const linkToScroll=document.querySelectorAll(".nav__item");
    document.querySelector(".burger").addEventListener("click", () => {
        onOpenMobailMenu();
  });
  
  for(let i=0; i!=linkToScroll.length; i++){
    linkToScroll[i].addEventListener("click", ()=>{
        onOpenMobailMenu();
    })
  }
}
export default openMobailMenu;