//.ts

// Basic interfaces
const num: number = 5;

const str: string = "string";

const bool: boolean = true;

const strArray: string[] = ["one", "two", "three", "four"];

// Union type
function printAge(age: string | number): void {
  console.log(age);
}

printAge(25);
printAge("25");

// Void: function doesn't return value
function log(message: string): void {
  console.log(message);
}

// Interfaces
interface IUser {
  name: string;
  surname: string;
  age: number;
  printFullName: () => void;
}

const user: IUser = {
  name: "Name",
  surname: "Surname",
  age: 20,
  printFullName: function () {
    console.log(`${this.name} ${this.surname}`);
  },
};

const users: IUser[] = [
  {
    name: "Name",
    surname: "Surname",
    age: 20,
    printFullName: () => {},
  },
];

// Extending interfaces
interface IAdmin extends IUser {
  role: string;
  delete: () => void;
}

const admin: IAdmin = {
  name: "Name",
  surname: "Surname",
  age: 25,
  printFullName: function () {
    console.log(`${this.name} ${this.surname}`);
  },
  delete: () => {},
  role: "Admin",
};

// Type alias
type User = {
  name: string;
  age: number;
};

function f(u: User) {
  console.log(u.name);
}

type Person = {
  age: string;
};

// Type extending
type Person1 = Person & { name: string };

function func(p: Person1) {
  console.log(p);
}

// Type assertion
const header = document.getElementById("header") as HTMLElement;

// Generis
function getValue<T>(n: T): T {
  return n;
}

getValue("string");
getValue(23);
getValue({ name: "string" });

// Type Guards
function f1(n: number | string): void {
  if (typeof n === "string") {
    console.log(n);
  }

  if (typeof n === "number") {
    console.log(n * 2);
  }
}

// Optional properties

interface IAnimal {
  name: string;
  age?: number;
}

function f2(name: string, surName?: string) {
  console.log(name);
}

interface IHuman {
  surname: string;
}

// Classes
class Dog implements IAnimal, IHuman {
  public name = "Name";
  public age = 2;
  public surname = "Surname";
}
