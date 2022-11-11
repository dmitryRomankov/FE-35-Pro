interface Iuser {
    name: string;
    phone: string;
    email: string;
    animals?: string[];
    cars?: string[];
    hasChildren: boolean;
    hasEducation: boolean;
  }
  
  const users: Iuser[] = [
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
  
  // Task 1
  const namesString: string = users.map((user) => {return user.name}).join(', ');
  console.log(namesString);

  //  Task 2
  const allCarsQuantity: number = users.reduce((currSum, currUser) => {
    if (currUser.cars !== undefined) {
      return currSum + currUser.cars.length;
    }
    return currSum;
  }, 0);
  console.log(allCarsQuantity);

  //   Task 3
  function educationUsers (users: Iuser[]): Iuser[] {
    return users.filter((user)=> {
        return user.hasEducation;
    })
  }
console.log(educationUsers(users));

  //   Task 4
  function animalUsers (users: Iuser[]): Iuser[] {
    return users.filter((user)=> {
        return user.animals !== undefined;
    })
  }
console.log(animalUsers(users));

// Task 5
function UserCars (users: Iuser[] | any) {
  const userCarNames: string[] = users.reduce((acc: string[], curr: Iuser, ind: number) => {
      const cars: string[] | undefined = curr.cars;
      if (cars === undefined)
          return acc;   
      for (const car in cars)
          acc.push(cars[car]);
      return acc;
  }, []);
  return userCarNames.join(', ');
}

console.log(UserCars(users));