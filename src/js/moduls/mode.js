function changeMode(mode) {
  const lightBtn = document.querySelector(".light-btn");
  const darkBtn = document.querySelector(".dark-btn");
  const activeMode = document.querySelector(".mode-name");
  const modeTitle = document.querySelector(".change-mode__title");
  const changeMode = document.querySelector(".change-mode");

  activeMode.textContent = mode;
  modeTitle.textContent = mode + " mode";
  
  darkBtn.classList.toggle("active");
  lightBtn.classList.toggle("active");
  changeMode.classList.toggle("dark-mode");
}


function mode() {
  const lightBtn = document.querySelector(".light-btn");
  const darkBtn = document.querySelector(".dark-btn");

  lightBtn.addEventListener("click", () => {
    changeMode("light");
  });
  darkBtn.addEventListener("click", () => {
    changeMode("dark");
  });
}
export default mode;
