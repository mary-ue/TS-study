type animal11 = {
  type: 'animal';
  name: string;
  age: number;
  habitat: string;
  family: string;
}

type pet11 = {
  type: 'pet';
  name: string;
  home: string;
  age: number;
  breed: string;
};

const isAnimal = (val: animal11 | pet11): val is animal11 => 'habitat' in val;

const handle = (val: animal11 | pet11) => {
  if (isAnimal(val)) {

  } else {

  }
}