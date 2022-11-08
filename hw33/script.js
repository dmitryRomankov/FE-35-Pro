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
//1. Создать строку из названий предметов написаных через запятую
const str = console.log(Object.keys(subjects).join(', '));

const keys = Object.keys(subjects);
//4. Создать массив из объектов предметов
const getAllPeople = (Object.values(subjects));
console.log(getAllPeople);
//2. Посчитать общее количество студентов и учителей на всех предметах
const calcSumStudents = () => getAllPeople.reduce((acc, curr) => acc + curr.students, 0);

console.log(calcSumStudents());

const calcSumTeachers = () => getAllPeople.reduce((acc, curr) => acc + curr.teachers, 0);

console.log(calcSumTeachers());

//3. Получить среднее количество студентов на всех пердметах

const calcSumStudentsAverage = () => getAllPeople.reduce((acc, curr) => acc + curr.students, 0) / getAllPeople.length;

console.log(calcSumStudentsAverage());

// 5. Получить массив из предметов и отсортировать по количеству преподавателей на факультете от большего к меньшему
const sortTeachers = () => getAllPeople.sort((a, b) => b.teachers - a.teachers);

console.log(sortTeachers())

//done

