const title: string = 'Квадрокоптер';
const price: number = 5_000;
const count: number = 5;
const arrived: boolean = false;

const product: {
  title: string;
  price: number;
  count: number;
  arrived: boolean;
  options: {
    color: string;
    distance: number;
    weight: number;
  };
} = {
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

const calcTotalPrice = ({
  price,
  count,
  title,
  options: {weight},
} : {
  price: number;
  count: number;
  title: string;
  options: {
    weight: number;
  }
}): string => {
  const totalPrice: number = price * count;
  const totalWeight: number = weight * count;
  return `${title}: цена ${totalPrice}, общий вес ${totalWeight}`;
}

const result: string = calcTotalPrice(product);

console.log(result);
