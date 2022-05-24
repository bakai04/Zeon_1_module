function changeMode() {
  document.querySelector(".light").addEventListener("click", () => {
    ChangeMode("light");
  });
  document.querySelector(".dark").addEventListener("click", () => {
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
