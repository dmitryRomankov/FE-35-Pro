//Generics extends, keyof

interface Length {
    length: number
};

// Property T must part of interface Length
function printLength<T extends Length>(arg: T): number {
    return arg.length;
};

printLength({ name: 1, age: 1, length: 2 });
printLength({ length: 1, name: 1 });

// Property a must be in object T
function getKey<Type, Key extends keyof Type>(obj: Type, key: Key) {
    return obj[key];
};

const myObj = {
    a: 1,
    b: 2,
    c: 3,
}

function print<Name, Age>(name: Name, age: Age): void {
    console.log(name + ' ' + age);
}

print<string, number>('Name', 20);
print<string, string>('Name', '20');


// Utility interfaces: Pick, Exclude, Omit, Extract

interface Todo {
    title: string;
    description: string;
    completed: boolean;
    createdAt: number;
};

type TodoPreview = Pick<Todo, 'title' | 'description'>;

const todo: TodoPreview = {
    description: 'Desc',
    title: 'Title',
};

type Todo1 = Omit<Todo, 'description' | 'title'>;

const td: Todo1 = {
    completed: true,
    createdAt: 1242,
}

type Excl = Exclude<'a' | 'b' | 'c', 'a'>;

type Extr = Extract<'a' | 'b' | (() => void), Function>;


// Classes static properties

class Person {
  public name: string;
  public age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public static log() {
    console.log(this.name);
  }
}

Person.log()

const p: Person = new Person('Bob', 20);


// Example*

interface Array<T> {
  concat(...items: Array<T[] | T>): T[];
  reduce<U>(
    callback: (state: U, element: T, index: number, array: T[]) => U, firstState?: U
  ): U
}
