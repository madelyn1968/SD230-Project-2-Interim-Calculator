import { ClearButton } from "./buttons/ClearButton.js";
import { EqualsButton } from "./buttons/EqualsButton.js";
import { NegateButton } from "./buttons/NegateButton.js";
import { NumberButton } from "./buttons/NumberButton.js";
import { OperatorButton } from "./buttons/OperatorButton.js";
import { PercentButton } from "./buttons/PercentButton.js";

export const Button = (value) => {

    // conditional to determine what type of button should be made
    // Need to define different types of buttons for numbers, operators, etc

    if(value === 'c') return ClearButton(value);
    if(value === '=') return EqualsButton(value);
    if(value === '-/+') return NegateButton(value);
    if(value === '%') return PercentButton(value);
    if(['+', '-', '*', '/'].includes(value)) return OperatorButton(value);
    if(value === 'c') return ClearButton(value);

    return NumberButton(value);

}