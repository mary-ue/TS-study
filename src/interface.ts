interface Animal {
  name: string;
  age: number;
}

interface Genius {
  id: number,
  family: string,
  breed: string,
}

interface AnimalWithGenius extends Animal, Genius {}
// внутри можно дописать отдельные свойства

const cat2: AnimalWithGenius = {
  name: 'Stasy',
  age: 1,
  id: 1,
  family: 'some family',
  breed: 'some breed',
};
