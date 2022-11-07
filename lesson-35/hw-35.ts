interface IUsers {
		name: string,
		phone: string,
		email: string,
		animals?: string[],
		cars?: string[],
		hasChildren: boolean,
		hasEducation: boolean
}


const ussers: IUsers[] = [
	{
		name: "Harry Felton",
		phone: "(09) 897 33 33",
		email: "felton@gmail.com",
		animals: ["cat"],
		cars: ["bmw"],
		hasChildren: false,
		hasEducation: false,
	},
	{
		name: "May Sender",
		phone: "(09) 117 33 33",
		email: "sender22@gmail.com",
		hasChildren: true,
		hasEducation: true,
	},
	{
		name: "Henry Ford",
		phone: "(09) 999 93 23",
		email: "ford0@gmail.com",
		cars: ["bmw", "audi"],
		hasChildren: true,
		hasEducation: false,
	}
]

// 1
const usersName: string = ussers.map((users) => { return users.name }).join(', ')
console.log(usersName)

// 2
const sumCars: number = ussers.reduce((acc, curr) => {
	if (curr.cars !== undefined) {
		return acc+curr.cars.length
	}
	return acc
}, 0)

console.log(sumCars)

// 3
function hasEduc(users: IUsers[]): IUsers[] {
	return users.filter((user) => {return user.hasEducation!==false})
}

console.log(hasEduc(ussers))

// 4
function filterAnimals (users: IUsers[]): IUsers[] {
	return users.filter((user) => { return user.animals !== undefined;})
  }
  
  console.log(filterAnimals(ussers));
// 5
// I'll finish a later
// function mapCars (users: IUsers[]): string {
// 	return users.reduce((acc, curr) => {
// 		if (curr.cars !== undefined) {
// 		return acc+curr.cars
// 	}
// 		return acc
// 	},
// 		'')
//   }
//   console.log(mapCars(ussers));