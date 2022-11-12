interface IUsers {
    name: string;
    phone: string;
    email: string;
    animals?: string[];
    cars?: string[];
    hasChildren: boolean;
    hasEducation: boolean;
}

const users: IUsers[] = [
    {
        name: "Harry Felton",
        phone: "(09) 897 33 33",
        email: "felton@gmail.com",
        animals: ["cat"],
        cars: ["bmw"],
        hasChildren: false,
        hasEducation: true,
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
    },
];


// 1

const userName: string = users.map((users) => users.name).join(', ');
console.log(userName);

// 2
const calcCars = users.reduce((acc: number, user: IUsers): number => {
    return user.cars !== undefined ? acc + user.cars.length : acc
}, 0)
console.log(calcCars)

// 3

const filterUsersWithEducation = (users: IUsers[]): IUsers[] => {
    return users.filter(({ hasEducation }: IUsers) => {
        return hasEducation
    })
}
console.log(filterUsersWithEducation(users))

// 4

const filterUsersWithAnimals = (users: IUsers[]): IUsers[] => {
    return users.filter(({animals = []}: IUsers) => {
        return animals.length
    })
}
console.log(filterUsersWithAnimals(users))

// 5

const getUserCarsString = (users: IUsers[]): string => {
    return users.filter(({cars = []}: IUsers) => {
        return cars.length
    }).map(({ cars }: IUsers) => cars).flat().join(', ') // [[cars...], [cars...]]
}
console.log(getUserCarsString(users))