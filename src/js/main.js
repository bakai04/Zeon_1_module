import timer from "./moduls/timer.js";
import mode from "./moduls/mode.js";
import onOpenForm from "./moduls/onOpenForm.js";
import validations from "./moduls/validations.js";
import {data} from "./moduls/store.js"
import openMobailMenu from "./moduls/mobailMenu.js"

mode();
data.then(data=>timer(data))
onOpenForm();
validations();
openMobailMenu();