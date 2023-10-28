"use strict";
class TV {
    title;
    count;
    price;
    constructor(title, price, count = 0) {
        this.title = title;
        this.count = count;
        this.price = price;
    }
    logger(str) {
        console.log(str + this.title);
    }
}
class WM {
    title;
    count;
    price;
    constructor(title, price, count = 0) {
        this.title = title;
        this.count = count;
        this.price = price;
    }
    logger(str) {
        console.log(str + this.title);
    }
}
