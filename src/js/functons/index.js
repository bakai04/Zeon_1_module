const functions = {
  timerCount: function (endDate) {
    let date = new Date();
    let interval = endDate - date;

    if (interval > 0) {
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
    }
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
    document.querySelector(".dark").classList.toggle("active");
    document.querySelector(".light").classList.toggle("active");
    document.querySelector(".change-mode").classList.toggle("dark-mode");
  },


  form: function () {
    document.querySelector(".modal-page").classList.toggle("display-none");
  },


  inputValidation: function (value, inputType) {
    const emailInput = /@[eg]mail.com/g;
    console.log(value);
    if (inputType == "name") {
      if (value.length < 3) {
        document.querySelector("#name").style.background = "#FFEEEE";
        document.querySelector(".on-invalid-name").classList.toggle('display-none')
      } else {
        document.querySelector("#name").style.background = "#F2F2F2";
        document.querySelector(".on-invalid-name").classList.remove('display-none')
      }
    } else {
      if (value.match(emailInput) !== null) {
        document.querySelector("#email").style.background = "#F2F2F2";
        document.querySelector(".on-invalid-email").classList.toggle('display-none')
      } else {
        document.querySelector("#email").style.background = "#FFEEEE";
        document.querySelector(".on-invalid-email").classList.toggle('display-none')
      }
    }
  },
};

export const timerCount = functions.timerCount;
export const scrollToSection = functions.scrollToSection;
export const ChangeMode = functions.ChangeMode;
export const form = functions.form;
export const inputValidation = functions.inputValidation;
