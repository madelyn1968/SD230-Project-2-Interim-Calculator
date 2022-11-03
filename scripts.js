import { Calc } from "./components/Calc.js";
import { Tape } from "./components/Tape.js";

// Immediately invoked function. Don't need to call it anywhere else. 
(() => {

    window.localStorage.setItem('currentNumber', '0');
    window.localStorage.setItem('currentTotal', '0');
    window.localStorage.setItem('calcStack', JSON.stringify([]));

    const app = document.querySelector('#app');
    app.appendChild(Calc());
    app.appendChild(Tape());
}) ();