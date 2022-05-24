function changeMode() {
    
  let darkModeButton = document.querySelector(".dark");
  let lightModeButton = document.querySelector(".light");

  lightModeButton.addEventListener("click", () => {
    ChangeMode("light");
  });

  darkModeButton.addEventListener("click", () => {
    ChangeMode("dark");
  });

  function ChangeMode(mode) {
    document.querySelector(".mode-name").innerHTML = mode;
    document.querySelector(".change-mode__title").innerHTML = mode + "mode";
    document.querySelector(".dark").classList.toggle("active");
    document.querySelector(".light").classList.toggle("active");
    document.querySelector(".change-mode").classList.toggle("dark-mode");
  }
}

export default changeMode;
