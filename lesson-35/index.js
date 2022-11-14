// С ниже приведенным массивом решить следующие задачи. Все функции и данные должны быть протипизированы:

//     1. Создать строку из имен пользователей через запятую
//     2. Посчитать общее количнство машин у пользователей
//     3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования
//     4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных
//     5. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с названиями марок автомобилей через запятую


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


    // 1
    const userName = users.map((name) => name.name).join(" , ");
    console.log(userName);

    //2

    const carAmount = users.reduce(function (acc, curr) {
        if (curr.cars !== undefined) {
            return acc + curr.cars.length;
        }
        return acc;
    }, 0);

    console.log (carAmount)

    // 3

    const userEduvation = users.filter(function(user){
        if (user.hasEducation !== false){
            return user
        }
       
    })

    console.log (userEduvation)

    //4
     const userAnimals = users.filter(function(animal) {
        if (animal.animals !== undefined) {
            return animal
        }
     },0)

     console.log (userAnimals)

     //5 
     function mapAuto(users) {
        return users.map(function (auto) {
             if (auto.cars !== undefined)
            return auto.cars; }).join (', ');
    }
    console.log(maptAuto(users));