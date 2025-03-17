# Arrays in JavaScript

## Introduction

In JavaScript, **arrays** are ordered collections of values that can store multiple elements in a single variable. Unlike primitive data types, arrays are **reference types**, meaning they are stored in memory as references rather than direct values. Arrays are flexible, allowing elements of different types and providing various built-in methods for manipulation.

## Creating Arrays

JavaScript provides multiple ways to create an array:

### Using Array Literals (Recommended)
```javascript
const numbers = [1, 2, 3, 4, 5];
```

### Using the `Array` Constructor
```javascript
const fruits = new Array("Apple", "Banana", "Cherry");
```

### Creating an Empty Array
```javascript
const emptyArray = [];
```

## Accessing Elements

Array elements are accessed using **zero-based indexing**.

```javascript
const colors = ["Red", "Green", "Blue"];
console.log(colors[0]); // "Red"
console.log(colors[1]); // "Green"
```

Attempting to access an out-of-bounds index returns `undefined`.

```javascript
console.log(colors[5]); // undefined
```

## Modifying Arrays

### Adding Elements

#### Using `push()` (Add to End)
```javascript
const numbers = [1, 2, 3];
numbers.push(4);
console.log(numbers); // [1, 2, 3, 4]
```

#### Using `unshift()` (Add to Start)
```javascript
numbers.unshift(0);
console.log(numbers); // [0, 1, 2, 3, 4]
```

### Removing Elements

#### Using `pop()` (Remove from End)
```javascript
numbers.pop();
console.log(numbers); // [0, 1, 2, 3]
```

#### Using `shift()` (Remove from Start)
```javascript
numbers.shift();
console.log(numbers); // [1, 2, 3]
```

## Iterating Over Arrays

### Using `for` Loop
```javascript
const items = ["a", "b", "c"];
for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
}
```

### Using `forEach()`
```javascript
items.forEach(item => console.log(item));
```

### Using `map()` (Creates a New Array)
```javascript
const upperCaseItems = items.map(item => item.toUpperCase());
console.log(upperCaseItems); // ["A", "B", "C"]
```

## Array Methods

### Finding Elements

#### Using `indexOf()`
```javascript
const nums = [10, 20, 30, 40];
console.log(nums.indexOf(20)); // 1
console.log(nums.indexOf(50)); // -1 (not found)
```

#### Using `includes()`
```javascript
console.log(nums.includes(30)); // true
console.log(nums.includes(50)); // false
```

### Filtering and Transforming Arrays

#### Using `filter()`
```javascript
const evenNumbers = nums.filter(num => num % 2 === 0);
console.log(evenNumbers); // [10, 20, 30, 40]
```

#### Using `reduce()`
```javascript
const sum = nums.reduce((acc, num) => acc + num, 0);
console.log(sum); // 100
```

### Sorting Arrays

#### Using `sort()` (Alphanumeric Sort by Default)
```javascript
const letters = ["b", "a", "c"];
letters.sort();
console.log(letters); // ["a", "b", "c"]
```

#### Sorting Numbers (Custom Compare Function Required)
```javascript
const numbers = [10, 2, 5, 1];
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 2, 5, 10]
```

### Reversing Arrays
```javascript
const reversed = letters.reverse();
console.log(reversed); // ["c", "b", "a"]
```

## Array Length and Resizing

The `length` property returns the number of elements in an array and can be modified to **truncate** an array.

```javascript
const numbers = [1, 2, 3, 4, 5];
numbers.length = 3;
console.log(numbers); // [1, 2, 3]
```

## Spread Operator (`...`)

The **spread operator** allows copying or merging arrays.

### Copying an Array
```javascript
const original = [1, 2, 3];
const copy = [...original];
console.log(copy); // [1, 2, 3]
```

### Merging Arrays
```javascript
const arr1 = [1, 2];
const arr2 = [3, 4];
const merged = [...arr1, ...arr2];
console.log(merged); // [1, 2, 3, 4]
```

## Multi-Dimensional Arrays

JavaScript supports **nested arrays**, allowing the creation of matrices.

```javascript
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log(matrix[1][2]); // 6
```

## Conclusion

Arrays in JavaScript are powerful data structures with numerous built-in methods for manipulation. Understanding them is crucial for writing efficient and effective JavaScript programs.

