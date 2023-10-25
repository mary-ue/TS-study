let count: number | void;
count = 1;

let obj: {} | null = null;

obj = {
  name: 'Max',
  age: 35,
};

const logger = (id: string | number): void => {
  if (typeof id === 'string') {
    console.log(id); // используем методы для строк
  } else {
    console.log(id); // для чисел
  }
}

const loggerObj = (obj: {a: number} | {b: number}) => {
  if ('a' in obj) {
    obj.a;
  } else {
    obj.b;
  }
}

const loggerError = (err: number[] | string | Error) => {
  if (Array.isArray(err)) {
    for (const str of err) {
      console.log(str);
    }
  } else if (err instanceof Error) {
    console.log(err);
  } else {
    console.log(err);
  }
}

const loggerError1 = (err: string): never => {
  throw new Error(err);
}

const hole: null = null;
const vacuum: undefined = undefined;
const vacuum1: void = undefined; // правильнее ⇖, но ошибки данный код не вызвет
