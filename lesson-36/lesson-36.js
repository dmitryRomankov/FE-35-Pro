// Procedural and imperative approach

const myProcedure = () => {
  const article = document.querySelector('article');
  let articleOffsetTop;
  if (article !== undefined) {
    articleOffsetTop = article.offetTop;
  }
  const mainMenu = document.querySelector('.MainMenu');
  let mainMenuClientHeight;
  if (mainMenu !== undefined) {
    mainMenuClientHeight = mainMenu.clientHeight;
  }
  const result = articleOffsetTop - mainMenuClientHeight;
  return result;
};

// Imperative vs Declarative
let state = {
  foreground: '#999999',
  background: '#FFFFFF',
};

// directly changes the state object outside of its internal scope
const imperativeMakeBackgroundBlack = () => {
  state.background = '#000000';
};

// takes current state as its input and returns new state with changed value
// without changing the original state
const declarativeMakeBackgroundBlack = (state) => ({
  ...state,
  background: '#000000',
});

let turtles = ['Galápagos tortoise', 'Greek Tortoise'];

// changes the turtles external array and returns the length of the new array
const imperativeAddTurtle = (turtle) => turtles.push(turtle);

// takes 'array of turtles' and the 'new turtle' as its input.
// It returns new array of turtles without changing the original array
const declarativeAddTurtle = (turtles) => (turtle) => [...turtles, turtle];

// Pure functions
const summ = (a, b) => a + b;

// Impure functions
const log = () => console.log();
const generateId = () => Math.floor(Math.random() * 1000);

// Imutability
const addProp = (obj, prop, value) => ({
  ...obj,
  [prop]: value,
});

console.log(
  addProp(
    {
      a: 1,
    },
    'b',
    2
  )
);

//* Pipe vs Compose
// Pipe and Compose calls set of functions with result if previous one
// But doing it in a bit different way
// Pipe from left to right, Compose from right to left
const multiply20 = (price) => price * 20;
const divide100 = (price) => price / 100;
const normalizePrice = (price) => price.toFixed(2);
const addPrefix = (price) => '$' + String(price);

// Pipe
const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((res, fn) => fn(res), x);

// Compose
const compose =
  (...fns) =>
  (x) =>
    fns.reduceRight((res, fn) => fn(res), x);

const discountPipe = pipe(multiply20, divide100, normalizePrice, addPrefix);
const discountCompose = compose(
  addPrefix,
  normalizePrice,
  divide100,
  multiply20
);

discountPipe(200); // '$40.00'
discountCompose(200); // '$40.00'
