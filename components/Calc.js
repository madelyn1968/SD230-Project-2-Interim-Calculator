import { makeElement } from "../utils.js";
import { CalcDisplay } from "./CalcDisplay.js";
import { ButtonRow } from "./ButtonRow.js";


export const Calc = () => {
    const calc = makeElement('div', 'calc', [], '');

    // Create the display
    calc.appendChild(CalcDisplay());

    // Create the buttons
    const layout = [
        ['c', '-/+', '%', '/'], 
        ['7', '8', '9', '*'],
        ['4','5', '6', '-'],
        ['1','2', '3', '+'],
        ['0', '.', '=']
    ];

    for(let i = 0; i < 5; i++) {
        calc.appendChild(ButtonRow(layout[i]));
    }

    return calc;
}