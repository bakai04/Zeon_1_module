function mode() {
  document.querySelector(".light-btn").addEventListener("click", () => {
    changeMode("light");
  });
  document.querySelector(".dark-btn").addEventListener("click", () => {
    changeMode("dark");
  });
}


function changeMode(mode) {
  document.querySelector(".mode-name").textContent = mode;
  document.querySelector(".change-mode__title").textContent = mode + " mode";
  document.querySelector(".dark-btn").classList.toggle("active");
  document.querySelector(".light-btn").classList.toggle("active");
  document.querySelector(".change-mode").classList.toggle("dark-mode");
}
export default mode;
