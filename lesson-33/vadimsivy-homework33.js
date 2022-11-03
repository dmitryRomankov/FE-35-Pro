// 1. Создать строку из названий предметов написаных через запятую
// 2. Посчитать общее количество студентов и учителей на всех предметах
// 3. Получить среднее количество студентов на всех пердметах
// 4. Создать массив из объектов предметов
// 5. Получить массив из предметов и отсортировать по количеству преподавателей на факультете от большего к меньшему

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
// #1
const str = Object.keys(subjects).join(', ');
console.log(str)
// #2
const keys = Object.values(subjects);
console.log(keys);

[].reduce((acc, curr) => acc + curr, 0)

const result = keys.reduce((acc, { students, teachers }) => {
    return {
        calcStudents: acc.calcStudents + students,
        calcTeachers: acc.calcTeachers + teachers,
    }
}, {calcStudents: 0, calcTeachers: 0})

console.log(result.calcStudents, result.calcTeachers);
// #3
const lessonsCount = Object.keys(subjects).length;
const middleStudents = result.calcStudents / lessonsCount;
console.log(middleStudents);
// #4
const massiveMethod = Object.values(subjects);
console.log(massiveMethod);
// #5
const methodSort = (a, b) => b.teachers - a.teachers
console.log(massiveMethod.sort(methodSort));

