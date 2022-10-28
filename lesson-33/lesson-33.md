####  Lesson 33
============


#### Задачи: 

С ниже приведенным массивом пользователей решить следующие задачи:

    1. Получить средний возраст пользователей.
    2. Отсортировать массив по возрасту от большего к меньшему.
    3. Написать функцию, которая бы отвечала булевым значением на вопрос: есть ли пользователь соотвествуещего возраста. 
    Например, есть ли пользователь, которому 22 года? Ответ должен быть: true



```javascript

const users = [
    {
        id: 1,
        username: "Michael Lawson",
        age: 22,
    },
    {
        id: 2,
        username: "Tom Spot",
        age: 32,
    },
    {
        id: 3,
        username: "Kate Ford",
        age: 18,
    }
];

const averageUsersAge = users.reduce((acc, curr) => acc + curr.age, 0) / users.length;

const sortUsers = () => users.sort((a, b) => b.age - a.age);

const isMatchAge = (age) => users.some(user => user.age === age);

console.log(sortUsers())
console.log(isMatchAge(22))


```
