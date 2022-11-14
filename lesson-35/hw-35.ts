interface IUser {
    name: string,
    phone: string,
    email: string,
    animals?: string[],
    cars?: string[],
    hasChildren: boolean,
    hasEducation: boolean
}

const users: IUser[] = [
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
    }
];

// task 1

const nameArray = users.reduce((acc, curr, index) => {
    index === 2 ? acc += curr.name : acc += curr.name + ', ';
    return acc;
}, '');

console.log(nameArray);
// task 2

const carCount = users.reduce((acc, curr) => {
    if (curr.cars === undefined)
        return acc;
    acc += curr.cars.length + 0;
    return acc;
}, 0);

console.log(carCount);


// task 3

function filterUsersForEducation (users: IUser[]) {
    const usersWithEducation = users.filter((user: IUser) => {
        if (user.hasEducation) 
            return user;
    });
    return usersWithEducation;
}

console.log(filterUsersForEducation(users));

// task 4

const filterUsersWithAnimals = (users: IUser[]) => {
    const usersWithAnimals = users.filter((user: IUser) => {
        if (user.animals)
            return user;
    })
    return usersWithAnimals;
}

console.log(filterUsersWithAnimals(users));

// task 5

function getUserCarNames (users: IUser[] | any) {
    const userCarNames: string[] = users.reduce((acc: string[], curr: IUser, ind: number) => {
        const cars: string[] | undefined = curr.cars;
        if (cars === undefined)
            return acc;   
        for (const car in cars)
            acc.push(cars[car]);
        return acc;
    }, []);
    return userCarNames.join(', ');
}

console.log(getUserCarNames(users));