import { makeElement } from "../../utils.js";

export const EqualsButton = (value) => {

    const button = makeElement('button', 'equals', ['calc-button', 'right-bottom-corner'], value)
    
    return button;
}