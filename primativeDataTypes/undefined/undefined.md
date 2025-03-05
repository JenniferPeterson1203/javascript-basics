# What is Undefined?

In JavaScript, **`undefined`** is a primitive value that represents **a variable that has been declared but not assigned a value**.

## How Does `undefined` Work?
- If a variable is declared but **not initialized**, it has the value `undefined`.
- If a function does not return a value, it returns `undefined`.
- If an object property does not exist, accessing it will return `undefined`.

### Example
```javascript
let x;
console.log(x); // undefined

function test() {}
console.log(test()); // undefined

let obj = {};
console.log(obj.property); // undefined