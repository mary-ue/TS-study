"use strict";
let count;
count = 1;
let obj = null;
obj = {
    name: 'Max',
    age: 35,
};
const logger = (id) => {
    if (typeof id === 'string') {
        console.log(id); // используем методы для строк
    }
    else {
        console.log(id); // для чисел
    }
};
const loggerObj = (obj) => {
    if ('a' in obj) {
        obj.a;
    }
    else {
        obj.b;
    }
};
const loggerError = (err) => {
    if (Array.isArray(err)) {
        for (const str of err) {
            console.log(str);
        }
    }
    else if (err instanceof Error) {
        console.log(err);
    }
    else {
        console.log(err);
    }
};
const loggerError1 = (err) => {
    throw new Error(err);
};
const hole = null;
const vacuum = undefined;
const vacuum1 = undefined; // правильнее ⇖, но ошибки данный код не вызвет
