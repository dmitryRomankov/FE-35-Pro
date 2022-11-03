const subjects = {
  mathematics: {
    students: 200,
    teachers: 6,
  },
  biology: {
    students: 120,
    teachers: 6,
  },
  geography: {
    students: 60,
    teachers: 2,
  },
  chemistry: {
    students: 100,
    teachers: 3,
  },
};
// task 1
const string = Object.keys(subjects).join(", ");

console.log(string);

// task 4
const str = Object.keys(subjects).map((key) => {
  return subjects[key];
});
console.log(str);
// task 3

let count = 0;
let averageStudents = 0;
str.forEach((element) => {
  count++;
  averageStudents += element.students;
});
console.log(averageStudents / count);

// // taks 2

const allPeople = str.reduce(function (sum, acc) {
  return sum + acc.students + acc.teachers;
}, 0);
console.log(allPeople);

// tak 5

const teachersSortirovka = str.sort(function (x, y) {
  return y.teachers - x.teachers;
});
console.log(teachersSortirovka);
