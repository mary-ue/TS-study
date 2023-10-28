"use strict";
const n = 10;
const s = n.toString();
const s1 = String(n); // через оператор new работает иначе
const str = 'ts';
const num1 = +str;
const num2 = parseInt(str);
const num3 = Number(str);
const is1 = !str;
const is2 = !!str;
const is3 = Boolean(str);
const cat = {
    name: 'Stasy',
    age: 16,
    breed: 'siberian cat',
    habitat: 'place', // не выдает ошибку на эту строку -> НЕ безопасно; к voice не обратиться и не перезаписать
};
const cat1 = {
    name: 'Stasy',
    age: 16,
    breed: 'siberian cat',
    habitat: 'place',
};
const myCat = {
    ...cat,
    home: 'Central, 1',
    owner: {
        firstname: 'Max',
    }
};
const animalToPet = (animal, home, nameOwner) => ({
    name: animal.name,
    home,
    owner: {
        firstname: nameOwner,
    }
});
const myCat1 = animalToPet(cat, 'Central, 1', 'Max');
console.log(myCat);
