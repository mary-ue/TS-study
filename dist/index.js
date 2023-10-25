"use strict";
const title = 'Квадрокоптер';
const price = 5_000;
const count = 5;
const arrived = false;
const product = {
    title: 'Квадрокоптер',
    price: 150_000,
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
const city = ['Tokio', 'Nagoya', 'Osaka'];
const counter = [25, 14, 74, 12];
const arr = [15, 'react', true];
const arr1 = [15, 'react', true];
// Кортеж - строго указываем порядок типов данных 
const arr2 = [15, 'react', true];
const arrObj = [{ name: 'Max' }, { name: 'Anton' }];
