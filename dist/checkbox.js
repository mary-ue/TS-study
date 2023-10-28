"use strict";
const checkbox = document.querySelector('checkbox');
const isHTMLInputElement = (element) => {
    if (element instanceof HTMLInputElement) {
        return true;
    }
    else {
        return false;
    }
};
const isNumber = (value) => typeof value === 'number';
const format = (value) => {
    if (isNumber(value)) {
        return value.toFixed(2);
    }
    else {
        return parseFloat(value).toFixed(2);
    }
};
