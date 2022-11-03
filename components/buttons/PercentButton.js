import { makeElement } from "../../utils.js";

export const PercentButton = (value) => {

    const button = makeElement('button', value, ['number', 'calc-button'], value)
    

    return button;
}