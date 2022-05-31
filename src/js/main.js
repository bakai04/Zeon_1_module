import timer from "./moduls/timer.js";
import mode from "./moduls/mode.js";
import onOpenForm from "./moduls/onOpenForm.js";
import sendBtn from "./moduls/sendBtn.js";
import { data } from "./moduls/store.js";
import openMobailMenu from "./moduls/mobileMenu.js";
import price from "./moduls/price.js";
mode();
data.then((data) => {
  timer(data);
  price(data.plans);
});
onOpenForm();
sendBtn();
openMobailMenu();
