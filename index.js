"use strict";
const title = 'Квадрокоптер';
const price = 5000;
const count = 5;
const arrived = false;
const product = {
    title: 'Квадрокоптер',
    price: 150000,
    count: 10,
    arrived: false,
    options: {
        color: 'white',
        distance: 4000,
        weight: 250,
    },
};
const calcTotalPrice = ({ price, count, title, options: { weight }, }) => {
    const totalPrice = price * count;
    const totalWeight = weight * count;
    return `${title}: цена ${totalPrice}, общий вес ${totalWeight}`;
};
const result = calcTotalPrice(product);
console.log(result);
