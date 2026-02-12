/**
 * @return {function(): string}
 */
function createHelloWorld() {
    return function() {
        return "Hello World";
    };
}

// Example usage:
const f = createHelloWorld();
console.log(f()); // Output: "Hello World"

// You can also write it more concisely using an arrow function:

const createHelloWorldArrow = () => () => "Hello World";

// Example usage:
const g = createHelloWorldArrow();
console.log(g()); // Output: "Hello World"
