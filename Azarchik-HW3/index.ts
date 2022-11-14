// С ниже приведенным массивом решить следующие задачи. Все функции и данные должны быть протипизированы:

interface Iusers {
  name: string;
  phone: string;
  email: string;
  animals?: string[];
  cars?: string[];
  hasChildren: boolean;
  hasEducation: boolean;
}
const users: Iusers[] = [
  {
    name: "Harry Felton",
    phone: "(09) 897 33 33",
    email: "felton@gmail.com",
    animals: ["cat"],
    cars: ["bmw"],
    hasChildren: false,
    hasEducation: true,
  },
  {
    name: "May Sender",
    phone: "(09) 117 33 33",
    email: "sender22@gmail.com",
    hasChildren: true,
    hasEducation: true,
  },
  {
    name: "Henry Ford",
    phone: "(09) 999 93 23",
    email: "ford0@gmail.com",
    cars: ["bmw", "audi"],
    hasChildren: true,
    hasEducation: false,
  },
];

// 1. Создать строку из имен пользователей через запятую
let names: string = users.map((c) => c.name).join(", ");

// 2. Посчитать общее количнство машин у пользователей
const amountOfCars: number = users.reduce((acc, currCar) => {
  if (currCar.cars) {
    return acc + currCar.cars.length;
  }
  return acc;
}, 0);
console.log(amountOfCars);

// 3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования
function getUsersHasEducation(c: Iusers[]): Iusers[] {
  return c.filter((a) => a.hasEducation);
}
console.log(getUsersHasEducation(users));

// 4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных
function getUsersHasAnimals(c: Iusers[]): Iusers[] {
  return c.filter((a) => a.animals);
}
console.log(getUsersHasAnimals(users));

// 5. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с названиями марок автомобилей через запятую

function getCarBrand(c: Iusers[]): string {
  let carsBrand: string = c.reduce((acc: string, b) => {
    if (b.cars) {
      return acc + b.cars.join(", ") + ", ";
    }
    return acc;
  }, "");
  return carsBrand;
}
console.log(getCarBrand(users));
