function onOpenMobailMenu() {
  const burger = document.querySelector(".burger");
  const mobailMenu = document.querySelector(".mobail-menu");

  burger.classList.toggle("active");
  mobailMenu.classList.toggle("mobail-menu--active");
  document.querySelector("body").classList.toggle("overflow-hiden");
}

function openMobailMenu() {
  const burger = document.querySelector(".burger");
  const closeMenuBtn = document.querySelector(".mobail-menu__close");
  const linkToScroll = document.querySelectorAll(".nav__item");

  burger.addEventListener("click", () => {
    onOpenMobailMenu();
  });

  closeMenuBtn.addEventListener("click", () => {
    onOpenMobailMenu();
  });

  linkToScroll.forEach(element => {
    element.addEventListener("click", ()=>{
      onOpenMobailMenu();
    })
  });
}
export default openMobailMenu;