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

const valuesSubjects = Object.values(subjects)
const keysSubjects = Object.keys(subjects)

// 1. Создать строку из названий предметов написанных через запятую
console.log(keysSubjects.join(', ')) // mathematics, biology, geography, chemistry

// 2. Посчитать общее количество студентов и учителей на всех предметах
const calc = valuesSubjects.reduce((acc, curr) => {
	return {
		students: acc.students + curr.students,
		teachers: acc.teachers + curr.teachers,
	}
}, { students: 0, teachers: 0 })

console.log(calc) // { students: 480, teachers: 17 }

// 3. Получить среднее количество студентов на всех переметах
console.log(calc.students / keysSubjects.length) // 120

// 4. Создать массив из объектов предметов
const arraySubjects = keysSubjects.map((subject, id) => ({ subject, id }))
console.log(arraySubjects)
// [
//   { subject: 'mathematics', id: 0 },
//   { subject: 'biology', id: 1 },
//   { subject: 'geography', id: 2 },
//   { subject: 'chemistry', id: 3 }
// ]

// 5. Получить массив из предметов и отсортировать по количеству преподавателей на факультете от большего к меньшему
const sort = valuesSubjects.sort((a, b) => b.teachers - a.teachers)
console.log(sort)
// [
//  { students: 200, teachers: 6 },
//  { students: 120, teachers: 6 },
//  { students: 100, teachers: 3 },
//  { students: 60, teachers: 2 }
// ]