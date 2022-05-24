export default function getDate(){
    const data = await fetch("./src/config.json").then((resp) => resp.json())
    if (data) {
      endDate = new Date(
        Number(data.timerEndDate.slice(6, 10)), //Year
        Number(data.timerEndDate.slice(3, 5)) - 1, //month
        Number(data.timerEndDate.slice(0, 2)), //day
        Number(data.timerEndDate.slice(11, 13)), //hours
        Number(data.timerEndDate.slice(14, 16)) //minute
      );
      return data.json();
    } else {
      return new Error('happened some shit!!!')
    }
};