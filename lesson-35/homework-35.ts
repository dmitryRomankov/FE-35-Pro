interface IUsers {
  name: string;
  phone: string;
  email: string;
  animals?: string[];
  cars?: string[];
  hasChildren: boolean;
  hasEducation: boolean;
}

const users: IUsers[] = [
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

// task 1

const userName: string = users.map((name) => name.name).join(" , ");
console.log(userName);

// task 2

const sumAuto = users.reduce(function (acc, curr): number {
  if (curr.cars !== undefined) {
    return acc + curr.cars?.length;
  }
  return acc;
}, 0);

console.log(sumAuto);

// taks 3

const seeAducation: IUsers[] = users.filter(
  (education) => education.hasEducation
);

console.log(seeAducation);

// taks 4
const seeAnimals: IUsers[] = users.filter((animals) => animals.animals);

console.log(seeAnimals);

// task 5

function getAuto(users: IUsers[]): string {
  return users.map((auto) => auto.cars).join(" , ");
}
getAuto(users);
// что-то не работает(((((((((()))))))))
