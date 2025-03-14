# JavaScript: `let` vs `const` vs `var`

In JavaScript, there are three ways to declare variables: `var`, `let`, and `const`. Each has different behavior regarding **scope**, **hoisting**, and **mutability**.

---

## 1. `var`
`var` is the old way of declaring variables in JavaScript and has several issues related to **scoping** and **hoisting**.

### Characteristics:
- **Function-scoped**: A variable declared with `var` is visible throughout the function, even before its declaration.
- **Hoisted**: Moves the declaration to the top of its scope, but not the initialization.
- **Can be re-declared**: You can declare the same variable multiple times.
- **Can be updated**: You can assign a new value.

### Example:
```javascript
function example() {
    console.log(x); // undefined (Hoisting)
    var x = 10; // Declaration and initialization
    console.log(x); // 10
}

## JavaScript: `let`

The `let` keyword was introduced in **ES6 (ECMAScript 2015)** and is used to declare variables in JavaScript. It provides **block scope**, making it a better alternative to `var`.

---

## Characteristics of `let`
- **Block-scoped**: The variable is confined to the `{}` block where it is defined.
- **Hoisted but not initialized**: Unlike `var`, `let` is hoisted but not assigned `undefined`.
- **Cannot be re-declared in the same scope**: You cannot declare the same variable twice in a block.
- **Can be updated**: You can assign a new value.

---

## 1️⃣ Block Scope

A variable declared with `let` is only available **inside the block** `{}` where it was defined.

```javascript
if (true) {
    let x = 10;
    console.log(x); // ✅ 10 (Accessible inside the block)
}
console.log(x); // ❌ ReferenceError: x is not defined
```

## JavaScript: `const`

The `const` keyword was introduced in **ES6 (ECMAScript 2015)** and is used to declare **constant** variables in JavaScript. It provides **block scope** and **cannot be reassigned**, making it ideal for values that should not change.

---


## 🔥 Characteristics of `const`
- **Block-scoped**: The variable is confined to the `{}` block where it is defined.
- **Hoisted but not initialized**: Unlike `var`, `const` is hoisted but not assigned `undefined`.
- **Cannot be re-declared in the same scope**: You cannot declare the same variable twice in a block.
- **Cannot be updated**: You **cannot** assign a new value to a `const` variable.

---

## 1️⃣ Block Scope

A variable declared with `const` is **only available inside the block** `{}` where it was defined.

```javascript
if (true) {
    const x = 10;
    console.log(x); // ✅ 10 (Accessible inside the block)
}
console.log(x); // ❌ ReferenceError: x is not defined
