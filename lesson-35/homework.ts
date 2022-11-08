interface IUsers {
	name: string
	phone: string
	email: string
	animals?: string[]
	cars?: string[]
	hasChildren: boolean
	hasEducation: boolean
}

const users: IUsers[] = [
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
]

// 1. Создать строку из имен пользователей через запятую
const strUsers = users.map(({ name }: IUsers): string => name).join(', ')
console.log(strUsers) // Harry Felton, May Sender, Henry Ford

// 2. Посчитать общее количество машин у пользователей
const countCars = users.reduce((acc: number, { cars }: IUsers): number => cars?.length ? acc + cars.length : acc, 0)
console.log(countCars) // 3

// 3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования
const filterHasEducation = (users: IUsers[]): IUsers[] => users.filter(({ hasEducation }: IUsers): boolean => hasEducation)
console.log(filterHasEducation(users)) // [{...}, {...}]

// 4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных
const filterAnimals = (users: IUsers[]): IUsers[] => users.filter(({ animals }: IUsers): number | undefined => animals?.length)
console.log(filterAnimals(users)) // [{...}]

// 5. Создать функцию, которая бы принимала массив пользователей и отдавала бы строку с названиями марок автомобилей через запятую
const getModelCars = (users: IUsers[]): object => users.filter(({ cars }: IUsers): number | undefined => cars?.length).flatMap(({ cars }: IUsers): string[] | undefined => cars)
console.log(getModelCars(users)) // ["bmw", "bmw", "audi"]

