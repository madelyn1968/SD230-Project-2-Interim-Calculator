export const makeElement = (element, id, classes, content) => {
    const newElement = document.createElement(element);
    newElement.id = id;
    newElement.classList.add(...classes);
    newElement.innerHTML = content;
    return newElement;
}

export const updateDisplay = () => {

    const display = document.getElementById('display');
    display.innerHTML = window.localStorage.getItem('currentNumber');

}