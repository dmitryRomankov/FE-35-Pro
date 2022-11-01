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
 
  // Task 1
  const str = Object.keys(subjects).join(', ');
  console.log(str)

   // Task 2
  const newArray = Object.keys(subjects).map(key => {
    return subjects[key];
  });

  

const calc = newArray.reduce((total, amount) => {
	return total + amount.teachers + amount.students        
	
}, 0 )
console.log (calc)

 // Task 3

const calcStudents = newArray.reduce((acc, curr) => {
	return {
		students: acc.students + curr.students,
		
	}
}, {students: 0})

const studentsAverage = calcStudents.students/newArray.length;

console.log (studentsAverage)

 // Task 4
 const subjectsKey = Object.keys(subjects)
 const subjArray = subjectsKey.map((subject,id) => ({subject, id}));
  
  console.log(subjArray);

  //Task 5 

  const subjectsVal = Object.values(subjects)

  const teachersNumber = subjectsVal.sort((a,b) => (b.teachers - a.teachers))
  console.log (teachersNumber)