const n = 10;
const s: string = n.toString();
const s1: string = String(n); // через оператор new работает иначе

const str = 'ts';
const num1: number = +str;
const num2: number = parseInt(str);
const num3: number = Number(str);

const is1: boolean = !str;
const is2: boolean = !!str;
const is3: boolean = Boolean(str);

type animal = {
  name: string;
  age: number;
  habitat: string;
}

type pet = {
  name: string;
  home: string;
  owner: {
    firstname: string;
  };
};

const cat = {
  name: 'Stasy',
  age: 16,
  breed: 'siberian cat',
  habitat: 'place', // не выдает ошибку на эту строку -> НЕ безопасно; к voice не обратиться и не перезаписать
} as animal;

const cat1 = <animal> { // то же, что выше, в Реакте не рекомендуется
  name: 'Stasy',
  age: 16,
  breed: 'siberian cat',
  habitat: 'place', 
} as animal;

const myCat: pet = {
  ...cat,
  home: 'Central, 1',
  owner: {
    firstname: 'Max',
  }
}

const animalToPet = (animal: animal, home: string, nameOwner: string): pet => ({
  name: animal.name,
  home, 
  owner: {
    firstname: nameOwner,
  }
})

const myCat1: pet = animalToPet(cat, 'Central, 1', 'Max');
console.log(myCat);

