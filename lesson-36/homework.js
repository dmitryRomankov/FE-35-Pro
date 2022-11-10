const movies = [
	{
		id: 1,
		title: "Black Widow",
		year: 2021,
		released: "09 Jul 2021",
		runtime: "134 min",
		genre: ["Action", "Sci-Fi", "Adventure"],
		director: "Cate Shortland",
		writer: "Eric Pearson, Jac Schaeffer, Ned Benson",
		actors: ["Scarlett Johansson", "Florence Pugh", "David Harbour"],
		plot: "Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.",
		country: "United States",
		poster: "https://m.media-amazon.com/images/M/MV5BNjRmNDI5MjMtMmFhZi00YzcwLWI4ZGItMGI2MjI0N2Q3YmIwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
		imdbRating: 6.9,
		imdbVotes: 121932,
		type: "movie",
		boxOffice: "$138,027,361",
		production: "Marvel Studios",
	},
	{
		id: 2,
		title: "Harry Potter and the Deathly Hallows: Part 2",
		year: 2011,
		released: "15 Jul 2011",
		runtime: "130 min",
		genre: ["Adventure", "Drama", "Fantasy"],
		director: "David Yates",
		writer: "Steve Kloves, J.K. Rowling",
		actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
		plot: "Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.",
		country: "United Kingdom, United States",
		poster: "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
		imdbRating: 8.1,
		imdbVotes: 790377,
		type: "movie",
		boxOffice: "$381,409,310",
		production: "Heyday Films, Moving Picture Company, Warner Bros.",
	},
	{
		id: 3,
		title: "Star Wars",
		year: 1977,
		released: "25 May 1977",
		runtime: "121 min",
		genre: ["Action", "Adventure", "Fantasy"],
		director: "George Lucas",
		writer: "George Lucas",
		actors: ["Mark Hamill", "Harrison Ford", "Carrie Fisher"],
		plot: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vad",
		country: "United States, United Kingdom",
		poster: "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
		imdbRating: 8.6,
		imdbVotes: 1259440,
		type: "movie",
		boxOffice: "$460,998,507",
		production: "Lucasfilm Ltd.",
	},
	{
		id: 4,
		title: "Harry Potter and the Half-Blood Prince",
		year: 2009,
		released: "15 Jul 2009",
		runtime: "153 min",
		genre: ["Action", "Adventure", "Family"],
		director: "David Yates",
		writer: "Steve Kloves, J.K. Rowling",
		actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
		plot: "As Harry Potter begins his sixth year at Hogwarts, he discovers an old book marked as 'the property of the Half-Blood Prince' and begins to learn more about Lord Voldemort\'s dark past.",
		country: "United Kingdom",
		poster: "https://m.media-amazon.com/images/M/MV5BNzU3NDg4NTAyNV5BMl5BanBnXkFtZTcwOTg2ODg1Mg@@._V1_SX300.jpg",
		imdbRating: 7.6,
		imdbVotes: 492245,
		boxOffice: "$302,305,431",
		production: "Heyday Films, Warner Bros.",
	},
	{
		id: 5,
		title: "Harry Potter and the Sorcerer's Stone",
		year: 2001,
		released: "16 Nov 2001",
		runtime: "152 min",
		genre: ["Adventure", "Family", "Fantasy"],
		director: "Chris Columbus",
		writer: "J.K. Rowling, Steve Kloves",
		actors: ["Daniel Radcliffe", "Rupert Grint", "Richard Harris"],
		plot: "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.",
		country: "United Kingdom, United States",
		poster: "https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg",
		imdbRating: 7.6,
		imdbVotes: 684604,
		boxOffice: "$318,087,620",
		production: "1492 Pictures, Heyday Films, Warner Brothers",
	}
]

const getArrayUniqueItems = (prop, array) => {
	const items = array.flatMap(item => item[prop])
	return [...new Set(items)]
}

// 1. Собрать в массив все жанры фильмов (без повторения)
const genres = getArrayUniqueItems('genre', movies)
console.log(genres) // [ 'Action', 'Sci-Fi', 'Adventure', 'Drama', 'Fantasy', 'Family' ]

// 2. Собрать в массив всех актеров всех фильмов (без повторения)
const actors = getArrayUniqueItems('actors', movies)
console.log(actors) // ['Scarlett Johansson', 'Florence Pugh', 'David Harbour', 'Daniel Radcliffe', 'Emma Watson', 'Rupert Grint', 'Mark Hamill', 'Harrison Ford', 'Carrie Fisher', 'Richard Harris']

// 3. Отсортировать фильмы по рейтингу по убыванию
const sortMoviesByRating = movies.sort((a, b) => b.imdbRating - a.imdbRating)
console.log(sortMoviesByRating) // [{ ..., imdbRating: 8.6 }, { ..., imdbRating: 8.1 }, { ..., imdbRating: 7.6 }, { ..., imdbRating: 7.6 }, { ..., imdbRating: 6.9 }]

// 4. Создать новый массив, где объекты фильмов будут состоять из следующих полей: id, title, released, plot
const adapterProperties = movies.map(({ id, title, released, plot }) => ({ id, title, released, plot }))
console.log(adapterProperties) // [{ id, title, released, plot }, ...]

// 5. Создать функцию, которая бы принимала массив фильмов и число. А результатом этой функции должен быть отфильтрованный массив, с фильмами, где число равно году выхода фильма.
const getMoviesReleaseInYear = (number, array) => array.filter(({ year }) => year === Number(number))
console.log(getMoviesReleaseInYear(2021, movies)) // [{ id: 1, ... }]

// 6. Создать функцию, которая бы принимала массив фильмов и строку. А результатом этой функции должен быть новый отфильтрованный массив, с фильмами, где строка входит в название фильма.
const filterMoviesByTitle = (input, array) => array.filter(({ title }) => title.toLowerCase().startsWith(input.toLowerCase())) // includes(input) ...
console.log(filterMoviesByTitle('Harry', movies)) // [{ id: 2, ... }, { id: 4, ... }, { id: 5, ... }]

// 7. Создать функцию, которая бы принимала массив фильмов и строку. А результатом этой функции должен быть отфильтрованный массив, с фильмами, где строка входит в название фильма или в его сюжет.
const filterMoviesByTitleOrPlot = (input, array) => array.filter(({ title, plot }) => {
	const [inputLC, ...rest] = [input, title, plot].map(item => item.toLowerCase())

	return [...rest]
		.map(item => item.startsWith(inputLC))
		.some(item => item)
})

console.log('Here: ' + filterMoviesByTitleOrPlot('Harry', movies)) // [{ id: 2, ... }, { id: 4, ... }, { id: 5, ... }]

// 8. Создать функцию, которая бы принимала 3 параметра:
//    1)массив фильмов , 2) строка(название поля, например 'title') и
//    строку/число(значение поля "Black Widow"). А результатом
//    этой функции должен быть отфильтрованный массив, где
//    параметры 2 и 3 равны в объекте фильма. Например:
//    передаем (films, 'title', 'Black Widow') и на выходе получаем
//    фильм с id=1 если передаем (films, 'year', 2011) , то получаем
//    фильм с id=2

const alternateFilter = (movies, prop, value) => movies.filter(movie => JSON.stringify(movie[prop]) === JSON.stringify(value)) // JSON сделал если на случай у проперти значение массив. Если это не нужно просто избавиться от JSON.stringify()
console.log(alternateFilter(movies, 'genre', [ 'Adventure', 'Family', 'Fantasy' ])) // [{ id: 5, ... }]

// !!! Можно было еще и типы отследить, но JSON.stringify() универсально.