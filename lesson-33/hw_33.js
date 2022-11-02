//     1. Создать строку из названий предметов написаных через запятую
//     2. Посчитать общее количество студентов и учителей на всех предметах
//     3. Получить среднее количество студентов на всех пердметах
//     4. Создать массив из объектов предметов
//     5. Получить массив из предметов и отсортировать по количеству преподавателей на факультете от большего к меньшему
const subjects = {
  mathematics: {
      students: 200,
      teachers: 6
  },
  biology: {
      students: 120,
      teachers: 6
  },
  geography: {
      students: 60,
      teachers: 2
  },
  chemistry: {
      students: 100,
      teachers: 3
  }
}

// Task 1
console.log("Task 1 result:");
console.log(Object.keys(subjects).join(','));

// Task 2
const subjectsArray = Object.keys(subjects).map(key => {
  return subjects[key];
});
const totalAll = subjectsArray.reduce((sum, cur) => {
  return sum + cur.students + cur.teachers;
},0);

console.log("Task 2 result:");
console.log(`Общее кол-во людей ${totalAll}`);

// Task 3
let totalStudents = 0;
let count = 0;

subjectsArray.forEach(item => {
  totalStudents += item.students;
  count++;
})

console.log("Task 3 result:");
console.log(`Среднее кол-во студентов ${totalStudents/count}`);

// Task 4
const subArray = Object.keys(subjects).map((key, index) => {
  return {subject: key, id: index};
});

console.log("Task 4 result:");
console.log(subArray);

// Task 5
const arrayOfSubjects = Object.keys(subjects);

function compareSubjects(a, b){
  if (subjects[a].students < subjects[b].students) return 1;
  if (subjects[a].students == subjects[b].students) return 0;
  if (subjects[a].students > subjects[b].students) return -1;
}

arrayOfSubjects.sort(compareSubjects);

console.log("Task 5 result:");
console.log(arrayOfSubjects);