"use strict";
//Generics extends, keyof
;
// Property T must part of interface Length
function printLength(arg) {
    return arg.length;
}
;
printLength({ name: 1, age: 1, length: 2 });
printLength({ length: 1, name: 1 });
// Property a must be in object T
function getKey(obj, key) {
    return obj[key];
}
;
const myObj = {
    a: 1,
    b: 2,
    c: 3,
};
function print(name, age) {
    console.log(name + ' ' + age);
}
print('Name', 20);
print('Name', '20');
;
const todo = {
    description: 'Desc',
    title: 'Title',
};
const td = {
    completed: true,
    createdAt: 1242,
};
// Classes static properties
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    static log() {
        console.log(this.name);
    }
}
Person.log();
const p = new Person('Bob', 20);
