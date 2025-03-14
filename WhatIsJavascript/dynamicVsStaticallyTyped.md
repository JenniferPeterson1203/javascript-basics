# Dynamically Typed vs Statically Typed Languages

## Overview
Programming languages are generally classified as either dynamically typed or statically typed based on how they handle type checking. Understanding the difference is crucial for writing efficient and error-free code.

## Dynamically Typed Languages
Dynamically typed languages perform type checking at **runtime**. This means variables are not explicitly declared with types; instead, they infer types based on the assigned values. 

### Characteristics:
- **Type checking happens at runtime**
- **Implicit type coercion is allowed** (automatic conversion of data types)
- **More flexibility but higher risk of runtime errors**
- **Less boilerplate code** compared to statically typed languages

### Examples of Dynamically Typed Languages:
- **JavaScript**
- **Python**
- **Ruby**
- **PHP**

### Example in JavaScript:
```javascript
let x = 10;  // x is a number
x = "Hello"; // Now x is a string (no type error)
console.log(x); // Output: Hello
```

## Statically Typed Languages
Statically typed languages perform type checking at **compile-time**. This means variables must be explicitly declared with a type, and the type cannot change.

### Characteristics:
- **Type checking happens at compile time**
- **Implicit type coercion is not allowed** (stronger type safety)
- **Less flexibility but fewer runtime errors**
- **Better performance since types are known ahead of execution**

### Examples of Statically Typed Languages:
- **Java**
- **TypeScript**
- **C++**
- **Go**


---

## Implicit vs Explicit Type Coercion
### Implicit Type Coercion (Type Conversion Without Explicit Instructions)
Implicit type coercion happens automatically when the programming language converts one data type to another without explicit instructions from the programmer.

#### Example in JavaScript:
```javascript
console.log("5" + 3);  // Output: "53" (number converted to string)
console.log("5" - 3);  // Output: 2 (string converted to number)
```
JavaScript automatically converts types based on the operator used.

### Explicit Type Coercion (Manual Type Conversion)
Explicit type coercion requires the programmer to manually convert one type into another using built-in functions.

#### Example in JavaScript:
```javascript
console.log(Number("5") + 3);  // Output: 8
console.log(String(5) + "3");  // Output: "53"
```

#### Example in TypeScript (a Statically Typed Language):
```typescript
let num: number = Number("42");
let str: string = String(100);
console.log(num + 10); // Output: 52
console.log(str + " apples"); // Output: "100 apples"
```

---

## Summary
| Feature                 | Dynamically Typed | Statically Typed |
|-------------------------|------------------|------------------|
| Type Checking Time      | Runtime          | Compile-time     |
| Implicit Type Coercion  | Allowed          | Not Allowed      |
| Flexibility            | High             | Low              |
| Error Detection        | Runtime Errors   | Compile-time Errors |
| Performance            | Generally Slower | Generally Faster |

Dynamically typed languages offer **flexibility**, making them ideal for **rapid development and prototyping**. However, they come with **runtime errors** and **performance issues**.

Statically typed languages provide **stronger type safety** and **better performance**, making them suitable for **large-scale applications and production environments**.

