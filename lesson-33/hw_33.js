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
const str = Object.keys(subjects).join(', ');

console.log(str);

// Task 2
const sum = Object.values(subjects).reduce(
    (acc, subject) => {
      for (const [stud, teach] of Object.entries(subject)) {
        const sumKey = `${stud}Sum`;
        if (acc[sumKey] === undefined) acc[sumKey] = 0;
        acc[sumKey] += teach;
      }
      return acc;
    },
    {},
  );
  console.log(sum);

// Task 3
let len =  Object.keys(subjects).length;  //Вычисляю длинну объекта
const sumAverage = Object.values(subjects).reduce(
    (acc, subject) => {
      for (const [stud, teach] of Object.entries(subject)) {
        const sumKey = `${stud}Sum`;
        if (acc[sumKey] === undefined) acc[sumKey] = 0;
        acc[sumKey] += teach/len; // Делю конечный результат на длинну объекта
      }
      return acc;
    },
    {},
);
console.log(sumAverage);

//Task 4
const keysSubj = Object.keys(subjects);
const arraySubj = keysSubj.map((subject,id) => ({subject, id})); 
console.log(arraySubj);

// Task 5
const subjectsValue = Object.values(subjects);
const teachersSort = subjectsValue.sort((a,b) => (b.teachers - a.teachers))
console.log (teachersSort);