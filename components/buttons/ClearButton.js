import { makeElement } from "../../utils.js";

export const ClearButton = (value) => {

    const button = makeElement('button', value, ['clear', 'calc-button'], value)
    

    return button;
}