let days = document.querySelector(".day");
let seconds = document.querySelector(".seconds")
let minutes = document.querySelector(".minutes")
let hourses = document.querySelector(".hours")
let darkModeButton= document.querySelector(".dark")
let lightModeButton= document.querySelector(".light")
let changeMode=document.querySelector(".change-mode")
let store;
let monthDay=[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
fetch("../src/confige.json").then((resp)=> resp.json()).then(json=> store=json);
setInterval(() => {
    let date = new Date();
    let endDate=new Date(Number(store.timerEndDate.slice(6,10)), Number(store.timerEndDate.slice(3,5))-1, 
    Number(store.timerEndDate.slice(0,2)), Number(store.timerEndDate.slice(11,13)),Number(store.timerEndDate.slice(14,16)),0);
    let day=Math.trunc((endDate-date)/(1000*60*60*24));
    days.innerHTML=day.length<10? "0"+day: day;
    let hours=Math.trunc((endDate-date)/(1000*60*60));

    hourses.innerHTML=hours%24<10? "0"+hours%24: hours%24;
    minutes.innerHTML=(Math.trunc((endDate-date)/(1000*60))%60<10? "0":"")+Math.trunc((endDate-date)/(1000*60))%60;
    seconds.innerHTML=(Math.trunc((endDate-date)/(1000))%60<10? "0":"")+Math.trunc((endDate-date)/(1000))%60;
}, 1000);

lightModeButton.addEventListener("click", function ChangeMode(){
    darkModeButton.classList.toggle("active");
    lightModeButton.classList.toggle("active");
    changeMode.classList.toggle("dark-mode");
});
darkModeButton.addEventListener("click", function ChangeMode(){
    darkModeButton.classList.toggle("active");
    lightModeButton.classList.toggle("active");
    changeMode.classList.toggle("dark-mode");
});