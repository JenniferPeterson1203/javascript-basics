# Complex Data Types in JavaScript

In JavaScript, **complex data types** are data structures that can store multiple values and are **mutable** (can be changed after creation). Unlike primitive data types, complex data types are **reference types**, meaning they are stored in memory as references rather than as direct values.

## JavaScript Complex Data Types

JavaScript has **three primary complex data types**:

1. **Object** – A collection of key-value pairs.
2. **Array** – An ordered list of values.
3. **Function** – A reusable block of code.

### 1. Objects
Objects in JavaScript are collections of properties. Each property consists of a key (string) and a value (which can be any data type).

```javascript
const person = {
  name: "Alice",
  age: 25,
  isStudent: false
};
console.log(person.name); // "Alice"
```

### 2. Arrays
Arrays are ordered collections of elements, which can be accessed using their index.

```javascript
const numbers = [1, 2, 3, 4, 5];
console.log(numbers[0]); // 1
```

### 3. Functions
Functions are objects in JavaScript that can be assigned to variables and passed as arguments.

```javascript
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Bob")); // "Hello, Bob!"
```

## Reference Type Behavior
Unlike primitive types, complex types are **passed by reference**, meaning changes to an object or array inside a function will affect the original data.

```javascript
const obj = { value: 10 };

function modify(obj) {
  obj.value = 20;
}

modify(obj);
console.log(obj.value); // 20
```

Understanding complex data types is essential for writing efficient and scalable JavaScript programs!
