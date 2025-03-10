# What is a Number?

In JavaScript, a **number** is a primitive data type used to represent numeric values. Unlike some other programming languages, JavaScript has only **one** number type, which can represent both **integers** and **floating-point** values.

## How Numbers Are Stored in Memory

In JavaScript, all numbers (except **BigInt**) are stored using the **IEEE 754** 64-bit floating-point format. This means:

- Every number, whether an integer or a decimal, takes up **64 bits (8 bytes)** in memory.
- The 64 bits are split into three parts:
  - **1 bit** for the sign (positive or negative).
  - **11 bits** for the exponent (controls the number's size).
  - **52 bits** for the fraction (stores the actual digits).
- This format enables JavaScript to handle large and small numbers but can cause **precision errors** (e.g., `0.1 + 0.2 !== 0.3`).

## Number Methods and Properties

### Understanding the Difference Between Methods and Properties
Just like with strings, numbers also have **properties** and **methods**.

- **Properties** store **data** about an object.
- **Methods** are **functions attached to the object** that allow us to manipulate or interact with the object.

### Properties on the `Number` Object
- `Number.MAX_VALUE` – The largest possible number in JavaScript.
- `Number.MIN_VALUE` – The smallest possible number in JavaScript.
- `Number.POSITIVE_INFINITY` – Represents positive infinity.
- `Number.NEGATIVE_INFINITY` – Represents negative infinity.
- `Number.NaN` – Represents "Not a Number."

### Methods on the `Number` Object
- `.toFixed()` – Rounds a number to a fixed number of decimal places.
- `.toPrecision()` – Formats a number to a specified length.
- `.toString()` – Converts a number to a string.
- `.parseInt()` – Parses a string into an integer.
- `.parseFloat()` – Parses a string into a floating-point number.
- `.isNaN()` – Checks if a value is NaN (Not a Number).

### Example
Let's look at some examples in `./primitiveDataTypes/numbers/numbers.js`.
