function dataParsing(date) {
  let parseDay = date.split(".")[0];
  let parseMonth = date.split(".")[1];
  let parseYears = date.split(" ")[0].split(".")[2];
  let parseHours = date.split(" ")[1].split(":")[0];
  let parseMinute = date.split(" ")[1].split(":")[1];

  const endDate = new Date(
    parseYears,
    parseMonth - 1,
    parseDay,
    parseHours,
    parseMinute
  );
  return endDate;
}

function renderTimer(timeClass, count) {
  document.querySelector(timeClass).textContent = String(count).padStart(
    2,
    "0"
  );
}

function timer(timerEndDate) {
  const sale = document.querySelector("#sale");
  const date = new Date();
  let endDate = dataParsing(timerEndDate);

  function timerCount(endDate) {
    const date = new Date();
    let interval = endDate - date;

    if (interval > 0) {
      sale.classList.remove("display-none");
      let days = Math.floor(interval / 1000 / 60 / 60 / 24);
      let hours = Math.floor(interval / 1000 / 60 / 60) % 24;
      let minute = Math.floor(interval / 1000 / 60) % 60;
      let seconds = Math.floor(interval / 1000) % 60;

      renderTimer(".day", days);
      renderTimer(".hours", hours);
      renderTimer(".minutes", minute);
      renderTimer(".seconds", seconds);
    } else {
      sale.classList.add("display-none");
    }
  }

  setInterval(() => {
    if (endDate - date > 0) {
      timerCount(endDate);
    }
  }, 1000);
}

export default timer;
