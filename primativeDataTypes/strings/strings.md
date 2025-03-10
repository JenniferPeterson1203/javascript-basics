# What is a String?

In JavaScript, a **string** is a sequence of characters used to represent text. Strings are **immutable**, meaning their contents cannot be changed after creation. Strings can be enclosed in:

- Single quotes (`' '`)
- Double quotes (`" "`)
- Template literals (`` ` ` ``)

## How Strings Are Stored in Memory

In JavaScript, strings are stored as **UTF-16 encoded sequences**. This means:

- Each character in a string takes up **16 bits (2 bytes)** in memory.
- Strings are **immutable**, so modifying a string creates a new one in memory rather than altering the original.
- Because JavaScript uses **reference types**, string variables store a **reference** to the actual data in memory rather than the data itself.

## String Methods and Properties

### Understanding the Difference Between Methods and Properties

Everything in JavaScript is an **object**. This will be expanded upon in later lessons. All objects have various **properties** and **methods**. 

So what is the difference between **properties** and **methods**?

- **Properties** are essentially key-value parts within an object. They store **data or state** about the object.  
- **Methods** are **functions attached to the object** that perform actions.

### Properties on the `String` Object

- `.length` – Returns the number of characters in a string.

### Methods on the `String` Object

- `.slice()` – Extracts a section of a string and returns it as a new string.
- `.split()` – Splits a string into an array based on a specified delimiter.
- `.toUpperCase()` – Converts all characters to uppercase.
- `.toLowerCase()` – Converts all characters to lowercase.
- `.concat()` – Combines two or more strings.
- `.charAt()` – Returns the character at a specified index.
- `.indexOf()` – Returns the index of the first occurrence of a specified value.

### Example

Let's look at some examples in `./primitiveDataTypes/strings/strings.js`.
