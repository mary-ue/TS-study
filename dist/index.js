"use strict";
const div = (a, b, rouding) => {
    const res = a / b;
    if (rouding) {
        return Math.round(res);
    }
    return res;
};
div(15, 4, true);
div(15, 3);
div(10, 2);
const fetchData = (res) => {
    if (res.status === 'success') {
    }
    if (res.status === 'failed') {
    }
    if (res.status === 'pending') {
    }
};
