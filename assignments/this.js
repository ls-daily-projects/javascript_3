/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. `this` === global, in global scope
 * 2. Attaching a function to an object implies that `this`, inside the function, refers to the object
 * 3. `this` inside a constructor is global until you call that constructor with `new`
 * 4. Except when used inside arrow functions, `this` can be reassigned using `call`, `bind` or `apply`
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding
greeting = "hello"
greeting === greeting
// Principle 2

// code example for Implicit Binding
const obj = { greet: () => {} }
obj.greet()

// Principle 3

// code example for New Binding
function Stuff() {
    this.stuff = "morestuff"
}

const stuffs = new Stuff()
stuffs.stuff === "morestuff"

// Principle 4

// code example for Explicit Binding
function doIt(howToDoIt) {
    howToDoIt(this.whatToDo, 1000)
}

doIt.call({ whatToDo: () => console.log(`I doooos it.`) }, setTimeout)
