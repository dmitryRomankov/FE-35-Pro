/* Stacks! */

// functions: push, pop, peek, length

// Creates a stack
const Stack = function () {
  this.count = 0;
  this.storage = {};

  // Adds a value onto the end of the stack
  this.push = function (value) {
    this.storage[this.count] = value;
    this.count++;
  };

  // Removes and returns the value at the end of the stack
  this.pop = function () {
    if (this.count === 0) {
      return undefined;
    }

    this.count--;
    const result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };

  this.size = function () {
    return this.count;
  };

  // Returns the value at the end of the stack
  this.peek = function () {
    return this.storage[this.count - 1];
  };
};

const myStack = new Stack();

myStack.push("a");
myStack.push("b");
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
