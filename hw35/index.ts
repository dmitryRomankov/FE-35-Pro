//#### Задачи: 

//С ниже приведенным массивом решить следующие задачи. Все функции и данные должны быть протипизированы:

    // 1. Создать строку из имен пользователей через запятую
    // 2. Посчитать общее количнство машин у пользователей
    // 3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования
    // 4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных
    // 5. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с названиями марок автомобилей через запятую

    interface Iuser {
        name: string;
        phone: string;
        email: string;
        animals?: string[];
        cars?: string[];
        hasChildren: boolean;
        hasEducation: boolean;
    }



    const users = [
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

    const userNamesString: string = users.map((user) => user.name).join(', ');


    //Task 2

    const totalCarsNumber: number = users.reduce((currSum, currUser) => {
        if (currUser.cars !== undefined) {
          return currSum + currUser.cars.length;
        }
        return currSum;
      }, 0);


      // Task3

    function FindEducationPeople (users: Iuser[]): Iuser[] {
        return users.filter((user) => {
            return user.hasEducation;
        })
      }

      console.log(FindEducationPeople(users));

      //Task4

      function FindAnimalsOwners (users: Iuser[]): Iuser[] {
        return users.filter((user) => {
            return user.animals
        })
      }

      console.log(FindAnimalsOwners(users));

      //Task 5

   
      
