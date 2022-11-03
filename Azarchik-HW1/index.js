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

//1. Создать строку из названий предметов написаных через запятую
let result = Object.keys(subjects).join(", ");
console.log(result);

// 2. Посчитать общее количество студентов и учителей на всех предметах
let aResult = Object.values(subjects).reduce(
  (total, i) => total + i.students + i.teachers,
  0
);
console.log(aResult);

// 3. Получить среднее количество студентов на всех пердметах
let arrResult = Object.values(subjects).reduce(
  (total, i, index, aArray) => total + i.students / aArray.length,
  0
);
console.log(arrResult);

// 4. Создать массив из объектов предметов
let arrSubjects = Object.keys(subjects).map((subject, id) => {
  return { subject, id };
});
console.log(arrSubjects);

// 5. Получить массив из предметов и отсортировать по количеству преподавателей на факультете от большего к меньшему

let aSubjects = Object.values(subjects).sort((a, b) => b.teachers - a.teachers);
console.log(aSubjects);
