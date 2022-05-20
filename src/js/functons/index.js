const functions = {
  timerCount: function (endDate) {
    let date = new Date();
    let interval = endDate - date;
    let days = Math.floor(interval / 1000 / 60 / 60 / 24);
    let hours = Math.floor(interval / 1000 / 60 / 60) % 24;
    let minute = Math.floor(interval / 1000 / 60) % 60;
    let seconds = Math.floor(interval / 1000) % 60;
    document.querySelector(".day").innerHTML =
      String(days).length < 2 ? "0" + days : days;
    document.querySelector(".hours").innerHTML =
      String(hours).length < 2 ? "0" + hours : hours;
    document.querySelector(".minutes").innerHTML =
      String(minute).length < 2 ? "0" + minute : minute;
    document.querySelector(".seconds").innerHTML =
      String(seconds).length < 2 ? "0" + seconds : seconds;
  },

  scrollToSection: function (elem) {
    window.scroll({
      left: 0,
      top: elem.offsetTop,
      behavior: "smooth",
    });
  },

  ChangeMode: function (mode) {
    document.querySelector(".mode-name").innerHTML = mode;
    document.querySelector(".change-mode__title").innerHTML = mode + "mode";
    document.querySelector(".dark")  .classList.toggle("active");
    document.querySelector(".light").classList.toggle("active");
    document.querySelector(".change-mode").classList.toggle("dark-mode");
  },
};
export const timerCount = functions.timerCount;
export const scrollToSection = functions.scrollToSection;
export const ChangeMode = functions.ChangeMode;
