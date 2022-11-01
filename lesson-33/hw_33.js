
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

const subjectsKeys = Object.keys(subjects);
const subjectsValues = Object.values(subjects);

// task 1 

const nameArray = subjectsKeys.join(', ');
console.log(nameArray);

// task 2

const manCount = subjectsValues.reduce((accum, current, iterator) => {
    if (iterator === 1) {
        const firstSubjectPeopleArray = Object.values(accum);
        accum = {students: 0, teachers: 0}
        accum.students += firstSubjectPeopleArray[0];
        accum.teachers += firstSubjectPeopleArray[1];
    }
    const subjectPeopleArray = Object.values(current);
    accum.students += subjectPeopleArray[0];
    accum.teachers += subjectPeopleArray[1];
    return accum;
});

console.log(manCount);

// task 3

const studentsCount = subjectsValues.reduce((accum, current, iterator) => {
    if(iterator === 1) {
        const firstSubjectStudentArray = Object.values(accum);
        accum = 0;
        accum += Number(firstSubjectStudentArray[0]);
    }
    const subjectStudentArray = Object.values(current);
    accum += Number(subjectStudentArray[0]);
    return accum;
});

console.log(studentsCount / subjectsKeys.length);

// task 4 

const subjectsNewArray = subjectsKeys.map((subject, id) => {
    return {subject, id};
});

console.log(subjectsNewArray);

// task 5

const sortedSubjects = subjectsValues.sort((firstValue, secondValue) => {
    return secondValue.teachers - firstValue.teachers;
}); 

console.log(sortedSubjects);