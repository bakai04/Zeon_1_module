import "../css/main.css";
import testimonials from "./moduls/testimonials.js";
import data from "../config.json";
import timer from "./moduls/timer.js";
import mode from "./moduls/mode.js";
import onOpenForm from "./moduls/onOpenForm.js";
import onFormSubmit from "./moduls/onFormSubmit.js";
import openMobailMenu from "./moduls/mobileMenu.js";
import price from "./moduls/price.js";
mode();
timer(data.timerEndDate);
price(data.plans);
testimonials(data.testimonials);
onOpenForm();
onFormSubmit();
openMobailMenu();
