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
    },
];
// task 1
var userName = users.map(function (name) { return name.name; }).join(" , ");
console.log(userName);
// task 2
var sumAuto = users.reduce(function (acc, curr) {
    var _a;
    if (curr.cars !== undefined) {
        return acc + ((_a = curr.cars) === null || _a === void 0 ? void 0 : _a.length);
    }
    return acc;
}, 0);
console.log(sumAuto);
// taks 3
var seeAducation = users.filter(function (education) { return education.hasEducation; });
console.log(seeAducation);
// taks 4
var seeAnimals = users.filter(function (animals) { return animals.animals; });
console.log(seeAnimals);
// task 5
function getAuto(users) {
    return users.map(function (auto) { return auto.cars; }).join(" , ");
}
getAuto(users);
