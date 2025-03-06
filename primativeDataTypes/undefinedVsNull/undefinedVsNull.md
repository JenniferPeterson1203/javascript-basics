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

# What is Null?

In JavaScript, **`null`** is a primitive value that represents the **intentional absence of any object value**. It is often used when a variable should have no value but is **explicitly set** as such by the programmer.

---

## Understanding `null` in JavaScript

- `null` is a **falsy value** in JavaScript.
- `null` is an **object-type value** (this is a known bug in JavaScript, as `typeof null` returns `"object"`).
- `null` is **not the same as `undefined`**, which represents a variable that has been declared but not assigned a value.

---

## Example Usage of `null`

### 1. Explicitly Assigning `null` to a Variable
```javascript
let user = null; 
console.log(user); // null
```
## Difference between undefined and null

* The key difference between undefined and null is if you use the typeof operator on null, it will return an object while if the same is done with undefined, it will return undefined. Also null is the intential absence of a value, whereas undefined is the unintentionally declaring a variable that has not been assigned. 
