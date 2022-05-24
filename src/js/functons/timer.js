function timer(){
    const date = new Date();
    let endDate;


    const getDate= async ()=>{
        const data = await fetch("./src/config.json").then((resp) => resp.json())
        if (data) {
          endDate = new Date(
            Number(data.timerEndDate.slice(6, 10)), //Year
            Number(data.timerEndDate.slice(3, 5)) - 1, //month
            Number(data.timerEndDate.slice(0, 2)), //day
            Number(data.timerEndDate.slice(11, 13)), //hours
            Number(data.timerEndDate.slice(14, 16)) //minute
          );
          console.log(endDate);
        } else {
          return new Error('happened some shit!!!')
        }
    };


    getDate();
  
    function timerCount(endDate) {
        const date = new Date();
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
      }

    setInterval(() => {
        if (endDate - date > 0) {
          timerCount(endDate);
        }
      }, 1000);
}
export default timer;