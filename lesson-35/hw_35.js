// С ниже приведенным массивом решить следующие задачи. Все функции и данные должны 
// 1. Создать строку из имен пользователей через запятую
// 2. Посчитать общее количество машин у пользователей
// 3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования
// 4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных
// 5. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с названиями марок автомобилей через запятую
var users = [
    {
        name: "Harry Felton",
        phone: "(09) 897 33 33",
        email: "felton@gmail.com",
        animals: ["cat"],
        cars: ["bmw"],
        hasChildren: false,
        hasEducation: true
    },
    {
        name: "May Sender",
        phone: "(09) 117 33 33",
        email: "sender22@gmail.com",
        hasChildren: true,
        hasEducation: true
    },
    {
        name: "Henry Ford",
        phone: "(09) 999 93 23",
        email: "ford0@gmail.com",
        cars: ["bmw", "audi"],
        hasChildren: true,
        hasEducation: false
    }
];
// Task 1
var usersNamesString = users.map(function (user) { return user.name; }).join(', ');
console.log('Task 1:');
console.log(usersNamesString);
// Task 2
var totalCarsNumber = users.reduce(function (currSum, currUser) {
    if (currUser.cars !== undefined) {
        return currSum + currUser.cars.length;
    }
    return currSum;
}, 0);
console.log('Task 2:');
console.log(totalCarsNumber);
// Task 3
function filterUsersByEducation(users) {
    return users.filter(function (user) {
        return user.hasEducation;
    });
}
console.log('Task 3 (has education):');
console.log(filterUsersByEducation(users));
// Task 4
function filterUsersByAnimals(users) {
    return users.filter(function (user) {
        return user.animals !== undefined;
    });
}
console.log('Task 4 (has animals):');
console.log(filterUsersByAnimals(users));
// Task 5
function getUsersCars(users) {
    var cars;
    cars = users.reduce(function (carsString, currUser) {
        if (currUser.cars !== undefined) {
            return carsString + currUser.cars.join(', ') + ', ';
        }
        return carsString;
    }, '');
    return cars.slice(0, -2);
}
console.log('Task 5 (cars):');
console.log(getUsersCars(users));
